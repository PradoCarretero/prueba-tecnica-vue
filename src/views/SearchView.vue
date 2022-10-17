<template>
  <main>
    <form action="search" v-on:submit.prevent="searchFood">
      <input
        type="text"
        placeholder="Buscar comida..."
        id="searchInput"
        name="searchInput"
        v-model="searchValue"
      />
      <input type="submit" id="submit" value="Buscar" />
    </form>
    <p>{{ $store.state.errMsg }}</p>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "SearchView",
  components: {},
  data: function () {
    return {
      searchValue: "",
    };
  },

  methods: {
    searchFood() {
      const searchValue = this.searchValue;
      const reg = /^[a-z]{1}$/;
      if (reg.test(searchValue) == false) {
        this.$store.commit(
          "setErrorMsg",
          "Por favor introduczca un carácter válido: una letra minúscula"
        );
        this.$store.commit("setFoodList", []);
      } else {
        this.$store.commit("setErrorMsg", "");
        this.$store.commit("setsearchValue", searchValue);
        this.$store.dispatch("getBooks", searchValue);
      }
    },
  },
};
</script>
