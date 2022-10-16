import Vue from "vue";

Vue.filter("singleLetter", (value) => {
  return value || value === 0 ? value.toString().toLowerCase() : "";
});
