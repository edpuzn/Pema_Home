<template>
  <div class="hakkimizda">
    <!-- Hero Bölümü -->
    <div class="hakkimizda-hero">
      <div class="hero-content">
        <h1 class="birthstone-regular">Pema Home Mobilya</h1>
        <p class="hero-text">Modern ve kaliteli mobilyalarla evinizi yeniden tanımlıyoruz.</p>
      </div>
    </div>
    
    <!-- Hikayemiz Bölümü -->
    <div class="hakkimizda-section">
      <div class="text-container">
        <h2>Hikayemiz</h2>
        <p>Pema Home 2015 yılında, kaliteli mobilyaları herkes için erişilebilir kılma hayaliyle kuruldu. İlk mağazamızı Ankara'da açarak başladığımız yolculuğumuzda, bugün Türkiye'nin dört bir yanındaki müşterilerimize hizmet veriyoruz.</p>
        <p>Tasarım ekibimiz, en son trendleri takip ederek fonksiyonelliği ve estetiği bir araya getiren mobilyalar tasarlıyor. Her bir ürünümüz, yaşam alanınızı zenginleştirmek ve konfor sunmak için özenle üretiliyor.</p>
      </div>
      <div class="pema-home-logo">
        <img src="@/assets/ikonlar/PemaHome-Logocuk.svg" alt="Pema Home Logo">
      </div>
    </div>

    <!-- Değerlerimiz -->
    <div class="values-section">
      <h2>Değerlerimiz</h2>
      <div class="values-container">
        <div class="value-item" v-for="(value, index) in values" :key="index">
          <div class="icon-container">
            <i :class="value.icon"></i>
          </div>
          <h3>{{ value.title }}</h3>
          <p>{{ value.description }}</p>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'Hakkimizda',
  data() {
    return {
      values: [
        {
          icon: 'fas fa-heart',
          title: 'Müşteri Memnuniyeti',
          description: 'Müşterilerimizin memnuniyeti bizim için en önemli önceliktir.'
        },
        {
          icon: 'fas fa-gem',
          title: 'Kalite',
          description: 'Her ürünümüzde en yüksek kalite standartlarını sağlamak için çalışıyoruz.'
        },
        {
          icon: 'fas fa-leaf',
          title: 'Sürdürülebilirlik',
          description: 'Çevreye duyarlı üretim süreçleri ve malzemeler kullanıyoruz.'
        },
        {
          icon: 'fas fa-lightbulb',
          title: 'Yenilikçilik',
          description: 'Sürekli olarak yeni tasarımlar ve çözümler geliştiriyoruz.'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Hakkımızda Sayfası Stilleri */
.hakkimizda-hero {
  position: relative;
  color: var(--primary-color);
  text-align: center;
  padding-bottom: 4rem;
  margin-bottom: 2rem;
}

.hakkimizda-hero h1 {
  margin-top: 3rem;
  margin-bottom: 0.5rem;
  font-size: clamp(6rem, calc(13vw + 1rem), 15vw);    
  font-weight: 400;
}

.hakkimizda-hero .hero-text {
  font-size: clamp(1.2rem, 1.5vw, 1.7rem);
  opacity: 0.9;
  max-width: 800px;
  margin: 1.5rem auto 0;
}

.hakkimizda-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: var(--radius);
  margin: 1rem 2rem;
}

.hakkimizda-section .pema-home-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hakkimizda-section .pema-home-logo img {
  width: 80%;
  height: 80%;
}

.text-container {
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  background-color: var(--white);
  border-radius: var(--radius);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  overflow-y: auto;
}

.text-container h2 {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: var(--primary-color);
  text-align: center;
}

.text-container p {
  text-align: left;
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  padding-left: 1rem;
  padding-right: 1rem;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  font-size: 2rem;
}

.values-section {
  align-content: center;
  text-align: center;
  padding-bottom: 2rem;
  margin: 3rem 2rem 2rem;
}

.values-section h2 {
  font-size: clamp(2rem, 3vw, 2.5rem);
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
}

.values-section h2::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--accent-color);
  border-radius: 15px;
}

.values-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
}

.value-item {
  background-color: var(--white);
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
}

.value-item:hover {
  transform: translateY(-5px);
}

.value-item .icon-container {
  width: 60px;
  height: 60px;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.value-item h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

@media (max-width: 768px) {
  .hakkimizda-section {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .values-container {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
}
</style> 