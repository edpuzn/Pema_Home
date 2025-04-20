<template>
  <div class="cart">
    <header class="header">
      <h1>Sepetim</h1>
      <router-link to="/" class="back-button">← Ana Sayfaya Dön</router-link>
    </header>

    <div v-if="loading" class="loading">
      <p>Sepet yükleniyor...</p>
    </div>

    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
      <button @click="loadCart" class="retry-button">Tekrar Dene</button>
    </div>

    <div v-else-if="cartItems.length === 0" class="empty-state">
      <p>Sepetiniz boş.</p>
      <router-link to="/" class="browse-button">Ürünleri Keşfet</router-link>
    </div>

    <div v-else class="cart-container">
      <div class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name" class="item-image">
          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p class="price">{{ item.price }} TL</p>
            <div class="quantity-controls">
              <button @click="decreaseQuantity(item)" :disabled="item.quantity <= 1">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="increaseQuantity(item)" :disabled="item.quantity >= item.stock">+</button>
            </div>
            <p class="total">Toplam: {{ item.price * item.quantity }} TL</p>
          </div>
          <button @click="removeFromCart(item)" class="remove-button">×</button>
        </div>
      </div>

      <div class="checkout-form">
        <h2>Sipariş Bilgileri</h2>
        <form @submit.prevent="submitOrder">
          <div class="form-group">
            <label>Ad Soyad</label>
            <input 
              type="text" 
              v-model="customerInfo.name" 
              required
              placeholder="Adınız ve soyadınız"
            >
          </div>
          <div class="form-group">
            <label>Telefon</label>
            <input 
              type="tel" 
              v-model="customerInfo.phone" 
              required
              placeholder="5XX-XXX XX XX"
              maxlength="10"
              @input="validatePhone"
              @keypress="onlyNumbers"
              pattern="[0-9]*"
              inputmode="numeric"
            >
            <small v-if="phoneError" class="error-message">{{ phoneError }}</small>
            <small v-if="customerInfo.phone" class="phone-preview">
            </small>
          </div>
          <div class="form-group">
            <label>E-posta</label>
            <input 
              type="email" 
              v-model="customerInfo.email" 
              required
              placeholder="E-posta adresiniz"
            >
          </div>
          <div class="form-group">
            <label>Adres</label>
            <textarea 
              v-model="customerInfo.address" 
              required
              placeholder="Tam adresiniz"
              rows="3"
            ></textarea>
          </div>
          <div class="order-summary">
            <h3>Sipariş Özeti</h3>
            <div class="summary-item total">
              <span>Toplam:</span>
              <span>{{ total }} TL</span>
            </div>
          </div>
          <button type="submit" class="submit-order" :disabled="submitting">
            {{ submitting ? 'Sipariş Gönderiliyor...' : 'Siparişi Tamamla' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  // eslint-disable-next-line
  name: 'ShoppingCart',
  data() {
    return {
      cartItems: [],
      loading: false,
      error: null,
      submitting: false,
      phoneError: null,
      customerInfo: {
        name: '',
        address: '',
        phone: '',
        email: ''
      }
    };
  },
  computed: {
    total() {
      return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  },
  created() {
    this.loadCart();
  },
  methods: {
    loadCart() {
      try {
        this.loading = true;
        this.error = null;
        const savedCart = localStorage.getItem('cart');
        this.cartItems = savedCart ? JSON.parse(savedCart) : [];
      } catch (error) {
        this.error = 'Sepet yüklenirken bir hata oluştu.';
      } finally {
        this.loading = false;
      }
    },
    increaseQuantity(item) {
      try {
        if (!item) {
          alert('Ürün bulunamadı!');
          return;
        }

        const cartItem = this.cartItems.find(i => i.id === item.id);
        if (cartItem) {
          cartItem.quantity++;
          this.saveCart();
        }
      } catch (error) {
        alert('Miktar güncellenirken bir hata oluştu!');
      }
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
        this.saveCart();
      }
    },
    removeFromCart(item) {
      const index = this.cartItems.findIndex(i => i.id === item.id);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
        this.saveCart();
      }
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    },
    validatePhone(event) {
      const phone = event.target.value;
      if (phone.length > 0 && !/^\d{10}$/.test(phone)) {
        this.phoneError = 'Telefon numarası 10 haneli olmalıdır';
      } else {
        this.phoneError = null;
      }
    },
    onlyNumbers(event) {
      const keyCode = event.keyCode || event.which;
      const keyValue = String.fromCharCode(keyCode);
      if (!/^\d+$/.test(keyValue)) {
        event.preventDefault();
      }
    },
    formatPhoneNumber(phone) {
      if (!phone) return '';
      const cleaned = phone.replace(/\D/g, '');
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);
      if (match) {
        return `${match[1]}-${match[2]} ${match[3]} ${match[4]}`;
      }
      return phone;
    },
    async submitOrder() {
      if (this.phoneError) {
        alert('Lütfen geçerli bir telefon numarası giriniz');
        return;
      }
      try {
        this.submitting = true;
        
        // JotForm API bilgileri
        const apiKey = 'fd5aa1bddbefd821cdb733180aceb07c';
        const formId = '251074038338960';
        
        // FormData oluştur
        const form = new FormData();
        form.append('submission[34]', this.customerInfo.name);
        form.append('submission[36]', this.customerInfo.address);
        form.append('submission[21]', this.cartItems.map(item => item.quantity).join('\n'));
        form.append('submission[22]', `${this.total} TL`);
        form.append('submission[24]', this.customerInfo.email); 

        // Tüm ürün ID'leri
        const allProductIds = [1096, 1111, 1004, 1037, 1005, 1006, 1063, 1062, 1061, 1060, 1043, 1072, 1075, 1116, 1113, 1007, 1105, 1008, 1009, 1010, 1047, 1011, 1106, 1107, 1102, 1073, 1012, 1104, 1013, 1099, 1100, 1014, 1050, 1045, 1044, 1046, 1042, 1041, 1083, 1065, 1066, 1067, 1089, 1086, 1088, 1087, 1082, 1074, 1110, 1095, 1109, 1108, 1015, 1016, 1040, 1017, 1068, 1018, 1056, 1055, 1054, 1094, 1081, 1069, 1020, 1093, 1021, 1092, 1019, 1091, 1038, 1039, 1084, 1115, 1114, 1023, 1024, 1098, 1097, 1025, 1026, 1027, 1028, 1029, 1071, 1078, 1085, 1079, 1030, 1070, 1076, 1077, 1090, 1080, 1053, 1112, 1052, 1103, 1051, 1049, 1048, 1031, 1033, 1032, 1034, 1035, 1117, 1036, 1101, 1057, 1058, 1059];

        // Her ürün için form verisi ekle
        allProductIds.forEach(id => {
          const cartItem = this.cartItems.find(item => parseInt(item.id) === id);
          form.append(`q21_forWholesale[special_${id}][item_0]`, cartItem ? cartItem.quantity.toString() : '0');
        });

        // JotForm'a gönder
        const response = await axios.post(
          `https://submit.jotform.com/submit/${formId}`,
          form,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );

        if (response.data && response.data.responseCode === 200) {
          // Başarılı sipariş sonrası sepeti temizle
          const totalAmount = this.total;
          localStorage.removeItem('cart');
          this.cartItems = [];

          // Başarılı sipariş sayfasına yönlendir
          await this.$router.push({
            path: '/order-success',
            query: { total: totalAmount }
          });
        } else {
          throw new Error('Sipariş gönderilemedi');
        }
      } catch (error) {
        alert('Sipariş gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
      } finally {
        this.submitting = false;
      }
    }
  }
};
</script>

