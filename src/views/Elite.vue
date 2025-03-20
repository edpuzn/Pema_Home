<template>
  <div class="elite-container">
    <!-- Seri Başlık -->
    <div class="series-header">
      <h1 class="birthstone-regular">Elite Serisi</h1>
      <p>Modern ve zarif tasarımlarla yaşam alanlarınızı yüksek kalitenin konforu ile tanıştırın.</p>
    </div>
    
    <!-- Hızlı Gezinme -->
    <div class="quick-nav">
      <div class="series-selector">
        <div class="series-buttons">
          <router-link to="/premium">Premium Serisi</router-link>
          <router-link to="/elite" class="active">Elite Serisi</router-link>
          <router-link to="/star">Star Serisi</router-link>
        </div>
      </div>
    </div>
    
    <!-- Elite Seri Ürünleri -->
    <div class="product-grid">
      <div class="product-card" v-for="(product, index) in products" :key="index">
        <div class="product-image">
          <img :src="product.image" :alt="product.title">
        </div>
        <div class="product-info">
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
          <div class="product-price">{{ product.price }} TL</div>
        </div>
        <button class="product-btn">İncele</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EliteView',
  data() {
    return {
      products: [
        {
          title: 'Elite Koltuk Takımı',
          description: 'Modern çizgiler ve yüksek konforu bir arada sunan Elite koltuk takımı',
          price: '21,990',
          image: require('@/assets/Mobilya1.jpg')
        },
        {
          title: 'Elite Yemek Odası',
          description: 'Şık ve zarif tasarımıyla yemek odanıza stil katan takım',
          price: '18,750',
          image: require('@/assets/Mobilya1.jpg')
        },
        {
          title: 'Elite Yatak Odası',
          description: 'Ferah ve kaliteli tasarımıyla uyku kalitenizi artıran yatak odası',
          price: '22,500',
          image: require('@/assets/Mobilya1.jpg')
        },
        {
          title: 'Elite TV Ünitesi',
          description: 'Geniş depolama alanı sunan şık ve modern TV ünitesi',
          price: '8,950',
          image: require('@/assets/Mobilya1.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
.elite-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 1rem;
}

.series-header {
  text-align: center;
  padding: 3rem 0;
}

.series-header h1 {
  font-size: clamp(4rem, calc(8vw + 1rem), 10rem);
  margin-bottom: 1rem;
  color: #9C8468; /* Elite serisi rengi */
}

.series-header p {
  font-size: clamp(1rem, 1.5vw, 1.3rem);
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.8;
}

.quick-nav {
  background-color: #f5f5f5;
  padding: 1.5rem;
  margin-bottom: 3rem;
}

.series-selector {
  display: flex;
  justify-content: center;
}

.series-buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.series-buttons a {
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  color: var(--primary-color);
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.series-buttons a:hover {
  transform: translateY(-3px);
}

.series-buttons a.active {
  border-color: #9C8468;
  color: #9C8468;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.product-card {
  background-color: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  height: 200px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-info {
  padding: 1.5rem;
  flex-grow: 1;
}

.product-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #9C8468;
}

.product-info p {
  margin-bottom: 1rem;
  opacity: 0.8;
  font-size: 0.9rem;
}

.product-price {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary-color);
}

.product-btn {
  width: 100%;
  padding: 1rem;
  background-color: #9C8468;
  color: white;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.product-btn:hover {
  background-color: #7C6748;
}

@media (max-width: 768px) {
  .series-buttons {
    flex-direction: column;
    gap: 1rem;
  }
  
  .series-buttons a {
    text-align: center;
  }
  
  .product-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
</style> 