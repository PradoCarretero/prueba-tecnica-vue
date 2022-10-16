<template>
  <div id="app">
    <HeaderMenu />
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import HeaderMenu from "./components/HeaderMenu.vue";

export default {
  name: "App",
  components: { HeaderMenu },
};
</script>
<style>
#app {
}
</style>
