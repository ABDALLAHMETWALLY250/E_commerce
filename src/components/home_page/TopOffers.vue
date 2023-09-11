<template>
  <div class="top-offers bg-grey-lighten-2 pt-5">
    <v-container fluid>
      <v-row>
        <v-col cols="4">
          <div class="parent pl-2">
            <img src="@/assets/images/playstations.webp" alt="Product" />
          </div>
        </v-col>
        <v-col cols="4">
          <div class="parent pl-2">
            <img src="@/assets/images/headset.webp" alt="Product" />
          </div>
        </v-col>
        <v-col cols="4">
          <div class="parent pl-2">
            <img src="@/assets/images/chairs.webp" alt="Product" />
          </div>
        </v-col>

        <v-col cols="6" class="mt-5">
          <div class="parent pr-2">
            <img src="@/assets/images/iphones.webp" />
          </div>
        </v-col>
        <v-col cols="6" class="mt-5">
          <div class="parent pl-2">
            <img src="@/assets/images/laptops.webp" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.parent {
  overflow: hidden;
}
img {
  width: 100%;
  &:hover {
    scale: 1.1;
    cursor: pointer;
  }
}
@media screen and (max-width: 750px) {
  .v-col {
    flex-basis: unset;
    flex-grow: 1;
    max-width: 100%;
  }
}
</style>
