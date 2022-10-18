<template>
  <ul v-if="result">
    <li v-for="(item, index) in foodList" :key="index">
      <h3>{{ item.strMeal }}</h3>
      <p>{{ item.strCategory }}</p>
      <i class="fa-regular fa-eye"></i>
      <i v-on:click="removeFavorite(item)" class="fa-solid fa-heart"></i>
      <i v-on:click="addFavorite(item)" class="fa-regular fa-heart"></i>
      <img class="img" :src="item.strMealThumb" />
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
    currentMeal() {
      return this.$store.state.currentMeal;
    },
    favorites() {
      return this.$store.state.favorites;
    },
    result() {
      return this.$store.state.result;
    },
    isFavorite(item) {
      return this.$store.state.favorites.has(item.idMeal) ? "True" : "False";
    },
  },
  components: {},
  data: function () {
    return {};
  },

  methods: {
    /*   toggleIsFav: function (selectedItem) {
      const newFoodList = [...this.$store.state.foodList];
      const selectedItemId = selectedItem.idMeal;
      const foundMeal = newFoodList.find(
        (meal) => meal.idMeal === selectedItemId
      );
      foundMeal.isFav = !foundMeal.isFav;
      this.$store.commit("setFoodList", newFoodList);
    }, */
    addFavorite(item) {
      this.$store.state.favorites.set(item.idMeal, item);
      console.log(this.$store.state.favorites);
    },
    removeFavorite(item) {
      this.$store.state.favorites.delete(item.idMeal);
      console.log(this.$store.state.favorites);
    },
  },
};
</script>

<style scoped>
.img {
  width: 100px;
}
</style>
