<template>
  <main>
    <SearchPannel />
    <FoodList />
  </main>
</template>

<script>
// @ is an alias to /src
import SearchPannel from "../components/SearchPannel.vue";
import FoodList from "../components/FoodList.vue";

export default {
  name: "SearchView",
  computed: {
    result() {
      return this.$store.state.result;
    },
  },
  components: { SearchPannel, FoodList },
  data: function () {
    return {};
  },

  methods: {},
};
</script>
