import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productsContext";
import FilterReducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  sortBy_Value: "none",
  filterBy_Value: "all",
};

export const FilterContextProvider = ({ children }) => {
  /*--- Already fetched data from products context ---*/
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(FilterReducer, initialState);

  /*--- Sorting function ---*/
  const handleSortChange = (event) => {
    let currentSortValue = event.target.value;
    dispatch({ type: "UPDATE_SORT_VALUE", payload: currentSortValue });
  };

  /*--- Filtering function ---*/
  const handleFilterChange = (event) => {
    let currentFilterValue = event.target.value;
    dispatch({ type: "UPDATE_FILTER_VALUE", payload: currentFilterValue });
  };

  /*--- To filter and sort the products ---*/
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [products, state.sortBy_Value, state.filterBy_Value]);

  /*--- To Load Products into filter products array ---*/
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, handleSortChange, handleFilterChange }}
    >
      {children}
    </FilterContext.Provider>
  );
};

/*--- Custom Hook for Filter Context ---*/
export const useFilterContext = () => {
  return useContext(FilterContext);
};
