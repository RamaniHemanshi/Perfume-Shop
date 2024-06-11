import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS,UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,UPDATE_PRODUCT_FAILURE, } from "./ActionType"

const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null,
    deletedProduct:null,
};

const customerProductReducer = (state = initialState, action) => {
    switch (action.type) {
        // case FIND_PRODUCTS_REQUEST:
        // case FIND_PRODUCT_BY_ID_REQUEST:
        //     return { ...state, loading: true, error: null }

        // case FIND_PRODUCTS_SUCCESS:
        //     return { ...state, loading: false, error: null, products: action.payload }
        // case FIND_PRODUCT_BY_ID_SUCCESS:
        //     return { ...state, loading: false, error: null, product: action.payload }

        // case FIND_PRODUCTS_FAILURE:
        // case FIND_PRODUCT_BY_ID_FAILURE:

        //     return { ...state, loading: false, error: action.payload }

        // default:
        //     return state;

        case FIND_PRODUCTS_REQUEST:
            return { ...state, loading: true, error: null,products:[] };

        

        case FIND_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload, loading: false };

        case FIND_PRODUCTS_FAILURE:
            return { ...state, loading: false, products:[], error: action.payload };

        case FIND_PRODUCT_BY_ID_REQUEST:
            return { ...state, loading: true, error: null };

        case FIND_PRODUCT_BY_ID_SUCCESS:
            return { ...state, product: action.payload, loading: false };

        case FIND_PRODUCT_BY_ID_FAILURE:
            return { ...state, loading: false, error: action.payload };

            case CREATE_PRODUCT_REQUEST:
                return {
                  ...state,
                  loading: true,
                  error: null,
                };
              case CREATE_PRODUCT_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  products: [...state.products, action.payload],
                };
              case CREATE_PRODUCT_FAILURE:
                return {
                  ...state,
                  loading: false,
                  error: action.payload,
                };

                case UPDATE_PRODUCT_REQUEST:
                  return {
                    ...state,
                    loading: true,
                    error: null,
                  };
                case UPDATE_PRODUCT_SUCCESS:
                  return {
                    ...state,
                    loading: false,
                    products: state.products.map((product) =>
                      product._id === action.payload._id ? action.payload : product
                    ),
                  };
                case UPDATE_PRODUCT_FAILURE:
                  return {
                    ...state,
                    loading: false,
                    error: action.payload,
                  };

        case DELETE_PRODUCT_SUCCESS:
            // console.log("dlete ",state.products)
            return {
              ...state,
              loading: false,
              error:null,
              deletedProduct:action.payload               
                };

        default:
            return state;
    }
};

export default customerProductReducer;