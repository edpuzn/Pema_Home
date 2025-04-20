<template>
  <div class="home">
    <div class="hero">
      <h2>Taze ve Kaliteli Ürünler</h2>
      <p>En taze meyve ve sebzeler kapınızda!</p>
    </div>

    <div class="products-container">
      <div class="filters">
        <h3>Filtreler</h3>
        <div class="filter-group">
          <label>Arama</label>
          <input
              type="text"
              v-model="searchQuery"
              placeholder="Ürün ara..."
              @input="filterProducts"
              class="search-input"
          >
        </div>
        <div class="filter-group">
          <label>Kategori</label>
          <select v-model="selectedCategory" @change="filterProducts">
            <option value="">Tümü</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
        <div class="filter-group">
          <label>Fiyat Aralığı</label>
          <div class="price-range">
            <input type="number" v-model="minPrice" placeholder="Min" @change="filterProducts">
            <span>-</span>
            <input type="number" v-model="maxPrice" placeholder="Max" @change="filterProducts">
          </div>
        </div>
        <div class="filter-group">
          <label>Sıralama</label>
          <select v-model="sortBy" @change="sortProducts">
            <option value="name">İsim (A-Z)</option>
            <option value="price">Fiyat (Düşük-Yüksek)</option>
            <option value="price-desc">Fiyat (Yüksek-Düşük)</option>
          </select>
        </div>
      </div>

      <div class="products-section">
        <h2>Ürünlerimiz</h2>

        <!-- Yükleme durumu -->
        <div v-if="loading" class="loading">
          <p>Ürünler yükleniyor...</p>
        </div>

        <!-- Hata mesajı -->
        <div v-if="error" class="error">
          <p>{{ error }}</p>
          <button @click="loadProducts" class="retry-button">Tekrar Dene</button>
        </div>

        <!-- Ürün listesi -->
        <div v-if="!loading && !error" class="product-grid">
          <div v-for="product in filteredProducts" :key="product.id" class="product-card">
            <div class="favorite-button" @click="toggleFavorite(product)">
              <span :class="{ 'is-favorite': isFavorite(product) }">❤</span>
            </div>
            <img :src="product.image" :alt="product.name" @click="showProductImage(product)" />
            <div class="product-info">
              <h3 @click="goToDetail(product.id)">{{ product.name }}</h3>
              <p class="description">{{ product.description }}</p>
              <p class="category">{{ product.category }}</p>
              <p class="price">{{ product.price }} TL</p>
              <p class="stock">Stok: {{ product.stock }}</p>
              <button
                  @click="addToCart(product)"
                  class="add-to-cart"
                  :class="{ 'added': addedToCart[product.id] }"
              >
                {{ addedToCart[product.id] ? 'Sepete Eklendi ✓' : 'Sepete Ekle' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fotoğraf Modal -->
    <div v-if="showImageModal" class="image-modal" @click="closeImageModal">
      <div class="modal-content">
        <span class="close-button" @click="closeImageModal">&times;</span>
        <img :src="selectedImage" :alt="selectedProduct?.name" class="modal-image">
        <div class="image-info">
          <h3>{{ selectedProduct?.name }}</h3>
          <p class="price">{{ selectedProduct?.price }} TL</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {

  name: 'HomeView',
  data() {
    return {
      products: [],
      loading: false,
      error: null,
      selectedCategory: '',
      minPrice: '',
      maxPrice: '',
      sortBy: 'name',
      favorites: [],
      searchQuery: '',
      addedToCart: {},
      showImageModal: false,
      selectedProduct: null,
      selectedImage: ''
    };
  },
  computed: {
    categories() {
      return [...new Set(this.products.map(p => p.category))];
    },
    filteredProducts() {
      let result = [...this.products];

      // Arama filtresi
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        result = result.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
      }

      // Kategori filtresi
      if (this.selectedCategory) {
        result = result.filter(p => p.category === this.selectedCategory);
      }

      // Fiyat filtresi
      if (this.minPrice) {
        result = result.filter(p => p.price >= parseFloat(this.minPrice));
      }
      if (this.maxPrice) {
        result = result.filter(p => p.price <= parseFloat(this.maxPrice));
      }

      // Fiyat Sıralama
      result.sort((a, b) => {
        switch (this.sortBy) {
          case 'name':
            return a.name.localeCompare(b.name);
          case 'price':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          default:
            return 0;
        }
      });

      return result;
    }
  },
  created() {
    this.loadProducts();
    this.loadFavorites();
    // ESC tuşu için event listener ekle
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeUnmount() {
    // Component yok edilmeden önce event listener'ı kaldır
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    async loadProducts() {
      try {
        this.loading = true;
        this.error = null;

        const apiKey = 'fd5aa1bddbefd821cdb733180aceb07c';
        const formId = '251074038338960';
        const endpoint = `https://api.jotform.com/form/${formId}/payment-info?apiKey=${apiKey}`;

        const response = await axios.get(endpoint);
        console.log('API Yanıtı:', response.data);

        if (response.data && response.data.responseCode === 200) {
          const content = response.data.content;
          console.log('Content:', content);

          if (content && content.products && Array.isArray(content.products)) {
            const validProducts = content.products.filter(product =>
                product.name && product.price && product.description
            );

            this.products = validProducts.map(product => {
              let imageUrl = '';
              try {
                const images = JSON.parse(product.images || '[]');
                imageUrl = images[0] ;
              } catch (e) {
                imageUrl = `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000)}`;
              }

              return {
                id: product.pid || Math.random().toString(36),
                name: product.name,
                price: product.price,
                image: imageUrl,
                description: product.description,
                category: 'Genel',
                quantity: 0
              };
            });

            if (this.products.length === 0) {
              this.error = 'Ürün bulunamadı.';
            }
          } else {
            this.error = 'Ürün verisi bulunamadı.';
          }
        } else {
          this.error = 'API yanıtı başarısız.';
        }
      } catch (error) {
        console.error('Ürünler yüklenirken hata oluştu:', error);
        this.error = 'Ürünler yüklenirken bir hata oluştu.';
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
    toggleFavorite(product) {
      const index = this.favorites.findIndex(f => String(f.id) === String(product.id));
      if (index === -1) {
        this.favorites.push({ ...product, id: String(product.id) });
      } else {
        this.favorites.splice(index, 1);
      }
      this.saveFavorites();
    },
    isFavorite(product) {
      return this.favorites.some(f => String(f.id) === String(product.id));
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

      // Ürünü sepete eklendi olarak işaretle
      this.addedToCart[product.id] = true;

      // 2 saniye sonra butonu eski haline getir
      setTimeout(() => {
        this.addedToCart[product.id] = false;
      }, 2000);
    },
    goToDetail(productId) {
      this.$router.push(`/product/${productId}`);
    },
    showProductImage(product, event) {
      if (event) {
        event.stopPropagation(); // Ürün detayına gitmeyi engelle
      }
      this.selectedProduct = product;
      this.selectedImage = product.image;
      this.showImageModal = true;
      document.body.style.overflow = 'hidden'; // Sayfa kaydırmayı engelle
    },
    closeImageModal() {
      this.showImageModal = false;
      this.selectedProduct = null;
      this.selectedImage = '';
      document.body.style.overflow = ''; // Sayfa kaydırmayı tekrar etkinleştir
    },
    handleKeyDown(event) {
      if (event.key === 'Escape' && this.showImageModal) {
        this.closeImageModal();
      }
    }
  }
};
</script>

<style scoped>
.home {
  min-height: 100vh;
}

.hero {
  background-color: #f8f9fa;
  padding: 4rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
}

.hero h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.products-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
}

.filters {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  height: fit-content;
}

.filter-group {
  margin-bottom: 1rem;
}

.filter-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: bold;
}

.filter-group select,
.filter-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.price-range {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.price-range input {
  width: 45%;
}

.products-section h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
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

.retry-button:hover {
  opacity: 0.9;
}

.product-grid {
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

.favorite-button span {
  color: #ccc;
  font-size: 1.2rem;
}

.favorite-button .is-favorite {
  color: #e74c3c;
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
  transition: all 0.3s ease;
}

.add-to-cart:hover {
  background-color: #2980b9;
}

.add-to-cart.added {
  background-color: #27ae60;
  cursor: default;
}

.add-to-cart.added:hover {
  background-color: #27ae60;
}

.search-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.search-input:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
}

.search-input::placeholder {
  color: #999;
}

.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90vh;
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: #666;
  cursor: pointer;
  z-index: 1001;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.close-button:hover {
  color: #e74c3c;
}

.modal-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 4px;
}

.image-info {
  margin-top: 1rem;
  text-align: center;
}

.image-info h3 {
  margin: 0;
  color: #2c3e50;
}

.image-info .price {
  color: #e74c3c;
  font-weight: bold;
  margin: 0.5rem 0 0 0;
}
</style>
