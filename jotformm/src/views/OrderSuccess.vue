<template>
  <div class="order-success">
    <div class="success-container">
      <div class="success-icon">
        <i class="fas fa-check-circle"></i>
      </div>
      <div class="success-message">
        <h1>Siparişiniz Başarıyla Alındı!</h1>
        <p>Siparişiniz için teşekkür ederiz.</p>
        <router-link to="/" class="home-button">Ana Sayfaya Dön</router-link>
      </div>
      
      <div class="order-items">
        <h2>Sipariş Edilen Ürünler</h2>
        <div v-for="item in orderItems" :key="item.id" class="order-item">
          <img :src="item.image" :alt="item.name" class="item-image">
          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p class="quantity">Adet: {{ item.quantity }}</p>
            <p class="price">{{ item.price * item.quantity }} TL</p>
          </div>
        </div>
      </div>

      <div class="total-section">
        <h3>Toplam Tutar: {{ formatPrice(total) }} TL</h3>
      </div>

      <div class="buttons">
        <router-link to="/" class="home-button">
          <i class="fas fa-shopping-bag"></i> Alışverişe Devam Et
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderSuccess',
  props: {
    total: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      orderItems: []
    }
  },
  created() {
    // LocalStorage'dan sipariş edilen ürünleri al
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.orderItems = JSON.parse(savedCart);
    }
  },
  methods: {
    formatPrice(price) {
      return parseFloat(price).toFixed(2)
    }
  }
}
</script>

<style scoped>
.order-success {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 20px;
}

.success-container {
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 800px;
  width: 100%;
}

.success-icon {
  font-size: 64px;
  color: #4CAF50;
  margin-bottom: 20px;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 28px;
}

.success-message {
  color: #666;
  margin-bottom: 30px;
  line-height: 1.6;
}

.order-items {
  margin: 30px 0;
  text-align: left;
}

.order-items h2 {
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
}

.order-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
  gap: 20px;
}

.order-item:last-child {
  border-bottom: none;
}

.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.item-details {
  flex: 1;
}

.item-details h3 {
  margin: 0 0 5px 0;
  color: #2c3e50;
}

.quantity {
  color: #666;
  margin: 5px 0;
}

.price {
  color: #4CAF50;
  font-weight: bold;
  margin: 5px 0;
}

.total-section {
  margin: 30px 0;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.total-section h3 {
  color: #2c3e50;
  margin: 0;
}

.buttons {
  margin-top: 30px;
}

.home-button {
  background-color: #4CAF50;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.home-button:hover {
  background-color: #45a049;
  transform: translateY(-2px);
}

.home-button i {
  font-size: 16px;
}

/* Mobil cihazlar için medya sorguları */
@media screen and (max-width: 768px) {
  .success-container {
    padding: 20px;
    margin: 10px;
  }

  .success-icon {
    font-size: 48px;
  }

  h1 {
    font-size: 24px;
  }

  .order-item {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  .item-image {
    width: 120px;
    height: 120px;
    margin: 0 auto;
  }

  .item-details {
    text-align: center;
  }

  .home-button {
    width: 100%;
    justify-content: center;
  }
}

/* Çok küçük ekranlar için ek düzenlemeler */
@media screen and (max-width: 480px) {
  .success-container {
    padding: 15px;
  }

  .success-icon {
    font-size: 40px;
  }

  h1 {
    font-size: 20px;
  }

  .item-image {
    width: 100px;
    height: 100px;
  }
}
</style> 