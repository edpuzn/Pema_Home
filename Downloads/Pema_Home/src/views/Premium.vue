<template>
    <div class="elite-container">
      <!-- Quick Navigation -->
      <div class="quick-nav">
        <h2>Koleksiyonlarımız</h2>
        <div class="series-selector">
          <div class="series-buttons">
            <router-link to="/premium" class="premium-link">Premium Serisi</router-link>
            <router-link to="/elite" class="elite-link">Elite Serisi</router-link>
            <router-link to="/star" class="star-link">Star Serisi</router-link>
          </div>
        </div>
      </div>

      <!-- Elite Seri Ürünleri -->
      <div class="product-grid">
        <div class="product-card" v-for="(product, index) in products" :key="index">
          <div class="product-image" @click="openFullscreen(product.images[currentImageIndexes[index]], index)">
            <div class="product-slider">
              <div class="slider-container" :style="{ transform: `translateX(-${currentImageIndexes[index] * 100}%)` }">
                <img v-for="(image, imgIndex) in product.images" 
                     :key="imgIndex" 
                     :src="image" 
                     :alt="product.title"
                     class="slider-image">
              </div>
              <div class="slider-nav">
                <div v-for="(_, dotIndex) in product.images" 
                     :key="dotIndex"
                     class="slider-dot"
                     :class="{ active: currentImageIndexes[index] === dotIndex }"
                     @click.stop="changeImage(index, dotIndex)"></div>
              </div>
              <div class="slider-arrow prev" @click.stop="prevImage(index)">❮</div>
              <div class="slider-arrow next" @click.stop="nextImage(index)">❯</div>
            </div>
          </div>
          <div class="product-info">
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>

      <!-- Tam Ekran Görüntüleme -->
      <div v-if="fullscreenImage" class="fullscreen-overlay" @click="closeFullscreen">
        <div class="fullscreen-slider">
          <div class="fullscreen-container" :style="{ transform: `translateX(-${fullscreenIndex * 100}%)` }">
            <img v-for="(image, index) in currentProductImages" 
                 :key="index" 
                 :src="image" 
                 alt="Tam Ekran Görüntü" 
                 class="fullscreen-image">
          </div>
          <div class="fullscreen-nav">
            <div v-for="(_, index) in currentProductImages" 
                 :key="index"
                 class="fullscreen-dot"
                 :class="{ active: fullscreenIndex === index }"
                 @click.stop="changeFullscreenImage(index)"></div>
          </div>
          <div class="fullscreen-arrow prev" @click.stop="prevFullscreenImage">❮</div>
          <div class="fullscreen-arrow next" @click.stop="nextFullscreenImage">❯</div>
          <div class="close-fullscreen" @click="closeFullscreen">×</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EliteView',
    data() {
      return {
        currentImageIndexes: [], // Her ürün için mevcut resim indeksi
        fullscreenImage: null,
        fullscreenIndex: 0,
        currentProductImages: [],
        products: [
          {
            title: 'Favori Beyaz',
            description: 'Modern çizgiler ve yüksek konforu bir arada sunan Elite koltuk takımı',
            images: [
              require('@/assets/pemahome_görseller/premium/favori/premium_model_favori_gardırop_7.jpg'),
              require('@/assets/pemahome_görseller/premium/favori/premium_model_favori_gardırop_8.jpg'),
              require('@/assets/pemahome_görseller/premium/favori/premium_model_favori_gardırop_9.jpg'),
            ]
          },
          {
            title: 'Favori Krem Rengi',
            description: 'Modern çizgiler ve yüksek konforu bir arada sunan Elite koltuk takımı',
            images: [
              require('@/assets/pemahome_görseller/premium/favori/premium_model_favori_gardırop_4.jpg'),
              require('@/assets/pemahome_görseller/premium/favori/premium_model_favori_gardırop_5.jpg'),
              require('@/assets/pemahome_görseller/premium/favori/premium_model_favori_gardırop_6.jpg'),
            ]
          },
          {
            title: 'Favori Bej',
            description: 'Modern çizgiler ve yüksek konforu bir arada sunan Elite koltuk takımı',
            images: [
              require('@/assets/pemahome_görseller/premium/favori/premium_model_favori_gardırop_1.jpg'),
              require('@/assets/pemahome_görseller/premium/favori/premium_model_favori_gardırop_2.jpg'),
              require('@/assets/pemahome_görseller/premium/favori/premium_model_favori_gardırop_3.jpg'),
            ]
          },
          {
            title: 'Masal Siyah',
            description: 'Modern çizgiler ve yüksek konforu bir arada sunan Elite koltuk takımı',
            images: [
              require('@/assets/pemahome_görseller/premium/masal/premium_model_masal_gardırop_1.jpg'),
              require('@/assets/pemahome_görseller/premium/masal/premium_model_masal_gardırop_2.jpg'),
              require('@/assets/pemahome_görseller/premium/masal/premium_model_masal_gardırop_3.jpg'),
            ]
          },
          {
            title: 'Masal Beyaz',
            description: 'Modern çizgiler ve yüksek konforu bir arada sunan Elite koltuk takımı',
            images: [
              require('@/assets/pemahome_görseller/premium/masal/premium_model_masal_gardırop_4.jpg'),
              require('@/assets/pemahome_görseller/premium/masal/premium_model_masal_gardırop_7.jpg'),
              require('@/assets/pemahome_görseller/premium/masal/premium_model_masal_gardırop_5.jpg'),
              require('@/assets/pemahome_görseller/premium/masal/premium_model_masal_gardırop_8.jpg'),
              require('@/assets/pemahome_görseller/premium/masal/premium_model_masal_gardırop_6.jpg'),
              require('@/assets/pemahome_görseller/premium/masal/premium_model_masal_gardırop_9.jpg'),
            ]
          },
          {
            title: 'Masal Bej',
            description: 'Modern çizgiler ve yüksek konforu bir arada sunan Elite koltuk takımı',
            images: [
              require('@/assets/pemahome_görseller/premium/masal/premium_model_masal_gardırop_10.jpg'),
              require('@/assets/pemahome_görseller/premium/masal/premium_model_masal_gardırop_13.jpg'),
              require('@/assets/pemahome_görseller/premium/masal/premium_model_masal_gardırop_11.jpg'),
              require('@/assets/pemahome_görseller/premium/masal/premium_model_masal_gardırop_14.jpg'),
              require('@/assets/pemahome_görseller/premium/masal/premium_model_masal_gardırop_12.jpg'),
              require('@/assets/pemahome_görseller/premium/masal/premium_model_masal_gardırop_15.jpg'),
            ]
          },
          {
            title: 'Peri Beyaz',
            description: 'Modern çizgiler ve yüksek konforu bir arada sunan Elite koltuk takımı',
            images: [
              require('@/assets/pemahome_görseller/premium/peri/premium_model_peri_gardırop_1.jpg'),
              require('@/assets/pemahome_görseller/premium/peri/premium_model_peri_gardırop_4.jpg'),
              require('@/assets/pemahome_görseller/premium/peri/premium_model_peri_gardırop_2.jpg'),
              require('@/assets/pemahome_görseller/premium/peri/premium_model_peri_gardırop_5.jpg'),
              require('@/assets/pemahome_görseller/premium/peri/premium_model_peri_gardırop_3.jpg'),
              require('@/assets/pemahome_görseller/3_kapılı_dolap.jpg'),
            ]
          },
          {
            title: 'Peri Bej',
            description: 'Modern çizgiler ve yüksek konforu bir arada sunan Elite koltuk takımı',
            images: [
              require('@/assets/pemahome_görseller/premium/peri/premium_model_peri_gardırop_7.jpg'),
              require('@/assets/pemahome_görseller/premium/peri/premium_model_peri_gardırop_10.jpg'),
              require('@/assets/pemahome_görseller/premium/peri/premium_model_peri_gardırop_8.jpg'),
            ]
          },
          {
            title: 'Peri Siyah',
            description: 'Modern çizgiler ve yüksek konforu bir arada sunan Elite koltuk takımı',
            images: [
              require('@/assets/pemahome_görseller/premium/peri/premium_model_peri_gardırop_13.jpg'),
              require('@/assets/pemahome_görseller/premium/peri/premium_model_peri_gardırop_16.jpg'),
              require('@/assets/pemahome_görseller/premium/peri/premium_model_peri_gardırop_14.jpg'),
              require('@/assets/pemahome_görseller/premium/peri/premium_model_peri_gardırop_17.jpg'),
              require('@/assets/pemahome_görseller/premium/peri/premium_model_peri_gardırop_15.jpg'),
              require('@/assets/pemahome_görseller/premium/peri/premium_model_peri_gardırop_18.jpg'),
            ]
          },
        ]
      }
    },
    mounted() {
        this.currentImageIndexes = Array(this.products.length).fill(0);
      },
    methods: {
      changeImage(productIndex, imageIndex) {
        this.currentImageIndexes[productIndex] = imageIndex;
      },
      prevImage(productIndex) {
        const currentIndex = this.currentImageIndexes[productIndex];
        const maxIndex = this.products[productIndex].images.length - 1;
        this.currentImageIndexes[productIndex] = currentIndex === 0 ? maxIndex : currentIndex - 1;
      },
      nextImage(productIndex) {
        const currentIndex = this.currentImageIndexes[productIndex];
        const maxIndex = this.products[productIndex].images.length - 1;
        this.currentImageIndexes[productIndex] = currentIndex === maxIndex ? 0 : currentIndex + 1;
      },
      openFullscreen(image, productIndex) {
        this.fullscreenImage = image;
        this.fullscreenIndex = this.currentImageIndexes[productIndex];
        this.currentProductImages = this.products[productIndex].images;
      },
      closeFullscreen() {
        this.fullscreenImage = null;
        this.fullscreenIndex = 0;
        this.currentProductImages = [];
      },
      changeFullscreenImage(index) {
        this.fullscreenIndex = index;
      },
      prevFullscreenImage() {
        const maxIndex = this.currentProductImages.length - 1;
        this.fullscreenIndex = this.fullscreenIndex === 0 ? maxIndex : this.fullscreenIndex - 1;
      },
      nextFullscreenImage() {
        const maxIndex = this.currentProductImages.length - 1;
        this.fullscreenIndex = this.fullscreenIndex === maxIndex ? 0 : this.fullscreenIndex + 1;
      }
    }
  }
  </script>
  
  <style scoped>
  @import '../assets/styles/series_styles.css';
  </style> 