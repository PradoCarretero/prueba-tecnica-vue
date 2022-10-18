import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchValue: "",
    errMsg: "",
    foodList: [],
    favList: [],
    isFav: false,
  },

  /*   getters: {
    isFav(state,playload) {
      return state.favList=playload;
    }
  }, */
  mutations: {
    setErrorMsg(state, playload) {
      state.errMsg = playload;
    },
    setsearchValue(state, playload) {
      state.searchValue = playload;
    },
    setFoodList(state, playload) {
      state.foodList = playload;
    },
    setFavList(state, playload) {
      state.favList = playload;
    },
    setIsFav(state, playload) {
      state.isFav = playload;
    },
  },
  actions: {
    async getBooks({ state, commit }) {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${state.searchValue}`
        );
        const dataClean = response.data.meals.map((item) => {
          return {
            idMeal: item.idMeal,
            strMeal: item.strMeal,
            strCategory: item.strCategory,
            strMealThumb: item.strMealThumb,
            isFav: false,
          };
        });
        commit("setFoodList", dataClean);
      } catch (err) {
        commit("setFoodList", []);
        alert(err.message);
      }
    },
  },
});
