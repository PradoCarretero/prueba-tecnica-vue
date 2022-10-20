<template>
  <div>
    <transition name="recipe">
      <RecipeWindow v-if="showModal.window" />
    </transition>

    <ul class="grid grid-cols-3 gap-x-6 gap-y-128 m-auto mb-32">
      <li
        class="border rounded-2xl"
        v-for="(item, index) in infoToShow"
        :key="index"
      >
        <section
          class="overflow-hidden relative rounded-tl-2xl rounded-tr-2xl max-h-128"
        >
          <p class="absolute md:p-2 m-2 bg-white rounded-3xl">
            {{ item.strCategory }}
          </p>
          <img class="w-fit" :src="item.strMealThumb" />
        </section>
        <section class="md:flex justify-between px-5 items-center py-4">
          <h3 class="text-lg">{{ item.strMeal }}</h3>
          <div class="flex items-center">
            <i
              v-on:click="showModalOn(item)"
              class="fa-regular fa-eye fa-lg mr-2"
            ></i>
            <div v-if="!inFav">
              <i
                v-on:click="addFavoriteItem(item)"
                class="fa-regular fa-heart"
              ></i>
            </div>
          </div>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeWindow from "../components/RecipeWindow.vue";

export default {
  name: "FoodList",
  props: {
    infoToShow: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
    result() {
      return this.$store.state.result;
    },
    showModal() {
      return this.$store.state.showModal;
    },
  },
  inFav() {
    const urlActive = window.location.href;
    const urlFav = "http://localhost:8080/favoritos";
    let inFav = false;
    if (urlActive === urlFav) {
      inFav = true;
    }
    return inFav;
  },

  methods: {
    addFavoriteItem(selectedItem) {
      const newFavList = [...this.$store.state.favorites];
      const selectedItemId = selectedItem.idMeal;
      const foundMeal = newFavList.find(
        (meal) => meal.idMeal === selectedItemId
      );
      if (foundMeal == undefined || null) {
        newFavList.push(selectedItem);
        this.$store.commit("setFavorites", newFavList);
      }
    },

    showModalOn(item) {
      this.$store.commit("setShowModal", {
        idRecipe: item.idMeal,
        window: true,
        strInstructions: item.strInstructions,
      });
    },
  },
  components: { RecipeWindow },
};
</script>
<style>
recipe-enter {
}
</style>
