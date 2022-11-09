<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HomePage msg="Welcome to Your Vue.js App"/>
    <!-- <PlayerCombination msg="player"></PlayerCombination> -->
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
// import PlayerCombination from './components/PlayerCombination.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    // PlayerCombination
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
