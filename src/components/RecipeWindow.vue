<template>
  <div
    class="modal-overlay absolute top-0 right-0 bottom-0 left-0 bg-[rgba(255,255,255,0.90)] z-10 flex items-center justify-center"
  >
    <section class="w-5/12 min-h-[41.6%] bg-white relative md:p-12">
      <i
        v-on:click="showModalOff()"
        class="fa-regular fa-circle-xmark absolute top-0 right-0 m-2"
      ></i>
      <h2 class="text-3xl text-center mb-12">Receta</h2>
      <p class="text-xl">{{ strInstructions }}</p>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "RecipeWindow",

  computed: {
    foodList() {
      return this.$store.state.foodList;
    },
    strInstructions() {
      return this.$store.state.showModal.strInstructions;
    },
    showModal() {
      return this.$store.state.showModal;
    },
  },
  methods: {
    addFavoriteItem(item) {
      this.$store.commit("addFavorite", item);
    },
    removeFavorite(item) {
      this.$store.state.favorites.delete(item.idMeal);
    },

    showModalOff() {
      this.$store.commit("setShowModal", {
        idRecipe: null,
        window: false,
        strInstructions: null,
      });
    },
  },
};
</script>
