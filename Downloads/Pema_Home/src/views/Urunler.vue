<template>
  <div class="urunler">
    <!-- Ürünler Banner -->
    <div class="products-hero">
      <div class="hero-content focus-in">
        <h1 class="birthstone-regular ">Modern ve Fonksiyonel Gardırop Modelleri </h1>
        <p>Farklı yaşam tarzları ve ihtiyaçlar için özel olarak tasarlanmış mobilya serilerimiz</p>
      </div>
    </div>

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

    <!-- Seri Tanıtımı -->
    <div class="series-showcase">
      <!-- Premium Seri -->
      <div class="series-card premium-card">
        <div class="series-image">
          <img src='@/assets/Kapak_foto/76.jpg' alt="Premium Seri">
          <div class="series-overlay"></div>
        </div>
        <div class="series-content">
          <h2>Premium Seri</h2>
          <p>Eşsiz lüks ve konfor için tasarlanmış, en kaliteli malzemelerle üretilen Premium koleksiyonumuz</p>
          <router-link to="/premium">Keşfet</router-link>
        </div>
      </div>

      <!-- Elite Seri -->
      <div class="series-card elite-card">
        <div class="series-image">
          <img src='../assets/Kapak_foto/79.jpg' alt="Elite Seri">
          <div class="series-overlay"></div>
        </div>
        <div class="series-content">
          <h2>Elite Seri</h2>
          <p>Modern ve estetik tasarım anlayışıyla üretilen, yüksek kaliteli Elite koleksiyonumuz</p>
          <router-link to="/elite">Keşfet</router-link>
        </div>
      </div>

      <!-- Star Seri -->
      <div class="series-card star-card">
        <div class="series-image">
          <img src='../assets/Kapak_foto/80.jpg' alt="Star Seri">
          <div class="series-overlay"></div>
        </div>
        <div class="series-content">
          <h2>Star Seri</h2>
          <p>Ekonomik fiyat ve yüksek kalite avantajıyla sunulan, kullanışlı Star koleksiyonumuz</p>
          <router-link to="/star">Keşfet</router-link>
        </div>
      </div>
    </div>

    <!-- Kalite Taahhüdü -->
    <div class="quality-promise">
      <div class="quality-content">
        <h2>Kalite Taahhüdümüz</h2>
        <p>Pema Home olarak her ürünümüzde en yüksek kaliteyi sunmayı taahhüt ediyoruz. Tüm mobilyalarımız dayanıklılık ve estetik açısından titizlikle test edilmektedir.</p>
        <div class="quality-features">
          <div class="feature" v-for="(feature, index) in features" :key="index">
            <i :class="feature.icon"></i>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Urunler',
  data() {
    return {
      features: [
        {
          icon: 'fas fa-award',
          title: 'Premium Kalite',
          description: 'Tüm ürünlerimiz yüksek kaliteli malzemelerle üretilir.'
        },
        {
          icon: 'fas fa-check-circle',
          title: 'Dayanıklılık',
          description: 'Mobilyalarımız uzun yıllar kullanım için tasarlanmıştır.'
        },
        {
          icon: 'fas fa-tree',
          title: 'Sürdürülebilirlik',
          description: 'Çevreye duyarlı üretim süreçleri uyguluyoruz.'
        },
        {
          icon: 'fas fa-truck',
          title: 'Güvenli Teslimat',
          description: 'Ürünleriniz özenle paketlenir ve güvenle teslim edilir.'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import '../assets/styles/series_styles.css';
/****************** Butonlar - Seriler ******************/
.series-selector {
  padding: 1rem 0; /* Burası da kaldırılabilir */
}

/* Ürünler Sayfası Stilleri */
.products-hero {
  position: relative;
  color: var(--primary-color);
  text-align: center;
  padding-bottom: 4rem;
}

.products-hero h1 {
  margin-top: 3rem 3rem 0;
  font-size: clamp(4rem, calc(6vw + 1rem), 14vw);
  font-weight: 400;
}

.products-hero .hero-text {
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  opacity: 0.9;
  max-width: 800px;
  margin: 1.5rem auto 0;
}

/* Quick Navigation */
.quick-nav {
  background: linear-gradient(to bottom, white, var(--light-bg));
  padding: 3rem 2rem;
  text-align: center;
}

.quick-nav h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
}

/* Seri Showcase */
.series-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
  max-width: 1600px;
  margin: 2rem auto;
}

.series-card {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
  background-color: #f5f5f5;
}

.series-image {
  position: relative;
  height: 250px;
}

.series-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/*
.series-overlay { // Kaldırılabilir.
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7));
}
*/

.series-content {
  padding: 0 2rem 2rem;
  text-align: center;
}

.series-content a {  
  padding: 0.7rem 2rem;
  background-color: var(--accent-color);
  color: var(--primary-color);
  border: none;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  background-color: var(--white);
}

.series-content a:hover {
  transform: translateY(-3px);
  box-shadow: 0px 0px 30px var(--accent-color); 
}

.series-content h2 {
  font-size: 1.rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.series-content p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #555;
}

/* Kalite Taahhüdü */
.quality-promise {
  padding: 6rem 2rem 4rem;
  background: linear-gradient(to bottom, #F8F5F1, white);
}

.quality-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.quality-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.quality-content > p {
  max-width: 800px;
  margin: 0 auto 3rem;
  color: #555;
  line-height: 1.6;
}

.quality-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature {
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature i {
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
}

.feature h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.feature p {
  color: #555;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .series-showcase {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .quality-features {
    grid-template-columns: 1fr;
  }
}

@keyframes focus-in {
  0% {
    letter-spacing: -0.5em;
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
}

.focus-in {
  animation: focus-in 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

</style> 