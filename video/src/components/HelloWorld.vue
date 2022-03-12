<template>
  <div class="containerr" >
     <!-- <video ref="liveRef" id="live" autoplay  webkit-playsinline="true" playsinline="true" x5-video-player-type="h5" x5-video-orienration="landscape"  /> -->
     <!-- <video ref="liveRef" id="live" autoplay  x5-video-player-type="h5" x5-video-player-fullscreen="true" x5-video-orientation="portraint" /> -->
          <!-- <video ref="liveRef" id="live"  autoplay x5-video-player-type="h5-page" webkit-playsinline="true" playsinline="true"  /> -->

              <video ref="liveRef" id="live"  autoplay x5-video-player-type="h5" x5-video-orientation="landscape" webkit-playsinline="true" playsinline="true"  />
                                          <!--  -->
          <!-- <canvas id="myCanvas" class="canvas"  ></canvas> -->
    <div class="bigs" @click="big">全屏1</div>
  </div>
</template>

<script>

export default {


  data() {
    return {

    };
  },
  mounted() {
     navigator.mediaDevices.getUserMedia({
          video: true
        })
        .then(res=> {
          let stream = res
          if (stream.id && document.getElementById("live")) {
        document.getElementById("live").srcObject = stream;
        document.getElementById("live").play()
        // this.switchToCanvas()
      }
        })
        .catch((err) => {
          return err;
        });
  },
  methods: {
    big() {
      this.$parent.big = !this.$parent.big

    },
    switchToCanvas() {
      var video = document.getElementById("live");
      var canvas = document.getElementById("myCanvas");
      canvas.width = window.innerWidth * 2;  //获取屏幕宽度作为canvas的宽度  这个设置的越大，画面越清晰（相当于绘制的图像大，然后被css缩小）
      canvas.height = window.innerHeight * 2;
      var context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      window.requestAnimationFrame(this.switchToCanvas);
    },
  },
};
</script>

<style lang="less" scoped>
.containerr {
  position: relative;
  overflow: hidden;
  height: 100%;
  background-color: #000;
}
video {
  width: 100%;
  height: 100%;
}
.bigs {
  position: absolute;
  bottom: 25px;
  right: 30px;
  z-index: 99999999;
  color: red;

}
canvas {
  width: 100%;
  height: 100%;
}
.canvas {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
}
</style>