<template>
  <div class="fixed-nav">
    <v-app-bar color="blue">
      <v-container fluid>
        <v-row class="justify-space-between" style="flex-wrap: initial">
          <!-- Logo -->
          <v-col
            lg="2"
            md="6"
            xs="6"
            sm="6"
            class="lg-flex sm-flex justify-md-center logo-sm"
          >
            <router-link to="/">
              <img src="@/assets/images/logo.png" alt="Logo" />
            </router-link>
          </v-col>
          <!-- Logo -->

          <!-- Links -->
          <v-col lg="8" md="8" xl="8" class="md-none sm-none lg-flex">
            <ul class="links">
              <li v-for="cat in Products.catogeries" :key="cat.route">
                <router-link
                  :to="`/products/${cat.route}/${cat.title}`"
                  style="color: #fff; padding: 10px"
                >
                  {{ cat.title }}
                </router-link>
              </li>
            </ul>
          </v-col>

          <!-- Links -->
          <!-- Cart -->
          <v-col
            xs="6"
            sm="6"
            lg="2"
            md="6"
            style="display: flex; align-items: center; justify-content: end"
          >
            <div class="text-center d-lg-none">
              <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                  <v-btn
                    style="padding: 0; margin: 0"
                    size="x-large"
                    v-bind="props"
                  >
                    Menu
                  </v-btn>
                </template>

                <v-list class="bg-black">
                  <v-list-item>
                    <ul class="links">
                      <li v-for="cat in Products.catogeries" :key="cat.route">
                        <router-link
                          :to="{
                            name: 'products_category',
                            params: { category: cat.route, title: cat.title },
                          }"
                          style="color: #fff; padding: 10px"
                        >
                          {{ cat.title }}
                        </router-link>
                      </li>
                    </ul>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
            <div
              class="wishlistes d-flex flex-column align-center"
              @click="openCart"
            >
              <v-badge
                location="right top"
                :content="getQuantities"
                color="red"
                offset-x="-15"
              ></v-badge>
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path
                  class="path1"
                  d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
                ></path>
                <path
                  class="path2"
                  d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
                ></path>
                <path
                  class="path3"
                  d="M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z"
                ></path>
              </svg>
            </div>
          </v-col>
          <!-- Cart -->
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  inject: ["Emitter"],
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
  },
  computed: {
    ...mapState(["Products"]),
    ...mapGetters(["getCart", "getwishList", "getQuantities"]),
  },
};
</script>

<style lang="scss" scoped>
svg {
  width: 28px;
  fill: white;
}
.wishlistes {
  width: 20%;
  padding: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    border-radius: 10px;
  }
}
.links {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 0 !important ;
  width: 100%;
  text-align: center;
  li {
    text-align: center;
    width: 100%;
    &:hover {
      padding: 8px;
      background-color: rgba(0, 0, 0, 0.3);
      cursor: pointer;
      padding: 8px;
      border-radius: 10px;
    }
  }
}
@media screen and (max-width: 767px) {
  .logo-sm {
    width: 152px;
    height: 152px;
    padding-left: 33px;
  }
}
</style>
