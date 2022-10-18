import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errMsg: "",
    foodList: [],
    searchValue: "",
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
  },
  actions: {
    async getBooks({ state, commit }) {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${state.searchValue}`
        );
        const dataClean = response.data.meals.map((meal) => {
          return {
            strMeal: meal.strMeal,
            strCategory: meal.strCategory,
            strMealThumb: meal.strMealThumb,
            isFav: false,
          };
        });
        commit("setFoodList", dataClean);
        console.log(dataClean);
      } catch (err) {
        commit("setFoodList", []);
        alert(err.message);
      }
    },
  },
});
