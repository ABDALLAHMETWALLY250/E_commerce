const wishList = {
  state: {
    wishListData: {
      products: [],
      totalPrice: 0,
      Quantities: 0,
    },
  },
  getters: {
    getwishList: (state) => {
      return state.wishListData;
    },

    getQuantitiesWishList(state) {
      let quantites = 0;
      state.wishListData.products.forEach((product) => {
        quantites += parseInt(product.quantity);
      });
      return quantites;
    },
  },
  mutations: {
    addTowishList: (state, payload) => {
      const product = state.wishListData.products.find(
        (pro) => pro.id === payload.id
      );
      if (product) {
        return state;
      } else {
        payload.totalPrice = parseInt(payload.quantity) * payload.price;
        state.wishListData = {
          ...state.wishListData,
          products: [...state.wishListData.products, payload],
          totalPrice: state.wishListData.totalPrice + payload.price,
          Quantities: state.wishListData.Quantities + 1,
        };
        localStorage.getItem(
          "wishList-items",
          JSON.stringify(state.wishListData.products)
        );
      }
    },
    updateQuantity: (state, payload) => {
      const product = state.wishListData.products.find(
        (product) => product.id === payload.id
      );
      product.totalPrice = product.price * parseInt(product.quantity);
      const index = state.wishListData.products.findIndex(
        (product) => product.id === payload.id
      );
      state.wishListData.products[index] = product;
    },
    deletProduct: (state, id) => {
      state.wishListData.products = state.wishListData.products.filter(
        (product) => product.id !== id
      );
    },
  },
  actions: {
    addTowishList: (obj, payload) => {
      obj.commit("addTowishList", payload);
    },
    updateQuantity: (obj, payload) => {
      obj.commit("updateQuantity", payload);
    },
    removeWishList: (obj, id) => {
      obj.commit("deletProduct", id);
    },
  },
};
export default wishList;
