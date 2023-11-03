import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import ProductsReducer from "../reducer/productsReducer";

const ProductsContext = createContext();

const initialState = {
  isLoading: true,
  isError: false,
  products: [],
  featuredProducts: [],

  /*--- Single product page states ---*/
  isSingleProductLoading: true,
  singleProduct: {},
  isSingleProductError: false,

  /*--- pagination states ---*/

  pageNo: 1,
  totalPages: 0,
};

const ProductsContextProvider = ({ children }) => {
  /*--- set state = initialState ---*/
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const setPageNo = (newPageNo) => {
    dispatch({ type: "SET_PAGE_NO", payload: newPageNo });
  };

  /*--- Products API call ---*/
  /*--- No of Products to show per page ---*/
  var itemsPerPage = 25;
  useEffect(() => {
    const fetchData = async () => {
      const API = `https://dummyjson.com/products/?limit=${itemsPerPage}&skip=${
        state.pageNo * 10 - 10
      }`;

      try {
        const res = await axios.get(API);
        const products = await res.data.products;
        const totalProducts = await res.data.total;

        dispatch({ type: "SET_PRODUCTS_DATA", payload: products });
        dispatch({
          type: "SET_TOTAL_PAGES",
          payload: { totalProducts, itemsPerPage },
        });
        dispatch({ type: "SET_LOADING", payload: false });

        console.log(res.data.products);
      } catch (error) {
        dispatch({ type: "API_ERROR" });
      }
    };
    fetchData();
  }, [state.pageNo, itemsPerPage]);

  /*--- Single Product API call ---*/
  const fetchSingleProductData = async (API) => {
    try {
      const res = await axios.get(API);
      const product = res.data;

      dispatch({ type: "SET_SINGLE_PRODUCT", payload: product });
      dispatch({ type: "SET_SINGLE_PRODUCT_LOADING", payload: false });
    } catch (error) {
      dispatch({ type: "SINGLE_PRODUCT_API_ERROR", payload: true });
    }
  };

  return (
    <ProductsContext.Provider
      value={{ ...state, setPageNo, fetchSingleProductData }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

/*--- Custom Hook for Product Context ---*/
const useProductContext = () => {
  return useContext(ProductsContext);
};

export { ProductsContextProvider, ProductsContext, useProductContext };
