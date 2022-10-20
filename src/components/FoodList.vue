<template>
  <ul class="grid grid-cols-3 gap-x-6 gap-y-128 m-auto">
    <li
      class="border rounded-2xl"
      v-for="(item, index) in infoToShow"
      :key="index"
    >
      <section
        class="overflow-hidden relative rounded-tl-2xl rounded-tr-2xl max-h-128"
      >
        <p class="absolute p-2 m-2 bg-white rounded-3xl">
          {{ item.strCategory }}
        </p>
        <img class="w-fit" :src="item.strMealThumb" />
      </section>
      <section class="flex justify-between px-5 items-center py-4">
        <h3 class="text-lg">{{ item.strMeal }}</h3>
        <div class="flex items-center">
          <i class="fa-regular fa-eye fa-lg mr-2"></i>
          <i
            v-if="favorites.has(item.idMeal)"
            v-on:click="removeFavorite(item)"
            class="fa-solid fa-heart fa-lg"
          ></i>
          <i
            v-else
            v-on:click="addFavoriteItem(item)"
            class="fa-regular fa-heart"
          ></i>
        </div>
      </section>
    </li>
  </ul>
</template>

<script>
// @ is an alias to /src

export default {
  name: "FoodList",
  props: {
    infoToShow: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    console.log("infoToShow", this.infoToShow);
    console.log("favorites", this.favorites);
    this.$store.getters.arrayFavorite();
  },

  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
    result() {
      return this.$store.state.result;
    },
  },
  components: {},
  data: function () {
    return {};
  },

  methods: {
    addFavoriteItem(item) {
      console.log(item);
      this.$store.commit("addFavorite", item);
    },
    removeFavorite(item) {
      this.$store.state.favorites.delete(item.idMeal);
    },
  },
};
</script>

<style scoped></style>
