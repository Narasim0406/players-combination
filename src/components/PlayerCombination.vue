<template>
  <div class="hello">
    <h1>Players {{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <span>{{ captainCount }}</span
    >sdf
    <div v-for="(item, index) in captainList" :key="index">
      <p>{{ item.a }} : {{ item.b }}</p>
      <p></p>
    </div>
  </div>
</template>

<script src="./PlayerCombination.ts"></script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
