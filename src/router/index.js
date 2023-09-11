import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  //{
  //   path: "/details/:id",
  //   name: "details",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Details.vue"),
  // },
  {
    path: "/products/:category/:title",
    name: "products_category",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/ProductsCategory.vue"),
  },
  {
    path: "/products/product-details/:productId",
    name: "product_details",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/ProductDetalis.vue"),
  },
  {
    path: "/cart-page",
    name: "Cart_Page",
    component: () => import(/* webpackChunkName: "about" */ "@/views/Cart.vue"),
  },
  {
    path: "/wishlist-page",
    name: "Wish_List",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/WishList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
