<template>
  <div class="product-details mt-16">
    <v-dialog persistent v-model="dialog" max-width="900" max-height="600">
      <v-card elevation="0">
        <v-container fluid class="bg-white pt-10">
          <v-row>
            <v-col cols="7">
              <v-img
                :src="tab ? tab : product.thumbnail"
                :lazy-src="tab ? tab : product.thumbnail"
                class="w-100"
                height="550"
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
                  </v-row>
                </template>
              </v-img>
              <v-tabs center-active height="150" v-model="tab" class="mt-10">
                <v-tab
                  v-for="(img, i) in product.images"
                  :key="i"
                  class="mx-10"
                  :value="img"
                >
                  <v-img :src="img" width="70" height="100" :lazy-src="img">
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
                      </v-row>
                    </template>
                  </v-img>
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="5" class="pt-0 pl-6">
              <v-card elevation="0">
                <v-card-title
                  class="px-0"
                  style="
                    font-size: 19px;
                    font-weight: bold;
                    white-space: pre-wrap;
                  "
                  >({{ product.title }}) Sample - {{ product.category }} For
                  Sale</v-card-title
                >
                <div class="rating d-flex align-center" style="gap: 10px">
                  <v-rating
                    :model-value="product.rating"
                    color="amber"
                    density="compact"
                    half-increments
                    readonly
                    size="small"
                  ></v-rating>
                  <span class="mt-1" style="color: black; font-size: 13px">
                    {{ product.stock }}</span
                  >
                </div>
                <v-card-text class="px-0" style="color: black; font-size: 15px"
                  >{{ product.description }}
                </v-card-text>
                <v-card-text class="px-0" style="color: black; font-size: 18px"
                  >Brand: {{ product.brand }}
                </v-card-text>
                <v-card-text class="px-0" style="color: black; font-size: 18px"
                  >Avilable:
                  {{ product.stock > 0 ? "In Stock" : "Out Stock" }}
                </v-card-text>
                <v-card-text class="px-0">
                  <div class="my-4 text-subtitle-1">
                    From
                    <del style="text-decoration: line-through !important">
                      $ {{ product.price }}</del
                    >
                    To
                    <span style="color: black; font-weight: bold"
                      >$
                      {{
                        Math.ceil(
                          product.price -
                            product.price * (product.discountPercentage / 100)
                        )
                      }}</span
                    >
                  </div>
                </v-card-text>
                <v-card-text class="pl-0 pt-0">Quantity</v-card-text>
                <div
                  class="counter px-2 py-1"
                  style="
                    border-radius: 30px;
                    border: 1px solid black;
                    width: fit-content;
                  "
                >
                  <v-icon @click="quantity > 1 ? quantity-- : false" size="25"
                    >mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    style="border: none; outline: none; font-size: 15px"
                    class="text-center"
                    min="1"
                    v-model="quantity"
                  />
                  <v-icon @click="quantity++" size="25">mdi-plus</v-icon>
                </div>
                <v-card-text class="pl-0 pt-1">
                  Sub Total: ${{
                    Math.ceil(
                      product.price -
                        product.price * (product.discountPercentage / 100)
                    ) * quantity
                  }}
                </v-card-text>
                <v-card-actions
                  class="mt-10 w-100 px-0 d-flex align-center justify-center"
                  style="flex-direction: column; gap: 15px"
                >
                  <v-btn
                    variant="outlined"
                    style="
                      text-transform: none;
                      border-radius: 30px;
                      color: #fff;
                      background: #000;
                    "
                    class="w-75"
                    density="compact"
                    height="45"
                    @click="add(product), getQuantities"
                    :loading="btnLoading"
                  >
                    <v-icon icon="mdi-plus"></v-icon> Add To Cart</v-btn
                  >
                  <v-btn
                    style="text-transform: none; border-radius: 30px"
                    class="w-75"
                    height="45"
                    color="red"
                    variant="elevated"
                    @click="addwishList(product), getQuantitiesWishList"
                    :loading="btnLoadingWishList"
                  >
                    <v-icon icon="mdi-heart"></v-icon> Add To Wish List</v-btn
                  >
                  <v-btn
                    variant="outlined"
                    class="w-75"
                    style="text-transform: none; border-radius: 30px"
                    density="compact"
                    height="45"
                    color="red"
                    @click="dialog = false"
                  >
                    <v-icon icon="mdi-close"></v-icon> Close</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  inject: ["Emitter"],
  methods: {
    ...mapActions(["addToCart", "addTowishList"]),
    add(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addToCart(item);
        this.Emitter.emit("ShowMsg", item.title);
        this.Emitter.emit("openCart");
        this.dialog = false;
      }, 1500);
    },
    addwishList(item) {
      item.quantity = this.quantity;
      this.btnLoadingWishList = true;
      setTimeout(() => {
        this.addTowishList(item);
        this.dialog = false;
        this.btnLoadingWishList = false;
      }, 1500);
    },
  },
  data() {
    return {
      tab: "",
      quantity: 1,
      showenItem: {},
      dialog: false,
      btnLoading: false,
      btnLoadingWishList: false,
      product: "",
    };
  },
  computed: {
    ...mapGetters(["getQuantities", "getQuantitiesWishList"]),
  },
  mounted() {
    this.Emitter.on("openQuicView", (data) => {
      this.product = data;
      this.dialog = true;
    });
  },
};
</script>

<style lang="scss" scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

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
@media screen and (max-width: 767px) {
  .v-col {
    flex-basis: fit-content;
    flex-grow: 1;
    max-width: 100%;
  }
}
</style>
