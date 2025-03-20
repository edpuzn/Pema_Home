<template>
  <div class="home">
    <div class="welcome">
      <h1 class="birthstone-regular">Hoşgeldiniz</h1>
      <p>Mobilyalarımızın her detayında profesyonelliği hissedin.</p>
    </div>

    <div class="tanitim">
      <img src="@/assets/Mobilya1.jpg" alt="space">
      <div class="tanitim-text">
        <h2>Yenilikçi ve Özel Tasarım Ürünler</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio minus eligendi quod quo esse fuga rerum labore porro, quae ratione facere earum fugit? Impedit nostrum officia commodi, labore placeat quas?</p>
        <button @click="$router.push('/urunler')">Devamı</button>
      </div>
    </div>

    <div class="hakkimizda">
      <div class="hakkimizda-text">                
        <h2>Pema Home Olarak;</h2>
        <p>Kaliteyi estetikle buluşturarak şıklık ve konforu evinize getiriyoruz.</p>
      </div>
      <button @click="$router.push('/hakkimizda')">Devamı</button>
    </div>
    
    <div class="section-title">
      <h2>Ürünlerimiz</h2>  
    </div>
    
    <div class="boxs">
      <div class="box">
        <img src="@/assets/ikonlar/double-bed.svg" alt="">
        <router-link to="/urunler" class="box-text">Modern Mobilyalar</router-link> 
      </div>
      <div class="box">
        <img src="@/assets/ikonlar/save-money.svg" alt="">
        <router-link to="/urunler" class="box-text">Ekonomik Fiyatlar</router-link> 
      </div>
      <div class="box">
        <img src="@/assets/ikonlar/verified.svg" alt="">
        <router-link to="/urunler" class="box-text">Güvenilir Alışveriş</router-link> 
      </div>
      <div class="box">
        <img src="@/assets/ikonlar/home.svg" alt="">
        <router-link to="/urunler" class="box-text">Evinizi Baştan Yaratın</router-link> 
      </div>
    </div>
    
    <div class="products">
      <div class="card" v-for="(product, index) in products" :key="index">
        <img :src="product.image" :alt="product.title">
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <button @click="$router.push(product.link)">Devamı</button>
      </div>
    </div>
  </div>
</template>

<script>
import {createRouter as $router} from "vue-router";

export default {
  name: 'HomePage',
  methods: {$router},
  data() {
    return {
      products: [
        {
          title: 'Ürün Adı',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, blanditiis?',
          image: require('@/assets/Mobilya1.jpg'),
          link: '/urunler'
        },
        {
          title: 'Ürün Adı',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, blanditiis?',
          image: require('@/assets/Mobilya1.jpg'),
          link: '/urunler'
        },
        {
          title: 'Ürün Adı',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, blanditiis?',
          image: require('@/assets/Mobilya1.jpg'),
          link: '/urunler'
        },
        {
          title: 'Ürün Adı',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, blanditiis?',
          image: require('@/assets/Mobilya1.jpg'),
          link: '/urunler'
        },
        {
          title: 'Ürün Adı',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, blanditiis?',
          image: require('@/assets/Mobilya1.jpg'),
          link: '/urunler'
        },
        {
          title: 'Ürün Adı',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, blanditiis?',
          image: require('@/assets/Mobilya1.jpg'),
          link: '/urunler'
        }
      ]
    }
  }
}
</script>

<style scoped>
.welcome {
  padding-bottom: 5rem;
}
.welcome h1 {
  margin-top: 3rem;
  font-size: clamp(6rem, calc(13vw + 1rem), 15vw);     
}
.welcome p{
  font-size: clamp(1.2rem, 1.5vw, 1.7rem);
}

.boxs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
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

.hakkimizda {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  height: max-content;
  padding: 2rem;  
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
}

.tanitim h2, .hakkimizda h2 {
  text-align: center;
  font-size: clamp(2rem, calc(3vw + 1rem), 5rem);
  color: var(--primary-color);
}

.hakkimizda-text {
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.hakkimizda button {
  font-family: "Inter", sans-serif;
  align-self: center;
  justify-self: end;
  margin-right: 2rem;
  background-color: var(--accent-color);
  color: var(--primary-color);
  height: 3rem;
  width: 10rem;
  font-weight: 600;
  border: none;
  transition: var(--transition);
}

.hakkimizda button:hover {
  background-color: #BEA989; /* Daha koyu bej */
}

.tanitim {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));    
  width: 100%;
  min-height: 50vh;
  align-items: center;
  background-color: var(--white);
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
}

.tanitim h1 {
  text-align: center;
}

.tanitim img {
  width: 100%;
  height: 90%;
  object-fit: cover;
  box-shadow: var(--shadow);
  transition: transform 0.5s ease;
}

.tanitim-text {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.tanitim-text button {
  font-family: "Inter", sans-serif;
  align-self: center;
  background-color: var(--accent-color);
  color: var(--primary-color);
  width: 8rem;
}

.tanitim-text button:hover {
  background-color: #BEA989; /* Daha koyu bej */
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.products .card {
  background-color: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
  text-align: center;
  box-shadow: var(--shadow);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.products .card img {
  width: 100%;
  aspect-ratio: 16/9;
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
  font-family: "Inter", sans-serif;
  align-self: center;
  width: 80%;
  margin: 1.5rem auto;
  margin-top: 1rem;
  background-color: var(--accent-color);
  color: var(--primary-color);
  font-weight: 600;
}

.products .card button:hover {
  background-color: #BEA989;
}

@media (max-width: 768px) {
  .hakkimizda {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hakkimizda-text {
    margin-left: 0;
  }
  
  .hakkimizda button {
    justify-self: center;
    margin-right: 0;
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
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

@media (max-width: 576px) {
  .boxs {
    grid-template-columns: 1fr 1fr;
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
</style> 