<template>
  <form action="search" v-on:submit.prevent="searchFood">
    <input
      type="text"
      placeholder="Buscar comida..."
      id="seachInput"
      name="seachInput"
      v-model="seachInput"
    />
    <input type="submit" id="submit" value="Buscar" />
  </form>
</template>

<script>
// @ is an alias to /src

export default {
  name: "SearchView",
  components: {},
  data: function () {
    return {
      seachInput: "",
    };
  },
  methods: {
    searchFood() {
      console.log(this.seachInput);
      /* if(/[a-c]{2}/.test() ) {console.log("yepi");} */
    },
  },
};
</script>
