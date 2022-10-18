<template>
  <main>
    <FoodList />
  </main>
</template>

<script>
// @ is an alias to /src
import FoodList from "../components/FoodList.vue";

export default {
  name: "SearchView",
  components: { FoodList },
  data: function () {
    return {};
  },

  methods: {
    showIsFav: function () {
      /* const foodList = this.$store.state.foodList;
      const foodListFav = foodList.filter((meal) => meal.isFav); */
      console.log("foodListFav");
    },
  },
};
</script>
