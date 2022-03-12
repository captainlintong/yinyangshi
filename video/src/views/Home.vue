<template>
  <div class="home">
    <div class="top" :class="big ? 'full-screen_top' : ''">
      <div class="hello">你好</div>
    <HelloWorld />
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      big: false
    }
  },
  created() {
  },
  methods: {

  },
};
</script>
<style lang="less" scoped>
.top {
  height: 422px;
  width: 100%;
  position: relative;
}
.hello {
  width: 98px;
  height: 44px;
  line-height: 44px;
  border-radius: 0.05rem;
  position: absolute;
  left: 30px;
  top: 20px;
  font-size: 24px;
  z-index: 100;
  color: red;
}
.full-screen_top {
  width: 100vh;
  height: 100vw;
  transform: rotate(90deg);
  transform-origin: 0% 100%;
  position: relative;
  top: -100vw;
  left: 0;
}
</style>
