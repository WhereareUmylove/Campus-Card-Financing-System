<template>
  <div class="header">
    <div class="logo">
      <img src="../image/校徽.jpg" alt="校园卡理财系统">
    </div>
    <div class="title">
      <p class="big">
        <router-link to="/欢迎">
          <strong>校园卡理财系统</strong>
        </router-link>
      </p>
      <p class="small">Campus Card Financial Management System</p>
    </div>
    <div class="isLogin">
      <div class="loginSuc" v-if="isLogin">
        <span>{{ userNam }}</span>
        <a href="jsvascript:void(0)" @click="unlogin">退出登录</a>
      </div>
      <div class="loginFai" v-if="!isLogin">
        <a href="jsvascript:void(0)" @click="loginBox=true">登录</a>
      </div>
    </div>
    <div class="loginBox" v-if="loginBox">
      <div class="lightLoginBox"></div>
      <div class="lightContent">
        <div>
          <label for="nam">学号：</label>
          <input @keyup="namERR=false" id="nam" type="text" v-model="nam">
          <p v-if="namERR">学号不存在</p>
        </div>
        <div>
          <label for="pwd">密码：</label>
          <input @keyup="pwdERR=false" id="pwd" type="password" v-model="pwd">
          <p v-if="pwdERR">密码错误</p>
        </div>
        <div class="button-login">
          <a href="jsvascript:void(0)" @click="login">确定</a>
          <a href="jsvascript:void(0)" @click="loginBox=false">取消</a>
        </div>
      </div>
    </div>
    <div class="isAlert" v-if="isAlert">
      <div class="lightAlert"></div>
      <div class="lightContent">
        <p>登录后才可以查看，是否登录？</p>
        <div>
          <a href="jsvascript:void(0)" @click="xxx">是</a>
          <a href="jsvascript:void(0)" @click="isAlert=false">否</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui";
export default {
  data() {
    return {
      namERR: false,
      pwdERR: false,
      isAlert: false,
      nam: null,
      pwd: null,
      loginBox: false,
      isLogin: false,
      userNam: null
    };
  },
  methods: {
    updataLogin() {
      if (localStorage.getItem("login")) {
        this.isLogin = true;
        this.userNam = localStorage.getItem("login");
        this.getInformation();
      } else {
        this.isLogin = false;
        this.userNam = null;
      }
    },
    login() {
      this.$http
        .post(
          "student",
          { name: this.nam, password: this.pwd },
          { emulateJSON: true }
        )
        .then(result => {
          if (result.body.code == 200) {
            localStorage.setItem("login", this.nam);
            Message({
              message: "登录成功",
              type: "success",
              duration: 1000
            });
            this.nam = null;
            this.pwd = null;
            this.loginBox = false;
            this.namERR = false;
            this.pwdERR = false;
          } else if (result.body.code == "passwordERR") {
            this.namERR = false;
            this.pwdERR = true;
          } else if (result.body.code == "nameERR") {
            this.namERR = true;
            this.pwdERR = false;
          }
        });
    },
    unlogin() {
      this.$router.push("./欢迎");
      this.userNam = null;
      localStorage.removeItem("login");
      this.updataLogin();
    },
    xxx() {
      this.isAlert = false;
      this.loginBox = true;
    },
    getInformation() {
      this.$http
        .get("information", {
          params: { number: localStorage.getItem("login") }
        })
        .then(res => {
          this.$store.commit("upData", res.body.code);
        });
    }
  },
  watch: {
    "$route.path": function(newVal, oldVal) {
      if (newVal) {
        this.isShrink = false;
        if (!localStorage.getItem("login")) {
          this.$router.push("./欢迎");
          this.isAlert = true;
        }
      }
    }
  },
  created() {
    this.updataLogin();
  },
  beforeUpdate() {
    this.updataLogin();
  }
};
</script>

