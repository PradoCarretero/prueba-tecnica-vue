<template>
  <div>
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
    <p>{{ errMsg }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "SearchPannel",
  components: {},
  data: function () {
    return {
      searchValue: null,
      errMsg: null,
    };
  },

  methods: {
    searchFood() {
      const searchValue = this.searchValue;
      const reg = /^[a-z]{1}$/;
      const isSucessfull = reg.test(searchValue);
      if (!isSucessfull) {
        this.errMsg =
          "Por favor introduczca un carácter válido: una letra minúscula";

        this.$store.commit("setFoodList", []);
      } else {
        this.errMsg = null;
        this.$store.dispatch("getBooks", searchValue);
        this.searchValue = null;
      }
    },
  },
};
</script>
