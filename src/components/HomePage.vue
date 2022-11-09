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
  name: "HomePage",
  props: {
    msg: String,
  },
  data() {
    return {
      captainCount: 0,
      point: 100,
      captainList: [],
      diffenderList: [],
      allRounderList: [],
      combinations: [],
      players: [
        { name: "G Ernak", value: 16, role: "dif" },
        { name: "Sumit", value: 14, role: "dif" },
        { name: "V Garji", value: 14, role: "dif" },
        { name: "S Shinde", value: 13.5, role: "dif" },
        { name: "N Kumar", value: 13.5, role: "dif" },
        { name: "S Kumar", value: 13, role: "dif" },
        { name: "A Singh", value: 15, role: "ar" },
        { name: "D Hooda", value: 14, role: "ar" },
        { name: "Balaji-D", value: 12.5, role: "ar" },
        { name: "R Tomar", value: 11, role: "ar" },
        { name: "M Singh", value: 16, role: "raid" },
        { name: "S Gill", value: 15, role: "raid" },
        { name: "P Narwal", value: 15, role: "raid" },
        { name: "S Jadhav", value: 14, role: "raid" },
      ],
      playerName: [
        "G Ernak",
        "Sumit",
        "V Garji",
        "S Shinde",
        "N Kumar",
        "S Kumar",
        "A Singh",
        "D Hooda",
        "Balaji-D",
        "R Tomar",
        "M Singh",
        "S Gill",
        "P Narwal",
        "S Jadhav",
      ],
    };
  },
  mounted() {
    console.log("---->");
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
    let play = this.playerName;
    // console.log(this.captainList, "captain");
    // console.log(this.allRounderList, "All Rounder");
    // console.log(this.diffenderList, "Diffender");
    let playList = this.getCombinations(play);
    let list = this.filterLength(playList, 7);
    let detailList = this.matchPlayers(this.players, list);
    let finalTeam = this.finalTeamListPoints(detailList, this.point);
    console.log("==> play 14", finalTeam);
  },
  methods: {
    finalTeamListPoints(combinationList, point) {
      let list = [];
      for (let data of combinationList) {
        let totalValue = data
          .map((item) => item.value)
          .reduce((prev, next) => prev + next);
        
        // console.log(data, totalValue, "==> points", point);

        const arr = [];
        const count = {};

        for (let value of data) {
          arr.push(value.role);
        }

        arr.forEach((element) => {
          count[element] = (count[element] || 0) + 1;
        });

        console.log("count", count, 2<=count.dif&&count.dif<=4 &&1<=count.ar&&count.ar<=2&&1<=count.raid&&count.raid<=3  );

        if (totalValue <= point && (2<=count.dif&&count.dif<=4 &&1<=count.ar&&count.ar<=2&&1<=count.raid&&count.raid<=3)) {
          list.push(data);
        }
      }
      return list;
    },

    filterLength(datalist, length) {
      let list = [];
      for (let data of datalist) {
        if (data.length == length) {
          list.push(data);
        }
      }
      return list;
    },

    matchPlayers(playerList, combination) {
      let list = [];
      for (let obj of combination) {
        let data = this.teamMatch(playerList, obj);
        list.push(data);
      }
      return list;
    },

    teamMatch(playerList, teamList) {
      let team = [];
      for (let data of teamList) {
        for (let player of playerList) {
          if (data == player.name) {
            team.push(player);
          }
        }
      }
      return team;
    },

    captainCombination() {
      let captain = [1, 2, 3, 4, 5, 6, 7];
      var result = [];
      for (let i = 1; i <= captain.length; i++) {
        for (let j = 1; j <= captain.length; j++) {
          if (i != j) {
            let objA = { a: i, b: j };
            result.push(objA);
          }
        }
      }
      console.log(result, "captain combo");
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
      let combination = [];
      for (let i of this.captainList) {
        for (let j of this.allRounderList) {
          let arr = i.concat(j);
          finallist.push(arr);
        }
      }
      for (let i of finallist) {
        for (let j of this.diffenderList) {
          let arr = i.concat(j);
          combination.push(arr);
        }
      }
      for (let data of combination) {
        if (data.length == 7) {
          this.combinations.push(data);
        }
      }
      console.log(this.combinations, "========> final --------->");
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
