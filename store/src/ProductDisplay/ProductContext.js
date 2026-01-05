import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./ProjuctReducer";

const AppContext = createContext();

const API = "http://localhost:5050/products/getall";



const initialState = {
    inLoading: false,
    isError: false,
    products: [], 
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: [],
};

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };

    //API CALL For Single Product
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct});
        } catch (error) {
            dispatch({ type: "SINGLE_PRODUCT_ERROR" });
        }
    } 

    
    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </AppContext.Provider>
    );
};

//Custom Hooks

const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext};