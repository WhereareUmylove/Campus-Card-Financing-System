<template>
  <ul class="common-use">
    <li v-for="(item,i) in this.$store.state.record" :key="i">
      <div>
        <span>消费时间:</span>
        <span>{{item.time}}</span>
      </div>
      <div>
        <span>消费地点:</span>
        <span>{{item.place}}</span>
      </div>
      <div>
        <span>消费金额:</span>
        <span>￥{{item.money}}</span>
      </div>
      <div>
        <span>余额:</span>
        <span>￥{{item.balance}}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      record: [],
      currentBal:this.$store.state.balance
    }
  },
  methods: {
    // upDataConsumption() {
    //   this.$http
    //     .get("consumption", {
    //       params: { number: localStorage.getItem("login") }
    //     })
    //     .then(res => {
    //       for (let i = 0; i < res.body.code.length; i++) {
    //         this.record.push(res.body.code[i]);
    //       }
    //       this.$store.commit("showBalance",res.body.code[0].balance);
    //     });
    // }
  },
  created() {
    // this.upDataConsumption();
    this.$store.dispatch("updataConsumption");
  }
};
</script>



<style lang="less">
li{
  list-style: none;
  margin-bottom: 3vw;
}
.common-use {
  margin: 2vh 0 0 2vh;
  div {
    width: 70vw;
    display: flex;
    span {
      padding: 1vh;
      display: inline-block;
      width: 50%;
      border: 1px solid black;
      text-align: center;
    }
  }
}

@media screen and (max-width: 768px) {
  .common-use {
    div {
      width: 90vw;
      span:first-child {
        width: 30%;
      }
      span:nth-of-type(2) {
        width: 70%;
      }
    }
  }
}
</style>

