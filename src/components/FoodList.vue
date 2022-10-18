<template>
  <ul>
    <li
      :class="{ active: currentMeal !== null && currentMeal == item }"
      v-for="(item, index) in foodList"
      :key="index"
    >
      <h3>{{ item.strMeal }}</h3>
      <p>{{ item.strCategory }}</p>
      <i class="fa-regular fa-eye"></i>
      <i v-on:click="toggleIsFav(item)" class="fa-regular fa-heart"></i>
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
  },
  components: {},
  data: function () {
    return {};
  },

  methods: {
    toggleIsFav: function (selectedItem) {
      const newFoodList = [...this.$store.state.foodList];
      const selectedItemId = selectedItem.idMeal;
      const foundMeal = newFoodList.find(
        (meal) => meal.idMeal === selectedItemId
      );
      foundMeal.isFav = !foundMeal.isFav;
      this.$store.commit("setFoodList", newFoodList);
    },
  },
};
</script>

<style scoped>
.img {
  width: 100px;
}
</style>
