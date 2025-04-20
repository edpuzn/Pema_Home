<template>
  <div class="contact-container">

    <!-- Bilgi Kartları Yan Yana -->
    <div class="info-wrapper">
      <div class="info-box">
        <h3 class="info-title">Mağaza</h3>
        <p class="info-text">
          <strong>Adres:</strong> Ovacık Mahallesi Gülben Caddesi No:6/1<br />
          Gebze / KOCAELİ
        </p>
      </div>

      <div class="info-box">
        <h3 class="info-title">İletişim</h3>
        <p class="info-text">
          Ürün talepleriniz için bize ulaşabilirsiniz.<br />
          <strong>Destek:</strong> 0 507 259 40 39
        </p>
      </div>

      <div class="info-box">
        <h3 class="info-title">Email</h3>
        <p class="info-text">
          <strong>Email:</strong>
          <a href="mailto:info@zumrutmobilya.org">info@pemahome.com.tr</a><br />
        </p>
      </div>
    </div>

    <br>
    <br>

    <!-- Harita Kutusu -->
    <div class="map-container">
      <iframe
          class="map"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          :src="mapUrl"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactInfo',
  data() {
    return {
      mapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.789470136134!2d29.372155975783198!3d40.788642332920595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadfcba1fa0843%3A0xefa60e3a07d25918!2sOsman%20Gazi%2C%20G%C3%BClben%20Sk.%20No%3A6%20D%3A1%2C%2041700%20Dar%C4%B1ca%2FKocaeli!5e0!3m2!1str!2str!4v1743087214810!5m2!1str!2str',
    };
  },
};
</script>

<style scoped>
/* Sayfa Genel */
.contact-container {
  max-width: 1500px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  text-align: center;
}

.info-title{
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
  text-align: justify;
}

/* Bilgiler Yanyana */
.info-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

/* Bilgi Kartları */
.info-box {
  flex: 1;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.info-title {
  position: relative;
}

.info-title::after {
  content: "";
  position: absolute;
  top: 10px;
  left: -50px;
  width: 40px;
  height: 2.5px;
  background: var(--accent-color);
}



.info-text {
  font-size: 16px;
  color: #8a8a8a;
  line-height: 1.5;
  text-align: left;
}

a {
  color: #000000;
  text-decoration: none;
}

/* Harita Kutusu */
.map-container {
  margin-top: 30px;
  text-align: center;
}

.map {
  width: 100%;
  height: 350px;
  border: 0;
  border-radius: 8px;
}

/* Responsive (Mobilde Alt Alta) */
@media (max-width: 768px) {
  .info-wrapper {
    flex-direction: column;
    gap: 10px;
  }

  .info-box {
    width: 100%;
  }

  .map {
    height: 300px;
  }
}
</style>