<style lang="less" scoped>
.lightContent {
  z-index: 3;
}
.lightAlert {
  z-index: 2;
  width: 100vw !important;
  height: 100vh !important;
  position: relative;
  top: -20vh;
  left: -38vw;
  background: rgba(255, 255, 255, 0.5);
}
.isAlert {
  left: 38vw;
  top: 20vh;
  position: fixed;
  background: white;
  width: 20vw;
  min-width: 260px;
  height: 20vh;
  border-radius: 4px;
  p {
    text-align: center;
    line-height: 12vh;
    height: 50%;
  }
  .lightContent > div {
    height: 50%;
    text-align: center;
    line-height: 5vh;
    a {
      margin: 0 3vw;
      color: black;
    }
  }
}
.lightLoginBox {
  z-index: 2;
  width: 100vw !important;
  height: 100vh !important;
  position: relative;
  top: -26vh;
  left: calc(-29vw - 3vh);
  background: rgba(255, 255, 255, 0.5);
  // float: left;
}
.lightContent {
  z-index: 3;
  position: relative;
  top: -100vh;
}
.loginBox {
  padding: 3vh;
  padding-top: 6vh;
  position: fixed;
  width: 25vw;
  height: 28vh;
  left: 29vw;
  top: 20vh;
  background: rgba(255, 255, 255, 1);
  p {
    padding-left: 50px;
    color: red;
  }
  .lightContent > div {
    height: calc(28vh / 3 - 2vh);
    input {
      padding: 3px;
      width: 70%;
    }
  }
  .button-login {
    text-align: center;
    a {
      color: black;
      margin: 1vw;
    }
  }
}
.header {
  position: relative;
  // background: linear-gradient(to right, rgb(0, 110, 255), rgb(30, 255, 0));
  height: 15vh;
  .logo {
    height: 15vh;
    width: 15vh;
    float: left;
    border-radius: 50%;
    overflow: hidden;
    img {
      height: 15vh;
      width: 15vh;
    }
  }
  .title {
    a {
      color: black;
      text-decoration: none;
    }
    margin-left: 30px;
    margin-top: 12px;
    float: left;
    .big {
    }
    .small {
      margin-left: 30px;
    }
  }
  .isLogin {
    float: right;
    font-size: 2.5vh;
    position: absolute;
    right: 2vw;
    bottom: 2vw;
    a {
      color: white;
    }
  }
}

@media screen and(max-width: 767px) {
  .header {
    .title {
      .big {
        font-size: 5vw;
      }
      .small {
        display: none;
      }
    }
  }
  .loginBox {
    font-size: 12px;
    padding: 3vh;
    width: 80vw;
    height: 25vh;
    left: 10vw;
    top: 20vh;
    background: rgba(255, 255, 255, 1);

    > div {
      height: 30%;
      input {
        width: 70%;
      }
    }
    .button-login {
      a {
        color: black;
        margin: 0 10vw;
      }
    }
  }
  .isAlert {
    left: 19vw;
  }
  .lightAlert {
    top: -20vh;
    left: -19vw;
  }
  .lightLoginBox {
    top: -23vh;
    left: calc(-10vw - 3vh);
  }
  .lightContent > div {
    padding: 3vw;
  }
}
@media screen and (min-width: 767px) and (max-width: 1200px) {
  .header {
    .title {
      .big {
        font-size: 2.5vw;
      }
      .small {
        font-size: 1.5vw;
      }
    }
  }
  .lightAlert {
    top: -20vh;
    left: -26vw;
  }
  .loginBox {
    width: 50vw;
    height: 28vh;
    left: 26vw;
  }
  .isAlert {
    width: 50vw;
    left: 26vw;
  }
  .lightLoginBox {
    left: calc(-26vw - 3vh);
  }
  .button-login {
    a {
      color: black;
      margin: 0 5vw;
    }
  }
}

/*w>1200*/
@media screen and (min-width: 1200px) {
  .header {
    .title {
      .big {
        font-size: 2vw;
      }
      .small {
        font-size: 1.5vw;
      }
    }
  }
  .isLogin {
    padding: 10vh 10px 0px 0px;
  }
}
</style>