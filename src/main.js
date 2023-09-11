import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./scss/Main.scss";

//Emitter
import mitt from "mitt";

const Emitter = mitt();

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

//Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .provide("Emitter", Emitter)
  .mount("#app");
