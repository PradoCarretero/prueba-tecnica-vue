<template>
  <ul v-if="result" class="grid grid-cols-12 gap-5 w-3/4">
    <li
      class="border rounded-lg"
      v-for="(item, index) in foodList"
      :key="index"
    >
      <section class="h-1/12">
        <img class="w-fit" :src="item.strMealThumb" />
        <p>{{ item.strCategory }}</p>
      </section>
      <section class="flex">
        <h3>{{ item.strMeal }}</h3>
        <div>
          <i class="fa-regular fa-eye"></i>
          <i
            v-if="favorites.has(item.idMeal)"
            v-on:click="removeFavorite(item)"
            class="fa-solid fa-heart"
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
  computed: {
    foodList() {
      return this.$store.state.foodList;
    },

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
      this.$store.commit("addFavorite", item);
    },
    removeFavorite(item) {
      this.$store.state.favorites.delete(item.idMeal);
    },
  },
};
</script>

<style scoped></style>
