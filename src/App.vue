<template>
  <div class="app">
    <com-header></com-header>
    <com-content></com-content>
    <!-- <canvas ref="canvas" width="1920" height="1030" @mousemove="doMove">当前浏览器不支持canvas</canvas> -->
  </div>
</template>

<script>
import comHeader from "./components/header.vue";
import comContent from "./components/content.vue";

export default {
  data() {
    return {
      canvas: null,
      ctx: null,
      //对象个数(已经出现在画布的图形个数)
      count: 0,
      //图形对象数组。
      FigureObject: []
    };
  },
  created() {},
  methods: {
    show() {
      this.canvas = this.$refs.canvas;
      this.ctx = this.canvas.getContext("2d");
    },

    //截取minNum到maxNum之间的随机数。
    RandomNum(minNum, maxNum) {
      return Math.random() * (maxNum - minNum) + minNum;
    },
    doMove(event) {
      //鼠标移动时做什么。
      let e = event || window.event;
      var Mx = e.clientX;
      var My = e.clientY;
      //for(var i=0;i<5;i++){
      this.CreateFigureObject(Mx, My);
      //}
    },

    CreateFigureObject(Mx, My) {
      //图形大小
      let FigureSize = this.RandomNum(1, 15);
      //图形的颜色
      let Rgb =
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255);

      let Life = 100;
      let son = this.count;
      let vx = Math.random() * 2 - 1;
      let vy = Math.random() * 2 - 1;
      let x = Mx;
      let y = My;
      let that = this;
      this.FigureObject.push(
        this.Figure(x, y, vx, vy, FigureSize, Rgb, Life, son, that)
      );
    },

    Figure(x, y, vx, vy, FigureSize, Rgb, Life, son, that, opacity = 1) {
      return {
        that: that,
        color: Rgb,
        size: FigureSize,
        x: x,
        y: y,
        vx: vx, //偏移
        vy: vy, //偏移
        life: Life,
        son: son,
        opacity: opacity,
        s: 3,
        r: this.RandomNum(1, 5),
        //FigureObject对象的构造函数。
        DrawFigure: function() {
          that.ctx.beginPath();
          that.ctx.fillStyle = "rgba(" + this.color + "," + this.opacity + ")";
          that.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
          that.ctx.fill();
        },
        updateFigure: function() {
          if (this.x + this.vx >= innerWidth || this.x + this.vx <= 0) {
            this.vx = -this.vx;
          }
          if (this.y + this.vy >= innerHeight || this.y + this.vy <= 0) {
            this.vy = -this.vy;
          }
          this.x += this.vx * 3;
          this.y += this.vy * 3;

          this.opacity = 1 - (that.count - this.son) / this.life;
          if (that.count > this.life + this.son) {
            for (var i = 0; i < that.FigureObject.length; i++) {
              if (
                this.son == that.FigureObject[i].son &&
                this.life == that.FigureObject[i].life
              ) {
                that.FigureObject.splice(i, 1);
                break;
              }
            }
          } else {
            this.DrawFigure();
          }
        }
      };
    },

    upData() {
      requestAnimationFrame(this.upData);
      this.count++;
      this.ctx.clearRect(0, 0, 1920, 1030);
      for (var i = 0; i < this.FigureObject.length; i++) {
        this.FigureObject[i].updateFigure();
      }
    }
  },
  mounted() {
    // this.show();
    // this.upData();
  },
  components: {
    comHeader,
    comContent
  }
};
</script>
<!--加上scoped的样式表示当前样式只针对于当前组件有效，当前组件的子组件仍然无效-->
<style lang="less" scoped>
.app {
  background-image: url("./image/bg3.jpg");
  background-size: cover;
}
.app {
  height: 100%;
}
canvas{
  position: fixed;
}
</style>