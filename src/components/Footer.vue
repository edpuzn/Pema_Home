<template>
  <footer class="footer" style="position: relative;">
    <div class="footer-content">
      <div class="footer-section about">
        <h3>Hakkımızda</h3>
        <p> Her biri el emeği göz nuruyla üretilen koleksiyonlarımız, zevkinize ve mekanınızın ruhuna uygun şekilde tasarlanıyor.</p>
      </div>
      <div class="footer-section links">
        <h3>Bağlantılar</h3>
        <ul>
          <li><router-link to="/">Anasayfa</router-link></li>
          <li><router-link to="/hakkimizda">Hakkımızda</router-link></li>
          <li><router-link to="/urunler">Ürünler</router-link></li>
          <li><router-link to="/iletisim">İletişim</router-link></li>
        </ul>
      </div>
      <div class="footer-section social">
        <h3>Sosyal Medya</h3>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fa-solid fa-phone"></i></a>
          <!-- <a href="#"><i class="fa-brands fa-square-x-twitter"></i></a> -->
        </div>
      </div>
      <div class="footer-logo">
        <img src="../assets/ikonlar/PemaHome-Logo.svg" alt="Pema Home Logo" style="height: 8rem; margin-left: -4rem">
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2025 Pema Home | Tüm Hakları Saklıdır
    </div>
    <div class="powered-by" style="text-align: center; color: grey  ;">
      Powered by SUESS GROUP
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: var(--light-bg);
  color: var(--primary-color);
  margin-top: 2rem;
  padding: 2rem 0 0;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-section h3 {
  color: var(--primary-color);
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--accent-color);
}

.footer-section p {
  color: var(--secondary-color);
  line-height: 1.6;
  text-align: left;
}

.footer-section.links ul {
  list-style: none;
  padding: 0;
}

.footer-section.links li {
  margin-bottom: 0.5rem;
}

.footer-section.links a {
  color: var(--secondary-color);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section.links a:hover,
.footer-section.links a.router-link-active {
  color: var(--accent-color);
}

.footer-section.social .social-icons {
  display: flex;
  gap: 1rem;
}

.footer-section.social .social-icons a {
  color: var(--secondary-color);
  font-size: 1.5rem;
  transition: color 0.3s;
}

.footer-section.social .social-icons a:hover {
  color: var(--accent-color);
}

.footer-bottom {
  margin-top: 2rem;
  padding: 1rem 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;
  background-color: var(--light-bg);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .footer-section h3::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .footer-section p {
    text-align: center;
  }
  
  .footer-section.social .social-icons {
    justify-content: center;
  }
}
</style> 