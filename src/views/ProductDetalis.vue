<template>
  <LoadinScreen />

  <div class="product-details mt-16">
    <v-container fluid class="bg-white pt-10">
      <v-row>
        <v-col
          cols="7"
          v-if="loading == true ? loading : false"
          class="d-flex align-center justify-center"
        >
          <v-row>
            <v-col cols="4">
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
          <v-img
            :src="tab ? tab : Products.singleProducts.thumbnail"
            class="w-100"
            :lazy-src="tab ? tab : Products.singleProducts.thumbnail"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
          <v-tabs center-active height="230" v-model="tab" class="mt-10">
            <v-tab
              v-for="(img, i) in Products.singleProducts.images"
              :key="i"
              class="mx-10"
              mandatory
              :value="img"
            >
              <v-img :src="img" :lazy-src="img" width="70" height="100">
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
              style="font-size: 19px; font-weight: bold; white-space: pre-wrap"
              >({{ Products.singleProducts.title }}) Sample -
              {{ Products.singleProducts.category }} For Sale</v-card-title
            >
            <div class="rating d-flex align-center" style="gap: 10px">
              <v-rating
                :model-value="Products.singleProducts.rating"
                color="amber"
                density="compact"
                half-increments
                readonly
                size="small"
              ></v-rating>
              <span class="mt-1" style="color: black; font-size: 13px">
                {{ Products.singleProducts.stock }}</span
              >
            </div>
            <v-card-text class="px-0" style="color: black; font-size: 15px"
              >{{ Products.singleProducts.description }}
            </v-card-text>
            <v-card-text class="px-0" style="color: black; font-size: 18px"
              >Brand: {{ Products.singleProducts.brand }}
            </v-card-text>
            <v-card-text class="px-0" style="color: black; font-size: 18px"
              >Avilable:
              {{ Products.singleProducts.stock > 0 ? "In Stock" : "Out Stock" }}
            </v-card-text>
            <v-card-text class="px-0">
              <div class="my-4 text-subtitle-1">
                From
                <del style="text-decoration: line-through !important">
                  $ {{ Products.singleProducts.price }}</del
                >
                To
                <span style="color: black; font-weight: bold"
                  >$
                  {{
                    Math.ceil(
                      Products.singleProducts.price -
                        Products.singleProducts.price *
                          (Products.singleProducts.discountPercentage / 100)
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
                  Products.singleProducts.price -
                    Products.singleProducts.price *
                      (Products.singleProducts.discountPercentage / 100)
                ) * quantity
              }}
            </v-card-text>
            <v-card-actions
              class="mt-10 w-100 px-0"
              style="
                display: flex;
                align-items: center;
                gap: 10px;
                flex-direction: column;
              "
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
                :loading="btnLoading"
                @click="add(Products.singleProducts)"
              >
                <v-icon icon="mdi-plus"></v-icon> Add To Cart</v-btn
              >
              <v-btn
                variant="outlined"
                style="text-transform: none; border-radius: 30px"
                color="red"
                class="w-75"
                density="compact"
                height="45"
                :loading="btnLoadingWishList"
                @click="addwishList(Products.singleProducts)"
              >
                <v-icon icon="mdi-heart"></v-icon> Add To Wish List</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LoadinScreen from "@/components/Global/LoadingScreen.vue";
import { mapState, mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  inject: ["Emitter"],

  computed: {
    ...mapState(["Products"]),
  },
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
      }, 1500);
    },
    addwishList(item) {
      item.quantity = this.quantity;
      this.btnLoadingWishList = true;
      setTimeout(() => {
        this.addTowishList(item);
        this.btnLoadingWishList = false;
      }, 1500);
    },
  },
  data() {
    return {
      tab: "",
      quantity: 1,
      showenItem: {},
      dialog: true,
      btnLoading: false,
      btnLoadingWishList: false,
    };
  },
  mounted() {
    axios
      .get(`https://dummyjson.com/products/${this.$route.params.productId}`)
      .then((res) => {
        this.$store.state.Products.singleProducts = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  ...mapGetters(["getQuantities"]),
  watch: {
    $route() {
      document.documentElement.scrollTo(0, 0);
      axios
        .get(`https://dummyjson.com/products/${this.$route.params.productId}`)
        .then((res) => {
          this.$store.state.Products.singleProducts = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    LoadinScreen,
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
  .w-100 {
    height: 40vh;
  }
  .px-0 {
    margin: 0 auto !important;
  }
  .v-card {
    padding: 10px;
    text-align: -webkit-center;
    .rating {
      gap: 10px;
      width: 100%;
      margin-left: 80px;
    }
    .v-btn {
      margin-left: 50px;
    }
  }
}
</style>
