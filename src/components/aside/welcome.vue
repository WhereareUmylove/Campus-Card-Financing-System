<template>
  <div class="welcome">
    <p>欢迎登陆校园卡理财系统</p>
    <p class="time">{{showTime}}</p>
    <!-- <canvas width="360" height="180" ref="canvas"></canvas> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      ctx: null,
      textWidth: 360,
      textHeight: 180,
      pixelsArr: [],
      showTime: null
    };
  },
  beforeCreate() {},
  created() {
    this.showFun();
  },
  mounted() {
    // this.show();
  },
  methods: {
    showFun() {
      this.showTime = new Date().toLocaleString();
      requestAnimationFrame(this.showFun);
    },
    show() {
      this.canvas = this.$refs.canvas; //指定canvas
      this.ctx = this.canvas.getContext("2d");
      this.time();
    },
    getPixels() {
      let imgData = this.ctx.getImageData(
        (this.canvas.width - this.textWidth) / 2,
        (this.canvas.height - this.textHeight) / 2,
        this.textWidth,
        this.textHeight
      );
      let data = imgData.data;

      for (let i = 1; i <= this.textHeight; i++) {
        for (let j = 1; j <= this.textWidth; j++) {
          let pos = [(i - 1) * this.textWidth + (j - 1)] * 4; //取得像素位置
          if (data[pos] >= 0) {
            var pixel = {
              x: j + Math.random() * 20, //重新设置每个像素的位置信息
              y: i + Math.random() * 20, //重新设置每个像素的位置信息
              fillStyle:
                "rgba(" +
                data[pos] +
                "," +
                data[pos + 1] +
                "," +
                data[pos + 2] +
                "," +
                data[pos + 3] +
                ")"
            };
            this.pixelsArr.push(pixel);
          }
        }
      }
    },
    drawPixels() {
      // 清除画布内容，进行重绘
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (let i in this.pixelsArr) {
        this.ctx.fillStyle = this.pixelsArr[i].fillStyle;
        let r = Math.random() * 1;
        this.ctx.fillRect(this.pixelsArr[i].x, this.pixelsArr[i].y, r, r);
      }
    },
    time() {
      var timeText = new Date().toLocaleTimeString();
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.font = "100px 黑体";
      this.ctx.textBaseline = "top";

      this.ctx.fillStyle = "rgba(255,0,0,0.8)";
      this.ctx.fillText(
        timeText,
        (this.canvas.width - this.textWidth) / 2,
        (this.canvas.height - this.textHeight) / 2,
        this.textWidth,
        this.textHeight
      );

      this.getPixels(); //获取粒子
      this.drawPixels(); // 重绘粒子
      requestAnimationFrame(this.time);
    }
  }
};
</script>


<style lang="less" scoped>
p {
  font-size: 3vw;
  color: white;
}
.time {
  margin-top: 50vh;
}
@media screen and (max-width: 768px) {
  p {
    font-size: 6vw;
    text-align: center;
  }
}
@media screen and (min-width: 768px) {
  p {
    margin: 5vw 0 0 15vw;
  }
}
</style>
