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

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      captainCount: 0,
      captainList: [],
      diffenderList: [],
      allRounderList: [],
      combinations: []
    };
  },
  mounted() {
    console.log("---->");
    // this.captainCombination();
    // this.allRounderCombination();
    // this.diffenderCombination();
    this.captainList = this.getCombinations(["1", "2", "3", "4"]);
    this.allRounderList = this.getCombinations(["5", "6", "7"]);
    this.diffenderList = this.getCombinations([
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
    ]);
    console.log(this.captainList);
    console.log(this.allRounderList);
    console.log(this.diffenderList);
    // let final  = this.getCombinations(this.captainList, this.allRounderList, this.diffenderList)
    // console.log(final);
    this.getFinalCombinations();
  },
  methods: {

    captainCombination() {
      let captain = [1, 2, 3, 4];
      var result = [];
      for (let i = 1; i <= captain.length; i++) {
        for (let j = 1; j <= captain.length; j++) {
          if (i != j) {
            let objA = { a: i, b: j };
            result.push(objA);
          }
        }
      }
      console.log(result, "captain");
      this.captainList = result;
      this.captainCount = result.length;
    },

    allRounderCombination() {
      let allRounder = [1, 2, 3];
      let result = [];

      for (let i = 1; i <= allRounder.length; i++) {
        for (let j = 1; j <= allRounder.length; j++) {
          if (i != j) {
            let objA = { a: i, b: j };
            result.push(objA);
          }
        }
      }
      console.log(result, "All Rounder");
      this.allRounderList = result;
    },

    diffenderCombination() {
      let diffender = [1, 2, 3, 4, 5, 6];
      let result = [];

      for (let i = 1; i <= diffender.length; i++) {
        for (let j = 1; j <= diffender.length; j++) {
          if (i != j) {
            let objA = { a: i, b: j };
            result.push(objA);
          }
        }
      }
      console.log(result, "Diffender");
      this.diffenderList = result;
    },

    getCombinations(arr = []) {
      const combine = (sub, ind) => {
        let result = [];
        let i, l, p;
        for (i = ind, l = arr.length; i < l; i++) {
          p = sub.slice(0);
          p.push(arr[i]);
          result = result.concat(combine(p, i + 1));
          result.push(p);
        }
        return result;
      };
      return combine([], 0);
    },

    getFinalCombinations() {
      let finallist = [];
      let combination = []
      for (let i of this.captainList) {
        for (let j of this.allRounderList) {
          let arr = i.concat(j);
          finallist.push(arr)
        }
      }
      console.log(finallist, "========> one --------->")
      for (let i of finallist) {
        for (let j of this.diffenderList) {
          let arr = i.concat(j);
          combination.push(arr)
        }
      }
      console.log(combination, "========> two --------->")
      for(let data of combination){
        if(data.length==7){
          this.combinations.push(data)
        }
      }
      console.log(this.combinations, "========> final --------->")
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
