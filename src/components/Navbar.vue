<template>
  <nav>
    <div class="logo">
      <router-link to="/" class="hide-elements" exact>
        <img src="@/assets/ikonlar/PemaHome-Logo.svg" alt="Marka Logo" class="logo-img" />
      </router-link>
    </div>
    <ul>
      <li><router-link to="/" class="hide-elements" exact>Anasayfa</router-link></li>
      <li><router-link to="/hakkimizda" class="hide-elements">Hakkımızda</router-link></li>
      <li><router-link to="/urunler" class="hide-elements">Ürünler</router-link></li>
      <li><router-link to="/iletisim" class="hide-elements">İletişim</router-link></li>
      <li><img src="@/assets/ikonlar/menu.svg" alt="menu" class="menu-btn" @click="toggleSidebar"></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toggleSidebar() {
      document.querySelector('.sidebar').classList.add('active')
      document.querySelector('.overlay').classList.add('active')
      document.body.style.overflow = 'hidden'
    }
  }
}
</script>

<style scoped>
nav {
  background-color: rgba(245, 245, 245, 0.8);
  width: 100%;
  height: 7rem;
  display: flex;
  font-size: clamp(1rem, 1.1rem, 1.5rem);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
  box-sizing: border-box;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;
  flex-wrap: nowrap;
  width: auto;
}

nav li {    
  display: flex;
  align-items: center;
}

nav li:not(:last-child) {
  margin-right: 4rem;
}

.logo {
  margin-right: auto;
  margin-left: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 50%;
}

.logo-img {
  height: 70%;
  width: auto;
  max-height: 80px;
}

.menu-btn {
  display: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
}

a {
  color: var(--primary-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  border-radius: var(--radius);
  font-weight: 600;
  transition: var(--transition);
  position: relative;
  display: inline-block;
}

nav a:hover {
  color: var(--accent-color);
}

/* Aktif sayfa göstergesi */
nav a.router-link-active {
  color: var(--accent-color);
}

nav a.router-link-active::after {
  transform: scaleX(1);
}

nav a::after { 
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--accent-color);
  transition: transform 0.4s ease;
  transform: scaleX(0);
}

nav a:hover::after {
  transform: scaleX(1);
}

@media screen and (max-width: 768px) {
  nav {
    height: 5rem;
    padding: 0 1rem;
    justify-content: space-between;
  }
  
  .logo {
    margin-left: 0;
    max-width: 60%;
  }
  
  .logo-img {
    width: auto;
    min-width: 150px;
    max-height: 60px;
  }
  
  .hide-elements {
    display: none !important;
  }
  
  .menu-btn {
    display: block;
  }
  
  nav ul {
    padding-right: 0;
    justify-content: flex-end;
    width: auto;
  }
  
  nav a {
    padding: 0 1.5rem;
  }
  
  nav li:not(:last-child) {
    margin-right: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .logo {
    max-width: 70%;
  }
  
  .logo-img {
    min-width: 120px;
    max-height: 50px;
  }
  
  nav {
    padding: 0 0.5rem;
  }
}
</style> 