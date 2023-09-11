<template>
  <div class="shop-us text-center my-5 py-14">
    <div class="title">
      <h2 class="text-white mb-2" style="font-size: 35px">
        <span style="color: rgb(6, 223, 115)">Why Shop</span>
        With Us?
      </h2>
    </div>
    <v-container class="my-3" fluid>
      <v-row>
        <v-col cols="3">
          <v-card elevation="0" class="text-center" color="transparent">
            <div class="img-parent w-100">
              <img
                src="@/assets/images/free-shipping.png"
                alt="free-shipping"
              />
            </div>
            <v-card-title
              style="white-space: pre-wrap; line-height: 1.2; color: white"
              >Free Shipping On First Order</v-card-title
            >
            <v-card-text class="text-white pb-0 pt-3"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit
              .</v-card-text
            >
            <a href="#" style="color: withe; font-size: 14px">Learn More</a>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card elevation="0" class="text-center" color="transparent">
            <div class="img-parent w-100">
              <img
                src="@/assets/images/weekly-flash-sales.png"
                alt="weekly-flash-sales"
              />
            </div>
            <v-card-title
              style="white-space: pre-wrap; line-height: 1.2; color: white"
              >Weekly Flash Sales</v-card-title
            >
            <v-card-text class="text-white pb-0 pt-3"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit
              .</v-card-text
            >
            <a href="#" style="color: withe; font-size: 14px">Learn More</a>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card elevation="0" class="text-center" color="transparent">
            <div class="img-parent w-100">
              <img src="@/assets/images/discount.png" alt="discount" />
            </div>
            <v-card-title
              style="white-space: pre-wrap; line-height: 1.2; color: white"
              >Anual Payment Discount</v-card-title
            >
            <v-card-text class="text-white pb-0 pt-3"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit
              .</v-card-text
            >
            <a href="#" style="color: withe; font-size: 14px">Learn More</a>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card elevation="0" class="text-center" color="transparent">
            <div class="img-parent w-100">
              <img src="@/assets/images/cash-back.png" alt="cash-back" />
            </div>
            <v-card-title
              style="white-space: pre-wrap; line-height: 1.2; color: white"
              >Cash Back Reward Program</v-card-title
            >
            <v-card-text class="text-white pb-0 pt-3"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit
              .</v-card-text
            >
            <a href="#" style="color: withe; font-size: 14px">Learn More</a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.shop-us {
  background-image: url("../../assets/images/why-shop-with-us-banner.webp");
  background-repeat: repeat;
  background-size: cover;
}
a {
  color: #fff;
  text-decoration: underline !important;
}
@media screen and (max-width: 767px) {
  .v-row {
    gap: 18px;
  }
  .v-col {
    flex-basis: unset;
    flex-grow: 1;
    max-width: 100%;
  }
}
</style>
