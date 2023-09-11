import { createStore } from "vuex";
import Products from "./Products/loadProducts";
import Cart from "./cart";
import WishListes from "./wishListes";
export default createStore({
  modules: { Products, Cart, WishListes },
});
