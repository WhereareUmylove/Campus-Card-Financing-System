<template>
  <div class="button bbb">
    <label for="pwd">请输入新密码：</label>
    <input id="pwd" type="text" v-model="password">
    <button @click="changePwd">确定</button>
  </div>
</template>
<script>
import { Message } from "element-ui";
export default {
  data() {
    return {
      password: null
    };
  },
  methods: {
    changePwd() {
      if (this.password) {
        this.$http.post(
          "password",
          { name: localStorage.getItem("login"), password: this.password },
          { emulateJSON: true }
        );
        this.password = null;
        Message({
          message: "密码修改成功",
          type: "success",
          duration: 1000
        });
      }else{
          Message({
          message: "请输入需要修改的密码",
          type: "warning",
          duration: 1000
        });
      }
    }
  }
};
</script>

<style lang="less">
.bbb {
  button {
    padding: 0;
    padding: 0 1vw 0 1vw;
  }
}
</style>

