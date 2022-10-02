import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = React.useState();

  React.useEffect(() => {
    const fetchCardData = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProducts(data);
          console.log(products);
          dispatch({
            type: "INITIALIZE_CART",
            products: data,
          });
        });
    };
    fetchCardData();
  }, []);

  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    category: "",
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
