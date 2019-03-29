<template>
  <div class="button bbb">
    <label for="pwd">输入充值金额：</label>
    <input id="pwd" type="text" v-model="amount">
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_xclick">
      <input type="hidden" name="business" value="306892120@qq.com">
      <input type="hidden" name="lc" value="US">
      <input type="hidden" name="item_name" v-model="acount" value="recharge">
      <input type="hidden" name="item_number" value="recharge">
      <input type="hidden" name="amount" v-model="amount">
      <input type="hidden" name="currency_code" value="CNY">
      <input type="hidden" name="button_subtype" value="services">
      <input type="hidden" name="no_note" value="0">
      <input type="hidden" name="tax_rate" value="0.000">
      <input type="hidden" name="shipping" value="0.00">
      <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_LG.gif:NonHostedGuest">
      <input type="submit" value="确定" border="0" name="submit">
      <img
        alt
        border="0"
        src="https://www.paypalobjects.com/zh_XC/i/scr/pixel.gif"
        width="1"
        height="1"
      >
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: null,
      acount: null
    };
  },
  methods: {},
  created() {
    this.acount = localStorage.getItem("login");
  }
};
</script>
<style lang="less" scoped>
input {
  margin-right: 10px;
}
</style>


