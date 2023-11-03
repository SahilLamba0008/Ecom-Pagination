const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        /*--- spread operator to prevent manipulation of original data ---*/
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    /*--- Update Selected Sort Value ---*/
    case "UPDATE_SORT_VALUE":
      return {
        ...state,
        sortBy_Value: action.payload,
      };

    /*--- Update Selected Filter Value ---*/
    case "UPDATE_FILTER_VALUE":
      return {
        ...state,
        filterBy_Value: action.payload,
      };

    /*--- Filter Products ---*/
    case "FILTER_PRODUCTS":
      let newFilterData;
      const { filterBy_Value } = state;
      newFilterData = [...state.all_products];

      if (filterBy_Value === "all") {
        return { ...state, filter_products: newFilterData };
      }
      if (filterBy_Value === "price100-500") {
        newFilterData = newFilterData.filter(
          (product) => product.price >= 100 && product.price < 500
        );
      }
      if (filterBy_Value === "price500-1000") {
        newFilterData = newFilterData.filter(
          (product) => product.price >= 500 && product.price < 1000
        );
      }
      if (filterBy_Value === "price1000+") {
        newFilterData = newFilterData.filter(
          (product) => product.price >= 1000
        );
      }

      return {
        ...state,
        filter_products: newFilterData,
      };

    /*--- Sort Products ---*/
    case "SORT_PRODUCTS":
      let newSortData;
      /*--- Destructured from State params ---*/
      const { filter_products, sortBy_Value } = state;
      let tempSortProduct = [...filter_products];

      if (sortBy_Value === "none") {
        return { ...state, filter_products: tempSortProduct };
      } else {
        const sortingProducts = (a, b) => {
          if (sortBy_Value === "lowToHigh") {
            return a.price - b.price;
          }

          if (sortBy_Value === "highToLow") {
            return b.price - a.price;
          }
        };

        newSortData = tempSortProduct.sort(sortingProducts);
      }
      return {
        ...state,
        filter_products: newSortData,
      };

    default:
      return state;
  }
};

export default FilterReducer;
