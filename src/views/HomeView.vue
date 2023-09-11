<template>
  <LoadinScreen />
  <div class="home">
    <UpperBanner />
    <br />
    <TheFeatures />
    <TopOffers />
    <FlashDeals />
    <TopCategories />
    <NewProducts />
    <QualityFeatures />
    <TopMobilePhones />
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <img
            src="@/assets/images/band-left-cover.webp"
            alt="band-left"
            class="w-100"
          />
        </v-col>
        <v-col cols="6">
          <img
            src="@/assets/images/band-right-cover.webp"
            alt="band-right"
            class="w-100"
          />
        </v-col>
      </v-row>
    </v-container>
    <TopFragrances />
    <img src="@/assets/images/tv-banner.webp" class="w-100 my-4" alt="" />
    <TopGroceriess />
    <WhyShopWithUs />
  </div>
</template>

<script>
import LoadinScreen from "@/components/Global/LoadingScreen.vue";
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import FlashDeals from "@/components/home_page/FlashDeals.vue";
import TopCategories from "@/components/home_page/TopCategories.vue";
import NewProducts from "@/components/home_page/NewProducts.vue";
import QualityFeatures from "@/components/home_page/QualityFeatures.vue";
import TopMobilePhones from "@/components/home_page/TopMobilePhones.vue";
import TopFragrances from "@/components/home_page/TopFragrances.vue";
import TopGroceriess from "@/components/home_page/TopGroceriess.vue";
import WhyShopWithUs from "@/components/home_page/WhyShopWithUs.vue";
export default {
  name: "Home",
  components: {
    LoadinScreen,
    UpperBanner,
    TheFeatures,
    TopOffers,
    FlashDeals,
    TopCategories,
    NewProducts,
    QualityFeatures,
    TopMobilePhones,
    TopFragrances,
    TopGroceriess,
    WhyShopWithUs,
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 750px) {
  .v-col {
    flex-basis: unset;
    flex-grow: 1;
    max-width: 100%;
  }
}
</style>
