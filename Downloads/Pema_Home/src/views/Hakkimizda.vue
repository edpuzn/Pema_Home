<template>
  <div class="hakkimizda">
    <!-- Hero Bölümü -->
    <div class="hakkimizda-hero">
      <div class="hero-content focus-in">
        <h1 class="birthstone-regular ">Pema Home Mobilya</h1>
        <p class="hero-text ">Modern ve kaliteli mobilyalarla evinizi yeniden tanımlıyoruz.</p>
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

    <div class="misyon-vizyon">
      <div class="misyon">
        <h2>Misyonumuz</h2>
        <p>PEMA HOME olarak, yaşam alanlarınızı özel kılan mobilyalar tasarlıyoruz. Geleneksel el işçiliği ile modern tasarımı buluşturarak, her mekana özgün bir karakter kazandırıyoruz. Müşterilerimizin ihtiyaçlarını anlayarak; kaliteli malzemeler, ergonomik çözümler ve estetik detaylarla ömür boyu kullanılabilecek eserler yaratıyoruz. Sadece mobilya değil, hayatlarınıza dokunan hikayeler üretmek için çalışıyoruz.</p>
      </div>
      <div class="vizyon">
        <h2>Vizyonumuz</h2>
        <p>Mobilya sektöründe tasarım, kalite ve sürdürülebilirlik alanında öncü marka olmayı hedefliyoruz. 2025 yılına kadar Avrupa'nın seçkin tasarım fuarlarında ülkemizi temsil etmek, yerli üretimi destekleyerek global pazarda 'Türkiye kalitesi' imajını güçlendirmek en büyük hedefimiz. Sadece ürünlerimizle değil, müşteri deneyimi odaklı hizmet anlayışımızla sektörde fark yaratmayı amaçlıyoruz.</p>
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
  font-size: clamp(6rem, calc(7vw + 1rem), 15vw); 
  font-weight: 400;
}

.hakkimizda-hero .hero-text {
  font-size: clamp(1rem, 1.3vw, 1.7rem);
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
  border: 2px solid var(--accent-color)
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
.misyon-vizyon {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 2rem 2rem 1rem;
  gap: 2rem;
}
.misyon-vizyon .misyon, .vizyon {
  display: flex;
  flex-direction: column;
  padding: min(2rem, 5%);
}

.misyon-vizyon .misyon h2, .vizyon h2 {
  position: relative;
  display: inline-block;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: var(--primary-color);
  text-align: center;
}

.misyon-vizyon .misyon p, .vizyon p {
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  text-align: left;
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