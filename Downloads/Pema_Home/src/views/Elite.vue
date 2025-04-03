<template>
  <div class="elite-container">
    <!-- Hızlı Gezinme -->
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
        <div class="product-image">
          <div class="product-slider">
            <!-- Görsel Slider -->
            <img :src="product.images[activeImageIndex[index]]"
                 :alt="`${product.title} - Görsel ${activeImageIndex[index] + 1}`"
                 class="slider-image"
                 @click="showGallery(index, activeImageIndex[index])">

            <!-- Küçük Noktalar -->
            <div class="slider-nav">
              <div v-for="(_, imgIndex) in product.images"
                   :key="imgIndex"
                   class="slider-dot"
                   :class="{ active: activeImageIndex[index] === imgIndex }"
                   @click.stop="setActiveImage(index, imgIndex)"></div>
            </div>

            <!-- Ok Butonları -->
            <button class="slider-arrow prev" @click.stop="prevImage(index)">❮</button>
            <button class="slider-arrow next" @click.stop="nextImage(index)">❯</button>
          </div>
        </div>
        <div class="product-info">
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>

    <!-- Galeri Modal -->
    <div v-if="galleryVisible" class="gallery-modal" @click="hideGallery">
      <div class="gallery-content" @click.stop>
        <!-- Tam Ekran Ana Görsel -->
        <div class="gallery-main">
          <img :src="currentGallery[galleryIndex]"
               :alt="`Tam Ekran Görüntü ${galleryIndex + 1}`"
               class="gallery-main-image">
        </div>

        <!-- Galeri Kontrolleri -->
        <div class="gallery-controls">
          <button class="gallery-arrow prev" @click="prevGalleryImage">❮</button>

          <div class="gallery-thumbnails">
            <div v-for="(img, i) in currentGallery"
                 :key="i"
                 class="gallery-thumb"
                 :class="{ active: galleryIndex === i }"
                 @click="galleryIndex = i">
              <img :src="img" :alt="`Küçük Resim ${i + 1}`">
            </div>
          </div>

          <button class="gallery-arrow next" @click="nextGalleryImage">❯</button>
        </div>

        <button class="gallery-close" @click="hideGallery">×</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EliteView',
  data() {
    return {
      // Ana sayfa ürün görselleri için
      activeImageIndex: Array(6).fill(0), // Ürün sayısı kadar 0 ile başlat

      // Galeri için
      galleryVisible: false,
      galleryIndex: 0,
      currentGallery: [],
      currentProductIndex: null,

      // Ürün verileri
      products: [
        {
          title: 'Efsa',
          description: 'Modern çizgiler ve yüksek konforu bir arada sunan Elite koltuk takımı',
          images: [
            require('@/assets/pemahome_görseller/elite/efsa/elite_model_efsa_gardırop_1.jpg'),
            require('@/assets/pemahome_görseller/elite/efsa/elite_model_efsa_gardırop_2.jpg'),
            require('@/assets/pemahome_görseller/elite/efsa/elite_model_efsa_gardırop_3.jpg')
          ]
        },
        {
          title: 'Gold Class',
          description: 'Ferah ve kaliteli tasarımıyla uyku kalitenizi artıran yatak odası',
          images: [
            require('@/assets/pemahome_görseller/elite/gold_class/elite_model_goldclass_gardırop_1.jpg'),
            require('@/assets/pemahome_görseller/elite/gold_class/elite_model_goldclass_gardırop_2.jpg'),
            require('@/assets/pemahome_görseller/elite/gold_class/elite_model_goldclass_gardırop_3.jpg')
          ]
        },
        {
          title: 'Yiğit',
          description: 'Geniş depolama alanı sunan şık ve modern TV ünitesi',
          images: [
            require('@/assets/pemahome_görseller/elite/yiğit/elite_model_yiğit_gardırop_1.jpg'),
            require('@/assets/pemahome_görseller/elite/yiğit/elite_model_yiğit_gardırop_2.jpg'),
            require('@/assets/pemahome_görseller/elite/yiğit/elite_model_yiğit_gardırop_3.jpg'),
          ]
        },
        {
          title: 'Toprak',
          description: 'Geniş depolama alanı sunan şık ve modern TV ünitesi',
          images: [
            require('@/assets/pemahome_görseller/elite/toprak/elite_model_toprak_gardırop_1.jpg'),
            require('@/assets/pemahome_görseller/elite/toprak/elite_model_toprak_gardırop_2.jpg'),
            require('@/assets/pemahome_görseller/elite/toprak/elite_model_toprak_gardırop_3.jpg')
          ]
        },
        {
          title: 'Ege',
          description: 'Şık ve zarif tasarımıyla yemek odanıza stil katan takım',
          images: [
            require('@/assets/pemahome_görseller/elite/ege/elite_model_ege_gardırop_1.jpg'),
            require('@/assets/pemahome_görseller/elite/ege/elite_model_ege_gardırop_2.jpg'),
            require('@/assets/pemahome_görseller/elite/ege/elite_model_ege_gardırop_3.jpg')
          ]
        }
      ]
    }
  },
  methods: {
    // Ürün kartları için görsel kontrol metodları
    setActiveImage(productIndex, imageIndex) {
      this.activeImageIndex[productIndex] = imageIndex;
    },

    prevImage(productIndex) {
      const currentIndex = this.activeImageIndex[productIndex];
      const totalImages = this.products[productIndex].images.length;

      this.activeImageIndex[productIndex] = currentIndex === 0
          ? totalImages - 1  // Son görsele dön
          : currentIndex - 1; // Önceki görsele git
    },

    nextImage(productIndex) {
      const currentIndex = this.activeImageIndex[productIndex];
      const totalImages = this.products[productIndex].images.length;

      this.activeImageIndex[productIndex] = currentIndex === totalImages - 1
          ? 0  // İlk görsele dön
          : currentIndex + 1; // Sonraki görsele git
    },

    // Galeri metodları
    showGallery(productIndex, imageIndex) {
      this.currentGallery = this.products[productIndex].images;
      this.galleryIndex = imageIndex;
      this.currentProductIndex = productIndex;
      this.galleryVisible = true;

      // Sayfanın kaydırılmasını engelle
      document.body.style.overflow = 'hidden';
    },

    hideGallery() {
      this.galleryVisible = false;
      this.currentGallery = [];
      this.galleryIndex = 0;
      this.currentProductIndex = null;

      // Sayfanın kaydırılmasını tekrar etkinleştir
      document.body.style.overflow = '';
    },

    prevGalleryImage() {
      const totalImages = this.currentGallery.length;
      this.galleryIndex = this.galleryIndex === 0
          ? totalImages - 1  // Son görsele dön
          : this.galleryIndex - 1; // Önceki görsele git
    },

    nextGalleryImage() {
      const totalImages = this.currentGallery.length;
      this.galleryIndex = this.galleryIndex === totalImages - 1
          ? 0  // İlk görsele dön
          : this.galleryIndex + 1; // Sonraki görsele git
    }
  }
}
</script>

<style scoped>
@import '../assets/styles/series_styles.css';
</style> 