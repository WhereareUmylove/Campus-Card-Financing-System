<template>
  <div class="common-use">
    <div>
      <span>卡号:</span>
      <span>{{this.$store.state.inf.number}}</span>
    </div>
    <div>
      <span>状态:</span>
      <span v-if="this.$store.state.inf.state">挂失中</span>
      <span v-if="!this.$store.state.inf.state">可消费</span>
    </div>

    <div class="button">
      <button @click="changeStatus(1)">挂失</button>
      <button @click="changeStatus(0)">取消挂失</button>
    </div>
  </div>
</template>
<script>
import { Message } from "element-ui";
export default {
  methods: {
    changeStatus(state) {
      this.$http.post(
        "state",
        { name: localStorage.getItem("login"), state: state },
        { emulateJSON: true }
      );
      if (state) {
        Message({
          message: "挂失成功",
          type: "success",
          duration: 1000
        });
      } else {
        Message({
          message: "取消挂失成功",
          type: "success",
          duration: 1000
        });
      }
       this.getInformation()
    },
    getInformation() {
      this.$http
        .get("information", {
          params: { number: localStorage.getItem("login") }
        })
        .then(res => {
          this.$store.commit("upData",res.body.code)
        });
    }
  },
  mounted() {
    this.getInformation()
  }
};
</script>

<style lang="less">
.button {
  border: none !important;
  display: flex;
  padding: 2vh 20vw 0 20vw;
  button {
    margin: auto;
    padding: 1vh 1vh 1vh 1vh;
    a {
      font-size: 16px;
    }
  }
}

@media screen and (max-width: 768px) {
  .button {
    padding: 2vh 2vw 0 2vw;
  }
}

@media screen and (min-width: 768px) {
}
</style>

