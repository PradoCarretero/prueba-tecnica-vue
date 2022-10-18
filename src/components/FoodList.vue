<template>
  <ul>
    <li v-for="(item, index) in foodList" :key="index">
      <h3>{{ item.strMeal }}</h3>
      <p>{{ item.strCategory }}</p>
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
  },
  components: {},
  data: function () {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
.img {
  width: 100px;
}
</style>
