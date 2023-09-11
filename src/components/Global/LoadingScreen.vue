<template>
  <div :class="{ loader: true, fadeout: !isLoading }" v-if="!isloaded">
    <lottie-player
      src="https://lottie.host/6e4e5fb5-2583-422e-8666-f545963b8332/xBD0xRpsqp.json"
      background="#38c172"
      speed="1"
      style="width: 100%; height: 100vh"
      loop
      autoplay
      mode="normal"
    ></lottie-player>
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: ["isLoading"],
  data: () => {
    return {
      isloaded: false,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isloaded = true;
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.loader {
  background-color: #333;
  bottom: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  padding-top: 10vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 54441;
}

.fadeout {
  animation: fadeout 3s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
