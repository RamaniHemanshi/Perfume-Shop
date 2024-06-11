import { API_BASE_URL, api } from "../../config/apiConfig";
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS,UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,UPDATE_PRODUCT_FAILURE, } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
    
    const { sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;
    try {
        dispatch({ type: FIND_PRODUCTS_REQUEST });

        const {data} = await api.get(`/api/products?size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`);

        console.log("get product by category -:", data)

        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
       
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message })
    }
};

export const findProductsById = (reqData) => async (dispatch) => {
    
    // const {productId} = reqData;
    try {
        dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

        const {data} =await api.get(`/api/products/id/${reqData.productId}`);

        console.log("products by  id :", data)

        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })
    }
};

export const createProduct = (product) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_PRODUCT_REQUEST });
  
      const { data } = await api.post(
        `/api/admin/products/`,
        product
      );
      
      console.log("created product ", data);
      dispatch({
        type: CREATE_PRODUCT_SUCCESS,
        payload: data,
      });
  
    } catch (error) {
      dispatch({
        type: CREATE_PRODUCT_FAILURE,
        payload:error.message
      });
    }
  };

  export const deleteProduct = (productId) => async (dispatch) => {
    console.log("delete product action",productId)
    try {
      dispatch({ type: DELETE_PRODUCT_REQUEST });
  
      let {data}=await api.delete(`/api/admin/products/${productId}`);
  
      console.log("delete product ",data)
  
      dispatch({
        type: DELETE_PRODUCT_SUCCESS,
        payload:productId
        // payload: productId,
      });
  
      console.log("product delete ",data)
    } catch (error) {
    //   console.log("catch error ",error)
      dispatch({
        type: DELETE_PRODUCT_FAILURE,
        payload: error.message,
      });
    }
  };

  export const updateProduct = (product) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PRODUCT_REQUEST });
  
      const { data } = await api.put(
        `${API_BASE_URL}/api/admin/products/${product._id}`,
        product
      );
  console.log("update product ",data)
      dispatch({
        type: UPDATE_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_PRODUCT_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
