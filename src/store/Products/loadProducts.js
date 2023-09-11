import axios from "axios";

export default {
  state: {
    products: [],
    laptops: [],
    mobiles: [],
    fragrances: [],
    groceriess: [],
    catogeries: [
      {
        title: "SmartPhones",
        route: "smartphones",
      },
      {
        title: "LapTops",
        route: "laptops",
      },
      {
        title: "Fragrances",
        route: "fragrances",
      },
      {
        title: "Skincare",
        route: "skincare",
      },
      {
        title: "MenShoes",
        route: "mens-shoes",
      },
      {
        title: "MenWatches",
        route: "mens-watches",
      },
      {
        title: "Women Bags",
        route: "womens-bags",
      },

      {
        title: "Motorcycle",
        route: "motorcycle",
      },
    ],
    categoryProducts: [],
    singleProducts: "",
  },

  mutations: {
    set_prod(state, products) {
      state.products = products;

    },
    set_laps(state, laptops) {
      state.laptops = laptops;
    },
    set_mobile(state, mobiles) {
      state.mobiles = mobiles;
    },
    set_fragrances(state, fragrances) {
      state.fragrances = fragrances;
    },
    set_groceriess(state, groceriess) {
      state.groceriess = groceriess;
    },
    set_categoryProducts(state, categoryProducts) {
      state.categoryProducts = categoryProducts;
    },
  },
  actions: {
    load_product(context) {
      axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          context.commit(
            "set_prod",
            res.data.products.filter((el) => el.category === "skincare")
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
    load_laps(context) {
      axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          context.commit(
            "set_laps",
            res.data.products.filter((el) => el.category === "laptops")
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
    load_mobile(context) {
      axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          context.commit(
            "set_mobile",
            res.data.products.filter((el) => el.category === "smartphones")
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
    load_fragrances(context) {
      axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          context.commit(
            "set_fragrances",
            res.data.products.filter((el) => el.category === "fragrances")
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
    load_groceriess(context) {
      axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          context.commit(
            "set_groceriess",
            res.data.products.filter((el) => el.category === "groceries")
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
    load_categoryProducts(context, productID) {
      axios
        .get(`https://dummyjson.com/products/category/${productID}`)
        .then((res) => {
          context.commit("set_categoryProducts", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
