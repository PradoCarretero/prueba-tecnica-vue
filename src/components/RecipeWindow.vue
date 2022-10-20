<template>
  <div
    class="modal-overlay absolute top-0 right-0 bottom-0 left-0 bg-[rgba(255,255,255,0.90)] Fuente: https://www.iteramos.com/pregunta/12417/no-quiero-heredar-la-opacidad-del-hijo-del-padre-en-css] z-10 flex items-center justify-center"
  >
    <section class="w-5/12 min-h-[41.6%] bg-white relative p-12">
      <i class="fa-regular fa-circle-xmark absolute top-0 right-0 m-2"></i>
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
  },
};
</script>
