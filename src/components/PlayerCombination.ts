import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class PlayerCombination extends Vue {
  @Prop(Number) readonly msg: string | undefined

  captainCount: any = 0
  captainList: any = []
  diffenderList: any = []
  allRounderList: any = []
  combinations: any = []

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
    console.log(this.captainList);
    console.log(this.allRounderList);
    console.log(this.diffenderList);
    this.getFinalCombinations();
  }

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
  }

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
  }

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
  }

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
  }

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
  }
}
