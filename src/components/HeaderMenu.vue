<template>
  <header
    class="w-11/12 mx-auto flex justify-between items-center py-4 border-b-2 border-dotted"
  >
    <section>
      <router-link to="/">
        <img src="../assets/logo.png" width="90px" alt="logo mealflix" />
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
