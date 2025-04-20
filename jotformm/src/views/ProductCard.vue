<template>
  <div class="product-card">
    <img :src="product.image" alt="Ürün Resmi" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }} TL</p>
    <button @click="addToCart(product)">Sepete Ekle</button>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product);
    },
  },
};
</script>

<style scoped>
.product-card {
  background-color: #f4f4f4;
  padding: 15px;
  text-align: center;
  border-radius: 8px;
}

.product-card img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.product-card button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
