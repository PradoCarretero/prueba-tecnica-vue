import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
/* import { search } from "core-js/fn/symbol"; */

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foodList: [],
    favorites: new Map(),
    result: null,
    arrayFavorites: [],
  },
  mutations: {
    setFoodList(state, playload) {
      state.foodList = playload;
    },
    addFavorite(state, playload) {
      state.favorites.set(playload.idMeal, playload);
    },
  },
  getters: {
    arrayFavorite(state) {
      const arrow = state.favorites.map((item) => item.value);
      console.log("arrow", arrow);
      state.arrayFavorites = arrow;
    },
  },

  actions: {
    async getBooks({ commit }, playload) {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${playload}`
        );
        this.state.result = true;
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
