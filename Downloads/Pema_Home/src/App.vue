<template>
  <div class="app-container">
    <Navbar />
    <Sidebar />
    <div class="overlay"></div>
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    Footer
  }
}
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 90;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.overlay.active {
  opacity: 1;
  visibility: visible;
}
</style> 