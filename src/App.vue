<template>
  <app-layout>
    <router-view />
    <QuicView />
    <v-snackbar location="right bottom" v-model="bar">
      {{ itemTitle }} Has Been Adden To Your Cart
      <template v-slot:actions>
        <v-icon @click="bar = false">mdi-close</v-icon>
      </template>
    </v-snackbar>
  </app-layout>
</template>

<script>
import QuicView from "@/components/Global/QuickView.vue";
import AppLayout from "@/components/Global/AppLayout.vue";
export default {
  inject: ["Emitter"],

  data() {
    return { bar: false, itemTitle: "" };
  },
  mounted() {
    this.Emitter.on("ShowMsg", (data) => {
      this.itemTitle = data;
      this.bar = true;
    });
  },
  components: {
    AppLayout,
    QuicView,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  overflow-x: hidden !important;
}
.img-parent:hover .quick-view {
  opacity: 1;
}

.quick-view {
  opacity: 0;
}
</style>
