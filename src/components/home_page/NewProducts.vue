<template>
  <div class="new-products pt-12">
    <v-container fluid>
      <div
        class="title mb-5"
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <h2 style="font-weight: 900; font-size: 30px" class="text-black">
          New Products
        </h2>
        <a class="text-black"> Shop All </a>
      </div>
      <v-row>
        <v-col
          cols="7"
          v-if="!Products.laptops.length"
          class="d-flex align-center justify-center"
        >
          <v-row>
            <v-col cols="4" v-for="num in 3" :key="num">
              <div class="card is-loading">
                <div class="image"></div>
                <div class="content">
                  <h2></h2>
                  <p></p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="7" v-else>
          <Swiper
            :modules="modules"
            :space-between="20"
            class="pb-8"
            :breakpoints="{
              '640': {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              '768': {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              '1024': {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }"
            :loop="true"
          >
            <swiper-slide v-for="p in Products.laptops" :key="p.id">
              <v-card
                elevation="0"
                :loading="loading"
                class="mx-auto my-12"
                max-width="374"
              >
                <template v-slot:loader="{ isActive }">
                  <v-progress-linear
                    :active="isActive"
                    color="deep-purple"
                    height="4"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <div
                  class="w-100 position-relative img-parent"
                  style="overflow: hidden"
                >
                  <img
                    cover
                    height="250"
                    :src="
                      showenItem[p.title] ? showenItem[p.title] : p.thumbnail
                    "
                    class="img"
                    :alt="p.title"
                  />
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
                        Math.ceil(
                          p.price - p.price * (p.discountPercentage / 100)
                        )
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
                          :lazy-src="pic"
                          width="35"
                          style="border-radius: 50%; border: 2px solid black"
                          height="35"
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
                    <div class="mt-12 text-center">
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

                <v-divider class="mx-4 mb-1"></v-divider>

                <!-- <v-card-title>{{ p.brand }}</v-card-title> -->
              </v-card>
            </swiper-slide>
            <div class="swiper-prev"></div>
            <div class="swiper-next"></div>
            <div class="swiper-pagination"></div>
          </Swiper>
        </v-col>
        <v-col cols="5" class="sm-none">
          <img
            src="@/assets/images/vr-banner.webp"
            class="w-100"
            alt="vr-banner"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Autoplay } from "swiper/modules";
import { mapState } from "vuex";
export default {
  inject: ["Emitter"],
  methods: {
    openQuicView(product) {
      this.Emitter.emit("openQuicView", product);
    },
  },
  name: "FlashDeals",
  setup() {
    return {
      modules: [Autoplay],
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
    this.$store.dispatch("load_laps");
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
  cursor: pointer;
}

.card {
  margin: 0 auto;
  width: 300px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

  .image {
    img {
      max-width: 100%;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
  }

  .content {
    padding: 20px 30px;
  }
}

.card.is-loading {
  margin: 0 auto;

  .image,
  h2,
  p {
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 5px;
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
  }

  .image {
    height: 200px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  h2 {
    height: 30px;
  }

  p {
    height: 70px;
  }
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}

a {
  background: #acaaaa;
  padding: 8px;
  border-radius: 20px;
  font-weight: 700;
}

@media screen and (max-width: 767px) {
  .v-col-7 {
    flex: 0 0 58.3333333333%;
    max-width: 100%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .w-100 {
    width: 100%;
    height: -webkit-fill-available;
    object-fit: none;
  }
}
</style>
