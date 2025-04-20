<template>
  <div class="product-detail">
    <div v-if="loading" class="loading">
      <p>Ürün yükleniyor...</p>
    </div>

    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
      <button @click="loadProduct" class="retry-button">Tekrar Dene</button>
    </div>

    <div v-else-if="product" class="product-content">
      <div class="product-image">
        <img :src="product.image" :alt="product.name" />
      </div>

      <div class="product-info">
        <div class="favorite-button" @click="toggleFavorite">
          <span :class="{ 'is-favorite': isFavorite }">❤</span>
        </div>

        <h1>{{ product.name }}</h1>
        <p class="description">{{ product.description }}</p>
        <p class="category">{{ product.category }}</p>
        <p class="price">{{ product.price }} TL</p>
        <p class="stock">Stok: {{ product.stock }}</p>

        <div class="quantity-selector">
          <button @click="decreaseQuantity" :disabled="quantity <= 1">-</button>
          <input type="number" v-model="quantity" min="1" :max="product.stock" />
          <button @click="increaseQuantity" :disabled="quantity >= product.stock">+</button>
        </div>

        <button @click="addToCart" class="add-to-cart" :disabled="!product.stock">
          Sepete Ekle
        </button>

        <router-link to="/" class="back-button">← Ana Sayfaya Dön</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProductDetail',
  data() {
    return {
      product: null,
      loading: true,
      error: null,
      quantity: 1,
      favorites: []
    };
  },
  computed: {
    isFavorite() {
      return this.favorites.some(f => f.id === this.product?.id);
    }
  },
  created() {
    this.loadProduct();
    this.loadFavorites();
  },
  methods: {
    async loadProduct() {
      try {
        this.loading = true;
        this.error = null;

        const productId = this.$route.params.id;
        const apiKey = 'fd5aa1bddbefd821cdb733180aceb07c';
        const formId = '251074038338960';
        const endpoint = `https://api.jotform.com/form/${formId}/payment-info?apiKey=${apiKey}`;

        const response = await axios.get(endpoint);
        
        if (response.data && response.data.responseCode === 200) {
          const content = response.data.content;
          
          if (content && content.products && Array.isArray(content.products)) {
            const product = content.products.find(p => p.pid === productId);
            
            if (product) {
              let imageUrl = '';
              try {
                const images = JSON.parse(product.images || '[]');
                imageUrl = images[0] || `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000)}`;
              } catch (e) {
                imageUrl = `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000)}`;
              }

              this.product = {
                id: product.pid,
                name: product.name,
                price: parseFloat(product.price),
                image: imageUrl,
                description: product.description,
                category: 'Genel',
                stock: parseInt(product.stockQuantityAmount || '0')
              };
            } else {
              this.error = 'Ürün bulunamadı.';
            }
          } else {
            this.error = 'Ürün verisi bulunamadı.';
          }
        } else {
          this.error = 'API yanıtı başarısız.';
        }
      } catch (error) {
        console.error('Ürün yüklenirken hata oluştu:', error);
        this.error = 'Ürün yüklenirken bir hata oluştu.';
      } finally {
        this.loading = false;
      }
    },
    loadFavorites() {
      const savedFavorites = localStorage.getItem('favorites');
      this.favorites = savedFavorites ? JSON.parse(savedFavorites) : [];
    },
    saveFavorites() {
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
    toggleFavorite() {
      if (!this.product) return;

      const index = this.favorites.findIndex(f => f.id === this.product.id);
      if (index === -1) {
        this.favorites.push(this.product);
      } else {
        this.favorites.splice(index, 1);
      }
      this.saveFavorites();
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    increaseQuantity() {
      if (this.quantity < this.product.stock) {
        this.quantity++;
      }
    },
    addToCart() {
      if (!this.product) return;

      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingItem = cart.find(item => item.id === this.product.id);
      
      if (existingItem) {
        existingItem.quantity += this.quantity;
      } else {
        cart.push({ ...this.product, quantity: this.quantity });
      }
      
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Ürün sepete eklendi!');
    }
  }
};
</script>

<style scoped>
.product-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.loading, .error {
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

.retry-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.product-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.product-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.product-info {
  position: relative;
  padding: 1rem;
}

.favorite-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.favorite-button span {
  color: #ccc;
  font-size: 1.2rem;
}

.favorite-button .is-favorite {
  color: #e74c3c;
}

h1 {
  color: #2c3e50;
  margin: 0 0 1rem 0;
}

.description {
  color: #666;
  margin: 1rem 0;
  line-height: 1.6;
}

.category {
  color: #3498db;
  font-size: 0.9rem;
  text-transform: uppercase;
  margin: 1rem 0;
}

.price {
  color: #e74c3c;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
}

.stock {
  color: #27ae60;
  font-size: 1rem;
  margin: 1rem 0;
}

.quantity-selector {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
}

.quantity-selector button {
  width: 40px;
  height: 40px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;
}

.quantity-selector button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quantity-selector input {
  width: 60px;
  height: 40px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.add-to-cart {
  width: 100%;
  padding: 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;
  margin: 1rem 0;
  transition: background-color 0.3s;
}

.add-to-cart:hover {
  background-color: #2980b9;
}

.add-to-cart:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

.back-button {
  display: inline-block;
  color: #3498db;
  text-decoration: none;
  margin-top: 1rem;
  transition: color 0.3s;
}

.back-button:hover {
  color: #2980b9;
}
</style> 