<template>
  <LoadinScreen />
  <v-container v-if="getCart.products.length > 0">
    <div class="w-100">
      <v-card
        v-for="(p, i) in getCart.products"
        :key="i"
        :loading="loading"
        class="mx-auto my-12 my-3 px-2"
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

        <v-img cover height="250" :lazy-src="p.thumbnail" :src="p.thumbnail">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>

        <v-card-item>
          <v-card-title>{{ p.title }}</v-card-title>

          <v-card-subtitle>
            <!-- <span class="me-1">Local Favorite</span> -->

            <!-- <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon> -->
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
            {{ p.brand }} - {{ p.category }}
          </div>

          <div>
            {{ p.description }}
          </div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-title
          >${{
            Math.ceil(p.price - p.price * (p.discountPercentage / 100))
          }}</v-card-title
        >

        <div
          class="counter px-2 py-1"
          style="
            border-radius: 30px;
            border: 1px solid black;
            width: fit-content;
          "
        >
          <v-icon @click="p.quantity > 1 ? p.quantity-- : false" size="25"
            >mdi-minus</v-icon
          >
          <input
            type="number"
            style="border: none; outline: none; font-size: 15px"
            class="text-center"
            min="1"
            v-model="p.quantity"
          />
          <v-icon @click="p.quantity++" size="25">mdi-plus</v-icon>
        </div>

        <v-card-actions @click="remove(p.id)">
          <v-btn append-icon="mdi-delete" color="red" variant="tonal">
            DELETE
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <div class="text-center" v-if="getCart.products.length > 0">
      <p>
        <strong>Quantites: {{ getQuantities }}</strong>
      </p>
      <p>
        <strong> Total: ${{ getprice }}</strong>
      </p>

      <v-card-actions
        class="d-flex align-center justify-center"
        style="gap: 15px; flex-direction: column"
      >
        <v-btn
          color="blue"
          variant="خعفمهىثي"
          style="border-radius: 10px"
          class="w-50"
          @click="close"
        >
          Continue Shopping</v-btn
        >
        <v-btn
          color="blue"
          variant="elevated"
          style="border-radius: 10px"
          class="w-50"
          @click="close"
        >
          Checkout</v-btn
        >
      </v-card-actions>
    </div>
  </v-container>

  <div class="text-center w-100" v-else>
    <lottie-player
      src="https://lottie.host/dfb5fad3-2a1a-4eae-b2e7-32bf8f5e00c2/vmuuM9cDMj.json"
      background="#ffffff"
      speed="1"
      style="width: 100%; height: 70vh"
      loop
      autoplay
      delay="1000"
      mode="normal"
    ></lottie-player>
    <h1>Your Cart Is Empty</h1>
    <router-link to="/">
      <strong>
        <v-btn
          color="blue"
          variant="elevated"
          class="mt-2 py-1 px-2"
          style="bordder-radius: 10px"
          @click="close"
        >
          Continue Shopping</v-btn
        >
      </strong>
    </router-link>
  </div>
</template>
<script>
import LoadinScreen from "@/components/Global/LoadingScreen.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  inject: ["Emitter"],
  data() {
    return {
      selection: 1,
      quantity: 1,
    };
  },
  methods: {
    ...mapActions(["updateQuantity", "remove"]),
    updateQty(e, id) {
      this.loading = true;
      this.updateQuantity({ qty: e.target.value, id: id });
    },
    add(item) {
      item.quantity = this.quantity;
      this.addToCart(item);
    },
  },

  computed: {
    ...mapGetters(["getCart", "getprice", "getQuantities"]),
  },
  components: {
    LoadinScreen,
  },
};
</script>

<style lang="scss" scoped>
.v-navigation-drawer__content {
  width: 100% !important;
  max-width: 100% !important;
  &::-webkit-scrollbar {
    width: 5px !important;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px !important;
    background-color: rgb(177, 177, 177);
  }
  &::-webkit-scrollbar-track {
    width: 5px !important;
    background-color: rgb(177, 177, 177);
  }
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.w-100 {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
