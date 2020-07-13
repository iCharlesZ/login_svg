<template>
  <div id="app">
    <Login />
  </div>
</template>

<script>
import Login from "./components/Login.vue";

export default {
  name: "App",
  components: {
    Login
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  width: 100%;
  height: 100%;
}

body {
  background-color: #eff3f4;
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
