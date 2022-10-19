<template>
  <header class="container mx-auto">
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <h1>Hello world!</h1>
    <section class="container mx-auto">
      <router-link to="/" class="container mx-auto">
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
