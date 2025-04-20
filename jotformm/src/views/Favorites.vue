<template>
  <div class="favorites">
    <header class="header">
      <h1>Favorilerim</h1>
      <router-link to="/" class="back-button">← Ana Sayfaya Dön</router-link>
    </header>

    <div v-if="loading" class="loading">
      <p>Favoriler yükleniyor...</p>
    </div>

    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
      <button @click="loadFavorites" class="retry-button">Tekrar Dene</button>
    </div>

    <div v-else-if="favorites.length === 0" class="empty-state">
      <p>Henüz favori ürününüz bulunmuyor.</p>
      <router-link to="/" class="browse-button">Ürünleri Keşfet</router-link>
    </div>

    <div v-else class="favorites-grid">
      <div v-for="product in favorites" :key="product.id" class="product-card">
        <div class="favorite-button" @click="removeFavorite(product)">
          <span class="is-favorite">❤</span>
        </div>
        <img :src="product.image" :alt="product.name" @click="goToDetail(product.id)" />
        <div class="product-info">
          <h3 @click="goToDetail(product.id)">{{ product.name }}</h3>
          <p class="description">{{ product.description }}</p>
          <p class="category">{{ product.category }}</p>
          <p class="price">{{ product.price }} TL</p>
          <p class="stock">Stok: {{ product.stock }}</p>
          <button @click="addToCart(product)" class="add-to-cart">Sepete Ekle</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'Favorites',
  data() {
    return {
      favorites: [],
      loading: true,
      error: null
    };
  },
  created() {
    this.loadFavorites();
  },
  methods: {
    loadFavorites() {
      try {
        this.loading = true;
        this.error = null;
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
          const parsedFavorites = JSON.parse(savedFavorites);
          this.favorites = parsedFavorites.map(favorite => ({
            ...favorite,
            id: String(favorite.id)
          }));
        } else {
          this.favorites = [];
        }
      } catch (error) {
        console.error('Favoriler yüklenirken hata oluştu:', error);
        this.error = 'Favoriler yüklenirken bir hata oluştu.';
      } finally {
        this.loading = false;
      }
    },
    removeFavorite(product) {
      const index = this.favorites.findIndex(f => String(f.id) === String(product.id));
      if (index !== -1) {
        this.favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
        this.loadFavorites();
      }
    },
    goToDetail(productId) {
      this.$router.push(`/product/${productId}`);
    },
    addToCart(product) {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingItem = cart.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Ürün sepete eklendi!');
    }
  }
};
</script>

<style scoped>
.favorites {
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

.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  position: relative;
}

.product-card:hover {
  transform: translateY(-5px);
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

.favorite-button .is-favorite {
  color: #e74c3c;
  font-size: 1.2rem;
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
}

.product-info {
  padding: 1rem;
}

.product-info h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  cursor: pointer;
}

.description {
  color: #666;
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

.category {
  color: #3498db;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin: 0.5rem 0;
}

.price {
  color: #e74c3c;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.stock {
  color: #27ae60;
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

.add-to-cart {
  width: 100%;
  padding: 0.8rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-to-cart:hover {
  background-color: #2980b9;
}
</style> 