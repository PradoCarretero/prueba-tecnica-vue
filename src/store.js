import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foodList: [],
    currentMeal: null,
    favorites: new Map(),
  },
  mutations: {
    setFoodList(state, playload) {
      state.foodList = playload;
    },
    setFoodFav(state, playload) {
      state.foodList = [...state.foodList, playload];
    },
  },
  actions: {
    async getBooks({ commit }, playload) {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${playload}`
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
