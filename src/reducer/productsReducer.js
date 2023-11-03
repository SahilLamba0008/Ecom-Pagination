const ProductsReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_PRODUCTS_DATA":
      return {
        ...state,
        products: action.payload,
      };

    case "SET_TOTAL_PAGES":
      const { totalProducts, itemsPerPage } = action.payload;
      const totalNoOfPages = totalProducts / itemsPerPage;
      return {
        ...state,
        totalPages: totalNoOfPages,
      };

    case "SET_PAGE_NO":
      return {
        ...state,
        pageNo: action.payload,
      };

    /*--- Single Product cases ---*/
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_PRODUCT_LOADING":
      return {
        ...state,
        isSingleProductLoading: action.payload,
      };

    case "SINGLE_PRODUCT_API_ERROR":
      return {
        ...state,
        isSingleProductLoading: false,
        isSingleProductError: action.payload,
      };

    default:
      return state;
  }
};

export default ProductsReducer;
