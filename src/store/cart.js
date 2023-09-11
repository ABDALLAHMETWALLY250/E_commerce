const cart = {
  state: {
    cartData: {
      products: [],
      totalPrice: 0,
      Quantities: 0,
    },
  },
  getters: {
    getCart: (state) => {
      return state.cartData;
    },
    getprice(state) {
      let price = 0;
      state.cartData.products.forEach((product) => {
        price +=
          parseInt(product.quantity) *
          Math.ceil(
            product.totalPrice -
              (product.totalPrice * product.discountPercentage) / 100
          );
      });
      return price;
    },
    getQuantities(state) {
      let quantites = 0;
      state.cartData.products.forEach((product) => {
        quantites += parseInt(product.quantity);
      });
      return quantites;
    },
  },
  mutations: {
    addToCart: (state, payload) => {
      const product = state.cartData.products.find(
        (pro) => pro.id === payload.id
      );
      if (product) {
        return state;
      } else {
        payload.totalPrice = parseInt(payload.quantity) * payload.price;
        state.cartData = {
          ...state.cartData,
          products: [...state.cartData.products, payload],
          totalPrice: state.cartData.totalPrice + payload.price,
          Quantities: state.cartData.Quantities + 1,
        };
        localStorage.getItem(
          "cart-items",
          JSON.stringify(state.cartData.products)
        );
      }
    },
    updateQuantity: (state, payload) => {
      const product = state.cartData.products.find(
        (product) => product.id === payload.id
      );
      product.totalPrice = product.price * parseInt(product.quantity);
      const index = state.cartData.products.findIndex(
        (product) => product.id === payload.id
      );
      state.cartData.products[index] = product;
    },
    deletProduct: (state, id) => {
      state.cartData.products = state.cartData.products.filter(
        (product) => product.id !== id
      );
    },
  },
  actions: {
    addToCart: (obj, payload) => {
      obj.commit("addToCart", payload);
    },
    updateQuantity: (obj, payload) => {
      obj.commit("updateQuantity", payload);
    },
    remove: (obj, id) => {
      obj.commit("deletProduct", id);
    },
  },
};
export default cart;
