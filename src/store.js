import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
/* import { search } from "core-js/fn/symbol"; */

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foodList: [],
    favorites: [],
    result: null,
    showModal: {
      idRecipe: null,
      window: false,
      strInstructions: null,
    },
  },
  mutations: {
    setFoodList(state, playload) {
      state.foodList = playload;
    },
    setFavorites(state, playload) {
      state.favorites = playload;
    },
    setShowModal(state, playload) {
      state.showModal = playload;
    },
  },
  actions: {
    async getBooks({ commit }, playload) {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${playload}`
        );
        this.state.result = true;
        console.log(response.data.meals);
        const array = response.data.meals.map((item) => Object.keys(item));
        console.log("array", array);
        for (const i of array) {
          let number = 0;
          console.log(number);
          const string = i.toString();
          console.log(string.includes("strIngredient"));

          if (string.includes("strIngredient") == true) {
            number = number + 1;
            console.log("paso por true", number);
            return number;
          }
          console.log(number);
        }

        const dataClean = response.data.meals.map((item) => {
          return {
            idMeal: item.idMeal,
            strMeal: item.strMeal,
            strCategory: item.strCategory,
            strMealThumb: item.strMealThumb,
            isFav: false,
            strInstructions: item.strInstructions,
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
