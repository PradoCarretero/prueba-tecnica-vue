<template>
  <main class="mx-[25%]">
    <SearchPannel />
    <section v-if="result">
      <FoodList :infoToShow="foodList" />
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
import SearchPannel from "../components/SearchPannel.vue";
import FoodList from "../components/FoodList.vue";

export default {
  name: "SearchView",

  computed: {
    foodList() {
      return this.$store.state.foodList;
    },
    result() {
      return this.$store.state.result;
    },
  },
  components: { SearchPannel, FoodList },
};
</script>
