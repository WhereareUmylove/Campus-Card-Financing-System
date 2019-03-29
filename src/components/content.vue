<template>
  <div class="content">
    <div class="aside">
      <div class="box">
        <p @click="p1=!p1">信息查询</p>
        <transition name="fade" enter-active-class="animated rubberBand">
          <div v-if="p1">
            <div>
              <router-link to="/余额查询">
                <div class="list">余额查询</div>
              </router-link>
            </div>
            <div>
              <router-link to="/个人信息查询">
                <div class="list">个人信息查询</div>
              </router-link>
            </div>
            <div>
              <router-link to="/消费记录查询">
                <div class="list">消费记录查询</div>
              </router-link>
            </div>
          </div>
        </transition>
      </div>
      <div class="box">
        <p @click="p2=!p2">个人管理</p>
        <transition name="fade" enter-active-class="animated rubberBand">
          <div v-if="p2">
            <div>
              <router-link to="/挂失/取消挂失">
                <div class="list">挂失/取消挂失</div>
              </router-link>
            </div>
            <div>
              <router-link to="/修改密码">
                <div class="list">修改密码</div>
              </router-link>
            </div>
          </div>
        </transition>
      </div>
      <div class="box">
        <p @click="p3=!p3">我要充值</p>
        <transition name="fade" enter-active-class="animated rubberBand">
          <div v-if="p3">
            <div>
              <router-link to="/余额充值">
                <div class="list">余额充值</div>
              </router-link>
            </div>
          </div>
        </transition>
      </div>
      <div class="box">
        <p @click="p4=!p4">联系我们</p>
        <transition name="fade" enter-active-class="animated rubberBand">
          <div v-if="p4">
            <div>
              <router-link to="/我有建议">
                <div class="list">我有建议</div>
              </router-link>
            </div>
            <div>
              <router-link to="/故障提交">
                <div class="list">故障提交</div>
              </router-link>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="shrink" @click="shrink">
      <i class="iconfont icon-changjingguanli"></i>
    </div>
    <div ref="open" v-if="isShrink" class="open" @click="isShrink=!isShrink">
      <p>信息查询</p>
      <div>
        <router-link to="/余额查询">
          <div class="list">余额查询</div>
        </router-link>
      </div>
      <div>
        <router-link to="/个人信息查询">
          <div class="list">个人信息查询</div>
        </router-link>
      </div>
      <div>
        <router-link to="/消费记录查询">
          <div class="list">消费记录查询</div>
        </router-link>
      </div>
      <p>个人管理</p>
      <div>
        <router-link to="/挂失/取消挂失">
          <div class="list">挂失/取消挂失</div>
        </router-link>
      </div>
      <div>
        <router-link to="/修改密码">
          <div class="list">修改密码</div>
        </router-link>
      </div>
      <p>我要充值</p>
      <div>
        <router-link to="/余额充值">
          <div class="list">余额充值</div>
        </router-link>
      </div>
      <p>联系我们</p>
      <div>
        <router-link to="/我有建议">
          <div class="list">我有建议</div>
        </router-link>
      </div>
      <div>
        <router-link to="/故障提交">
          <div class="list">故障提交</div>
        </router-link>
      </div>
    </div>

    <div class="contents">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      p1: true,
      p2: true,
      p3: true,
      p4: true,
      isShrink: false
    };
  },
  methods: {
    shrink() {
      this.isShrink = !this.isShrink;
    }
  },
  watch: {}
};
</script>

<style lang="less" scoped>
.content {
  height: 85vh;

  a {
    text-decoration: none;
    color: black;
  }
  width: 100vw;
  .aside {
    float: left;
    width: 15vw;
    height: 100%;
    border-radius: 2%;
    .box {
      margin: 2px;
      p {
        cursor: pointer;
        background: rgb(96, 197, 255);
        box-shadow: 1px 1px 5px black;
        border-radius: 5%;
        padding: 2px 0px 2px 10px;
      }
    }
  }
  .shrink {
    width: 7vh;
    height: 7vh;
    display: none;
    i {
      font-size: 12vw;
    }
  }
  .open {
    width: 100vw;
    display: none;
    float: left;
    position: fixed;
    p {
      margin-bottom: 1vw;
      background: linear-gradient(
        to right,
        rgb(0, 132, 255),
        rgb(141, 162, 255),
        rgb(255, 255, 255)
      );
      padding: 1vh;
    }
    > div {
      padding: 1vh;
      background: linear-gradient(
        to right,
        rgb(255, 255, 255),
        rgb(141, 162, 255),
        rgb(0, 132, 255)
      );
    }
  }
  .contents {
    float: right;
    width: 85vw;
    border-radius: 2%;
  }
}

.box > div > div {
  padding: 7px 0px 7px 10px;
}
.list {
    font-size: 16px;
  } 

@media screen and (max-width: 768px) {
  .content {
    height: 88vh;
    .aside {
      display: none;
    }
    .shrink {
      display: block;
      
    }
    .open {
      display: block;
      p{
        margin: 0;
      }
      > div {
        font-size: 16px;
      }
    }
    .contents {
      width: 100vw;
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1200px) {
 .content .shrink i{
   font-size: 10vw;
 }
}

/*w>1200*/
@media screen and (min-width: 1200px) {
  
}
</style>

