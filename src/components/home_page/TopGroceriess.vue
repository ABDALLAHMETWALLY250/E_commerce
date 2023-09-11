<template>
  <div class="flash-deals pt-16 px-5">
    <div
      class="title mb-5"
      style="display: flex; align-items: center; justify-content: space-between"
    >
      <h2 style="font-weight: 900; font-size: 30px" class="text-black">
        Top Groceriess
      </h2>
      <a class="text-black"> Shop All </a>
    </div>
    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :breakpoints="{
        '640': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }"
      :space-between="35"
      class="pb-3"
      :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swipre-next' }"
    >
      <swiper-slide v-for="p in Products.groceriess" :key="p.id">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              color="deep-purple"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>

          <div
            class="w-100 img-parent position-relative"
            style="overflow: hidden"
          >
            <v-img
              cover
              height="250"
              :src="showenItem[p.title] ? showenItem[p.title] : p.thumbnail"
              class="img"
              :alt="p.title"
            ></v-img>

            <v-btn
              density="compact"
              height="35"
              class="bg-white quick-view"
              variant="outline"
              style="
                border-radius: 30px;
                text-transform: none;
                position: absolute;
                left: 50%;
                top: 50%;
                font-size: 13px;
                transform: translate(-50%, -50%);
              "
              @click="openQuicView(p)"
            >
              Quick View</v-btn
            >
          </div>

          <v-card-item>
            <v-card-title>{{ p.title }}</v-card-title>

            <v-card-subtitle>
              <span class="me-1">{{ p.description }}</span>

              <v-icon
                color="error"
                icon="mdi-fire-circle"
                size="small"
              ></v-icon>
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :model-value="p.rating"
                color="amber"
                density="compact"
                half-increments
                readonly
                size="small"
              ></v-rating>

              <div class="text-grey ms-4">{{ p.rating }}</div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              From
              <del style="text-decoration: line-through !important">
                $ {{ p.price }}</del
              >
              To
              <span style="color: red"
                >$
                {{
                  Math.ceil(p.price - p.price * (p.discountPercentage / 100))
                }}</span
              >
            </div>

            <div>
              <v-btn-toggle mandatory v-model="showenItem[p.title]">
                <v-btn
                  style="padding: 0"
                  v-for="(pic, i) in p.images"
                  :value="pic"
                  :key="i"
                >
                  <v-img
                    :src="pic"
                    width="35"
                    style="border-radius: 50%; border: 2px solid black"
                    height="35"
                    :lazy-src="pic"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey-lighten-5"
                        ></v-progress-circular>
                      </v-row> </template
                  ></v-img>
                </v-btn>
              </v-btn-toggle>
              <div style="text-align: center">
                <v-btn
                  density="compact"
                  style="
                    text-transform: none;
                    border-radius: 30px;
                    border: 1px solid black;
                    height: -webkit-fill-available !important;
                  "
                  variant="outline"
                  class="py-3 px-7 mt-3"
                  @click="
                    $router.push({
                      name: 'product_details',
                      params: { productId: p.id },
                    })
                  "
                  >Choose Options</v-btn
                >
              </div>
            </div>
          </v-card-text>

          <v-card-title>{{ p.brand }}</v-card-title>
        </v-card>
      </swiper-slide>
      <div class="swiper-prev"></div>
      <div class="swiper-next"></div>
      <div class="swiper-pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { mapState } from "vuex";
export default {
  name: "FlashDeals",
  inject: ["Emitter"],
  methods: {
    openQuicView(product) {
      this.Emitter.emit("openQuicView", product);
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  data() {
    return {
      showenItem: {},
    };
  },
  computed: {
    ...mapState(["Products"]),
  },
  mounted() {
    this.$store.dispatch("load_groceriess");
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.img:hover {
  scale: 1.2;
}
a {
  background: #acaaaa;
  padding: 8px;
  border-radius: 20px;
  font-weight: 700;
}
</style>
