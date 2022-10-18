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

  methods: {},
};
</script>
