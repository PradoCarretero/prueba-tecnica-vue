import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errMsg: "",
    foodList: [],
    currentMeal: null,
    searchValue: "",
    favorites: new Map(),
  },
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
    setFoodFav(state, playload) {
      state.foodList = [...state.foodList, playload];
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
