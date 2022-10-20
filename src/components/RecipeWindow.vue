<template>
  <section
    class="modal-overlay absolute top-0 right-0 bottom-0 left-0 bg-white opacity-90 z-10"
  >
    <h2>Receta</h2>
    <p>{{ strInstructions }}</p>
  </section>
</template>

<script>
// @ is an alias to /src
/* import FoodList from "../components/FoodList.vue";
 */
export default {
  name: "RecipeWindow",

  computed: {
    foodList() {
      return this.$store.state.foodList;
    },
    strInstructions() {
      return this.$store.state.showModal.strInstructions;
    },
  },
  /*   components: { FoodList }, */
};
</script>
