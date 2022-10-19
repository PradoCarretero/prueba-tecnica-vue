<template>
  <section class="content flex-col">
    <form
      class="flex justify-center"
      action="search"
      v-on:submit.prevent="searchFood"
    >
      <div
        class="w-full flex justify-between my-32 py-2 border-b-2 border-dotted focus:border-sky-500"
      >
        <input
          class="py-2 pl-4 pr-3 placeholder:text-slate-250 border-slate-250 focus:outline-none rounded-md focus:ring-sky-500"
          type="text"
          placeholder="Buscar comida..."
          id="searchInput"
          name="searchInput"
          v-model="searchValue"
        />
        <input
          class="text-white bg-blue-500 hover:bg-blue-700 rounded-md py-2 px-8"
          type="submit"
          id="submit"
          value="Buscar"
        />
      </div>
    </form>
    <p class="text-center text-sm text-slate-300 mt-4">{{ errMsg }}</p>
  </section>
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
