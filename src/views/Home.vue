<template>
  <div class="home">
    <div class="entry">
      <Motion :key="currentImageIndex" :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.2 }">
      <img :src="currentImage" alt="" class="entry-image"   />
    </Motion>
      <div class="entry-text">
        <h1 class="birthstone-regular focus-in">Pema Home </h1>
        <p>Mobilyalarımızın her detayında profesyonelliği deneyimleyin</p>
      </div>
    </div>

    <div class="hakkimizda-container">
        <div class="hakkimizda-content">
          <p class="biz-text">Biz...</p>
          <h2 class="header-text">PemaHome Mobilya Olarak ;</h2>
          <p class="desc-text">
            Kaliteden ödün vermeden, çağdaş ve yaşanılabilir mekânlar oluşturabilmek için çözüm ortağı olmaya devam edeceğiz. Modern, estetik ve fonksiyonel tasarım anlayışıyla müşterilerimize sıradanlıktan uzak, kaliteli ürünler sunmayı amaçlıyoruz.
          </p>
          <router-link to="/hakkimizda" class="devam-button">devamı</router-link>
        </div>
        <div class="hakkimizda-img">
          <img src='@/assets/ikonlar/PemaHome-Logo.svg' alt=""/>
        </div>
    </div>

    <div class="tanitim">
      <img src='@/assets/pemahome_görseller/elite/gold_class/elite_model_goldclass_gardırop_1.jpg' alt="space" />
      <div class="tanitim-text">
        <h2>Yenilikçi ve Özel Tasarım Ürünler</h2>
        <p>
          Modern yaşamın ihtiyaçlarına uygun, şıklığı ve işlevselliği bir arada sunan özel tasarım mobilyalarımızla evinize karakter katın. Her biri el emeği göz nuruyla üretilen koleksiyonlarımız, zevkinize ve mekanınızın ruhuna uygun şekilde tasarlanıyor.
        </p>
      </div>
    </div>

    <div class="section-title">
      <h2>Ürünlerimiz</h2>
    </div>

    <div class="boxs">
      <div class="box">
        <img src="@/assets/ikonlar/double-bed.svg" alt="" />
        <router-link to="/urunler" class="box-text">Modern Mobilyalar</router-link>
      </div>
      <div class="box">
        <img src="@/assets/ikonlar/save-money.svg" alt="" />
        <router-link to="/urunler" class="box-text">Ekonomik Fiyatlar</router-link>
      </div>
      <div class="box">
        <img src="@/assets/ikonlar/verified.svg" alt="" />
        <router-link to="/urunler" class="box-text">Güvenilir Alışveriş</router-link>
      </div>
      <div class="box">
        <img src="@/assets/ikonlar/home.svg" alt="" />
        <router-link to="/urunler" class="box-text">Evinizi Baştan Yaratın</router-link>
      </div>
    </div>

    <div class="products">
      <div class="card" v-for="(product, index) in products" :key="index">
        <img :src="product.image" :alt="product.title" />
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {Motion} from "motion-v"


export default {
components: {Motion},

  name: "HomePage",
  data() {
    return {
      images: (() => {
        const imageArray = [];
        for (let i = 73; i <= 87; i++) {
          if (i === 77 || i === 78) continue;
          imageArray.push(require(`@/assets/Kapak_foto/${i}.jpg`));
        }
        return imageArray;
      })(),
      currentImageIndex: 0,
      imageChanging: false,
      products: [
        {
          title: "Gold Class",
          description: "Şıklığın zirvesini yaşayın. Özel tasarım bu seri, evinize asalet katacak.",
          image: require('@/assets/pemahome_görseller/elite/gold_class/elite_model_goldclass_gardırop_1.jpg'),
        },
        {
          title: "Efsa",
          description: "Sade çizgileri ve işlevsel tasarımıyla minimalizmin en şık yorumudur.",
          image: require('@/assets/pemahome_görseller/elite/efsa/elite_model_efsa_gardırop_1.jpg'),
        },
        {
          title: "Etna",
          description: "Organik dokuları ve sıcak renk paletiyle doğayı yaşam alanlarınıza taşır." ,
          image: require('@/assets/pemahome_görseller/star/etna/star_model_etna_gardırop_1.jpg'),
        },
        {
          title: "Masal",
          description: "Çocuklar için büyülü dünyalar. Çocuk odalarını neşeli bir macera alanına dönüştürür.",
          image: require('@/assets/pemahome_görseller/premium/masal/premium_model_masal_gardırop_10.jpg'),
        },
      ]
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    }
  },
  methods: {
    startImageRotation() {
      setInterval(() => {
        this.imageChanging = false;
        setTimeout(() => {
          this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
          this.imageChanging = true;
        }, 100);
      }, 5000);
    },
    onAnimationEnd() {
      this.imageChanging = false;
    }
  },
  mounted() {
    this.startImageRotation();
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Roboto&display=swap');

.entry img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  position: relative;
  filter: brightness(90%);
  transition: transform 1s ease, opacity 1s ease;
}

.entry-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.entry-text h1 {
  font-size: clamp(6rem, calc(7vw + 1rem), 15vw);
  color: white;
  margin-top: -3rem;
}

.entry-text p {
  font-size: clamp(1rem, 1.3vw, 1.7rem);
  color: white;
}


.welcome h1 {
  position: absolute;
  top: 5%;
  left: 30%;
  font-size: clamp(6rem, calc(10vw + 1rem), 15vw);
}

.welcome p {
  position: absolute;
  top: 50%;
  left: 30%;
  font-size: clamp(1rem, 1.5vw, 1.7rem);
  margin: 0 0.5rem;
}

h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
}

