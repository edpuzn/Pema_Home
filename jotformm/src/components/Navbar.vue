<template>
  <header class="header">
    <div class="logo-container">
      <img src="../assets/logo.png" alt="Del Mono Fresh Logo" class="logo">
      <h1>Del Mono Fresh</h1>
    </div>
    <div class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav :class="{ 'nav-open': isMenuOpen }">
      <router-link to="/" class="nav-link" @click="closeMenu">Ana Sayfa</router-link>
      <router-link to="/favorites" class="nav-link" @click="closeMenu">Favorilerim</router-link>
      <router-link to="/cart" class="nav-link" @click="closeMenu">Sepetim</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MainNavbar',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  height: 80px;
  width: auto;
}

.header h1 {
  color: #2c3e50;
  margin: 0;
  font-size: 1.5rem;
}

nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #f8f9fa;
  color: #3498db;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  padding: 10px;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #2c3e50;
  transition: all 0.3s ease;
}

/* Mobil cihazlar için medya sorguları */
@media screen and (max-width: 768px) {
  .header {
    padding: 1rem;
  }

  .header h1 {
    font-size: 1.2rem;
  }

  .hamburger {
    display: flex;
  }

  nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    height: 100vh;
    background-color: white;
    flex-direction: column;
    padding: 2rem 1rem;
    gap: 1rem;
    box-shadow: -2px 0 4px rgba(0,0,0,0.1);
    transition: right 0.3s ease;
    z-index: 1000;
  }

  nav.nav-open {
    right: 0;
  }

  .nav-link {
    padding: 1rem;
    text-align: left;
    width: 100%;
    background-color: #f8f9fa;
    border-radius: 4px;
    font-size: 1.1rem;
  }

  .nav-link:hover {
    background-color: #e9ecef;
  }

  /* Menü açıkken arka planı karart */
  .header::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
  }

  .header.nav-open::after {
    opacity: 1;
    visibility: visible;
  }
}

/* Çok küçük ekranlar için ek düzenlemeler */
@media screen and (max-width: 480px) {
  .header {
    padding: 0.8rem;
  }

  .header h1 {
    font-size: 1rem;
  }

  .logo {
    height: 60px;
  }

  nav {
    width: 100%;
  }
}
</style>
