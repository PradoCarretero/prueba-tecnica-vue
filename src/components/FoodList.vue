<template>
  <ul>
    <li v-for="(item, index) in foodList" :key="index">
      <h3>{{ item.strMeal }}</h3>
      <p>{{ item.strCategory }}</p>
      <i class="fa-regular fa-eye"></i>
      <i v-on:click="toggleIsFav()" class="fa-regular fa-heart"></i>
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
    toggleIsFav: function () {
      console.log(this);
    },
  },
};
</script>

<style scoped>
.img {
  width: 100px;
}
</style>
