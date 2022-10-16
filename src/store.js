import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errMsg: "",
    foodList: [],
    currentFood: null,
  },
  mutations: {
    ADD_ERROR: (state) =>
      (state.errMsg =
        "Por favor introduczca un carácter válido: una letra minúscula"),
    DELETE_ERROR: (state) => (state.errMsg = ""),
    LOAD_AUTHOR: (state, payload) => (state.author = payload),
    LOAD_BOOKS: (state, payload) => (state.books = payload),
  },
  actions: {},
});
