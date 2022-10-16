import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: "",
  },
  mutations: {
    addError(state) {
      state.msg =
        "Por favor introduczca un carácter válido: una letra minúscula";
    },
    deleteError(state) {
      state.msg = "";
    },
  },
  actions: {
    addErrorAction(context) {
      context.commit("addError");
    },
    deleteErrorAction(context) {
      context.commit("deleteError");
    },
  },
});