.hakkimizda-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #f8f8f8;
  padding: 4rem 4rem;
  margin: 2.5rem 0;
}
.hakkimizda-img{
  align-self: center;
  margin-left: auto;
}
.hakkimizda-img img {
  height: 100%;
}
.hakkimizda-content {
  max-width: 800px;
  text-align: left;
  padding: 0 15px;
}

.biz-text, .desc-text {
  font-family: 'Roboto', sans-serif;
}

.biz-text {
  font-size: 18px;
  color: #555;
  margin-bottom: 8px;
  font-style: italic;
  letter-spacing: 0.5px;
  text-align: left;
}

.header-text {
  display: inline-block;
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  color: #333;
  margin-bottom: 25px;
  font-weight: 600;
  position: relative;
  padding-bottom: 10px;
}

.header-text::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background-color: #b8860b; /* Altın rengi */
  text-align: center;
}

.desc-text {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin-bottom: 30px;
}

.devam-button {
  text-decoration: none;
  border: 1px solid #b8860b;
  color: #b8860b;
  padding: 12px 30px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 3px;
}

.devam-button:hover {
  background-color: #b8860b;
  color: white;
}

.tanitim {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  min-height: 50vh;
  align-items: center;
  background-color: var(--white);
  margin-bottom: 1rem;
}

.tanitim h2 {
  font-family: 'Playfair Display', serif;
  text-align: center;
}

.tanitim img {
  width: 100%;
  height: auto; 
}

.tanitim-text {
  margin-bottom: 30px;
  padding: 8%;
  display: flex;
  flex-direction: column;
}
.tanitim-text p {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin-bottom: 30px;
}
/* .tanitim-text button {
  font-family: "Inter", sans-serif;
  align-self: center;
  background-color: var(--light-bg);
  color: var(--primary-color);
  width: 8rem;
} */

.tanitim-text button:hover {
  background-color: #bea989; /* Daha koyu bej */
}

.boxs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 2rem;
}

.boxs .box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-weight: 500;
  height: 100px;
  gap: 0.5rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: transform 0.6s ease, box-shadow 0.6s ease-in-out, color 0.6s ease-in-out;
  text-align: center;
}

.boxs .box:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 15px 5px var(--accent-color);
}

.boxs .box img {
  align-self: center;
  width: 25%;
  min-width: 40px;
  aspect-ratio: 1/1;
  transition: filter 0.3s ease;
}

.box-text {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
}

.section-title {
  text-align: center;
  margin: 1rem 0 3rem;
  margin-bottom: 2rem;
}

.section-title h2 {
  position: relative;
  display: inline-block;
  font-size: clamp(1.5rem, 2vw + 1rem, 2.2rem);
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

.section-title h2::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--accent-color);
  border-radius: 15px;
}

.products {
  padding: 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.products .card {
  overflow: hidden;
  text-align: center;
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.products .card img {
  width: 100%;
  height: 450px;
  aspect-ratio: 9/16;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.products .card img:hover {
  transform: scale(1.05);
}

.products .card h3 {
  margin: 1rem;
}

.products .card p {
  margin: 0 1rem 1.5rem;
  flex-grow: 1;
}

.products .card button {
  align-self: center;
  width: 80%;
  margin: 1.5rem auto;
  margin-top: 1rem;
  background-color: var(--accent-color);
  color: var(--primary-color);
  font-weight: 600;
}

.products .card button:hover {
  background-color: #bea989;
}
@media screen and (max-width: 1200px) {
  .boxs {
    grid-template-columns: repeat(2, 1fr);
  }
  .boxs .box {
    padding: 2rem 1rem;
  }
}
@media  screen and (max-width: 900px) {
  .hakkimizda-container {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  .hakkimizda-content {
    text-align: center;
  }
  .hakkimizda-img {
    margin: 0 auto;
  }
  .hakkimizda-img img {
    height: 8rem;
  }
  
}

@media (max-width: 768px) {
  .hakkimizda-container {
    padding: 40px 15px;
    margin: 30px 0;
  }

  .header-text {
    font-size: 24px;
  }

  .desc-text {
    font-size: 15px;
  }
  .biz-text {
    text-align: center;
  }
  .hakkimizda {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hakkimizda {
    background-color: #f5f5f5;
    padding: 4rem 2rem;
    margin: 3rem 0;
  }


  .tanitim {
    grid-template-columns: 1fr;
  }

  .tanitim-text {
    text-align: center;
  }

  .tanitim-text button {
    margin: 1rem auto;
  }
}
@media screen and (max-width: 800px) {
  .boxs {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 576px) {
  .boxs {
    gap: 1rem;
    margin: 1rem;
  }
}

@media (max-width: 480px) {
  .products {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  .products .card {
    margin-bottom: 1rem;
  }

  .products .card button {
    width: 90%;
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


@keyframes slide-in-bck-center {
  0% {
    transform: translateZ(160px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}

</style>