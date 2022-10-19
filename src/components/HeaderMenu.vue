<template>
  <header class="container mx-auto flex justify-between items-center my-4">
    <section>
      <router-link to="/">
        <img src="../assets/logo.png" alt="" width="90px" />
      </router-link>
    </section>
    <nav>
      <router-link to="/">Comidas</router-link> |
      <router-link to="/favoritos">Favoritos</router-link>
    </nav>
    <i class="fa-solid fa-circle-h fa-xl"></i>
  </header>
</template>

<script>
export default {
  name: "HeaderMenu",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
