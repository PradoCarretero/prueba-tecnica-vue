<template>
  <main>
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
    <p>{{ $store.state.msg }}</p>
  </main>
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
      const originalWord = this.seachInput;
      const reg = /^[a-z]{1}$/;
      /* let errMsg = "" */ if (reg.test(originalWord) == false) {
        /*  errMsg = "por favor escriba una sóla letra en letra minúscula"; */
      } else {
        console.log("enviar");
      }
      /*  return errMsg; */
    },
  },
};
</script>
