<template>
  <div class="top-cat">
    <div class="cyber-banner my-10">
      <img
        src="@/assets/images/cyber-banner.webp"
        class="w-100"
        alt="cyber-banner"
      />
    </div>
    <div class="catogries pt-13">
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
            Top Catogries
          </h2>
          <a class="text-black"> Shop All </a>
        </div>
      </v-container>
      <v-container fluid class="bg-grey-lighten-1">
        <v-row>
          <v-col
            class="py-5 text-center"
            v-for="cat in catogires"
            :key="cat.title"
            cols="6"
            md="2"
            sm="4"
          >
            <v-card
              style="background: transparent"
              class="card w-100"
              elevation="0"
            >
              <v-img :src="cat.img" :lazy-src="cat.img" :alt="cat.title">
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
            </v-card>
            <v-card-text style="font-size: 18px; text-align: center">{{
              cat.title
            }}</v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      catogires: [
        {
          title: "Moble Phones",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
        },
        {
          title: "Laptops & Tablets",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
        },
        {
          title: "Televisions",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
        },
        {
          title: "Pcs & Accesories",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
        },
        {
          title: "Audio & Video",
          img: " https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
        },
        {
          title: "Gamming",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
        },
        {
          title: "Home Appliances",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
        },
        {
          title: "Kitchen Appliances",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
        },
        {
          title: "Cameras",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
        },
        {
          title: "Consumables",
          img: " https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
        },
        {
          title: "Smart Homes",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
        },
        {
          title: "Accessories",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 50%;
  text-align: center;

  width: 100%;

  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 75%;
  }
  &:hover img {
    scale: 1.2;
  }
}
a {
  background: #acaaaa;
  padding: 8px;
  border-radius: 20px;
  font-weight: 700;
}
@media screen and (min-width: 767px) and (max-width: 1023px) {
  .v-col {
    flex-basis: fit-content;
    flex-grow: 1;
    max-width: 100%;
  }
}
</style>
