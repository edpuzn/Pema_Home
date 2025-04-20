<template>
  <div class="sidebar" :class="{ active: isActive }">
    <div class="sidebar-header">
      <img src="@/assets/ikonlar/PemaHome-Logocuk.svg" alt="Marka Logo" class="sidebar-logo">
      <i class="fas fa-times close-btn" @click="closeSidebar"></i>
    </div>
    <ul class="sidebar-menu">
      <li><router-link to="/" @click="closeSidebar">Anasayfa</router-link></li>
      <li><router-link to="/hakkimizda" @click="closeSidebar">Hakkımızda</router-link></li>
      <li><router-link to="/urunler" @click="closeSidebar">Ürünler</router-link></li>
      <li><router-link to="/iletisim" @click="closeSidebar">İletişim</router-link></li>
    </ul>
    <div class="sidebar-footer">
      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fa-solid fa-phone"></i></a>
        <!-- <a href="#"><i class="fab fa-twitter"></i></a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    document.querySelector('.overlay').addEventListener('click', this.closeSidebar)
    window.addEventListener('resize', this.checkWindowSize)
  },
  beforeUnmount() {
    document.querySelector('.overlay').removeEventListener('click', this.closeSidebar)
    window.removeEventListener('resize', this.checkWindowSize)
  },
  methods: {
    closeSidebar() {
      document.querySelector('.sidebar').classList.remove('active')
      document.querySelector('.overlay').classList.remove('active')
      document.body.style.overflow = 'auto'
    },
    checkWindowSize() {
      if (window.innerWidth >= 1100) {
        this.closeSidebar()
      }
    }
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  right: -300px;
  top: 0;
  width: 300px;
  height: 100%;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  z-index: 100;
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.sidebar.active {
  right: 0;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.sidebar-logo {
  height: 40px;
}

.close-btn {
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--primary-color);
  transition: color 0.3s;
}

.close-btn:hover {
  color: var(--accent-color);
}

.sidebar-menu {
  list-style: none;
  padding: 1rem 0;
  margin: 0;
  flex-grow: 1;
}

.sidebar-menu li {
  padding: 0.5rem 1.5rem;
}

.sidebar-menu a {
  display: block;
  color: var(--primary-color);
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  transition: color 0.3s;
}

.sidebar-menu a:hover,
.sidebar-menu a.router-link-active {
  color: var(--accent-color);
}

.sidebar-footer {
  padding: 1rem;
  border-top: 1px solid #eee;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-icons a {
  color: var(--primary-color);
  font-size: 1.5rem;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: var(--accent-color);
}
</style> 