<style scoped>
.cart {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.header h1 {
  color: #2c3e50;
  margin: 0;
}

.back-button {
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s;
}

.back-button:hover {
  color: #2980b9;
}

.loading, .error, .empty-state {
  text-align: center;
  padding: 2rem;
  color: #666;
  margin-bottom: 2rem;
  border-radius: 8px;
}

.error {
  color: #e74c3c;
  background-color: #fdf0ed;
  border: 1px solid #fadbd8;
}

.empty-state {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
}

.retry-button, .browse-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.retry-button:hover, .browse-button:hover {
  background-color: #2980b9;
}

.cart-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.cart-items {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.cart-item {
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  position: relative;
}

.cart-item:last-child {
  border-bottom: none;
}

.item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
}

.item-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.item-details h3 {
  margin: 0;
  color: #2c3e50;
}

.price {
  color: #e74c3c;
  font-weight: bold;
  margin: 0;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quantity-controls button {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.quantity-controls button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quantity-controls span {
  min-width: 30px;
  text-align: center;
}

.total {
  color: #2c3e50;
  font-weight: bold;
}

.remove-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  color: #e74c3c;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;
}

.checkout-form {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  height: fit-content;
}

.checkout-form h2 {
  color: #2c3e50;
  margin: 0 0 1.5rem 0;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group textarea {
  resize: vertical;
}

.order-summary {
  margin: 1.5rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 4px;
}

.order-summary h3 {
  color: #2c3e50;
  margin: 0 0 1rem 0;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: #666;
}

.summary-item.total {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
  color: #2c3e50;
  font-weight: bold;
  font-size: 1.2rem;
}

.submit-order {
  width: 100%;
  padding: 1rem;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-order:hover:not(:disabled) {
  background-color: #219a52;
}

.submit-order:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.error-message {
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.3rem;
  display: block;
}

.phone-preview {
  color: #666;
  font-size: 0.9rem;
  margin-top: 0.3rem;
  display: block;
}
</style> 