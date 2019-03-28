<template>
  <div class="common-use">
    <div>
      <span>持卡人:</span>
      <span>{{this.$store.state.inf.name}}</span>
    </div>
    <div>
      <span>卡片余额:</span>
      <span>￥{{this.$store.state.balance}}</span>
    </div>
    <div class="button">
      <button>
        <router-link to="/余额充值">余额充值</router-link>
      </button>
      <button>
        <router-link to="/挂失补办">挂失补办</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("updataConsumption");
  }
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  color: black;
}
</style>


