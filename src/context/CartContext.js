// src/context/CartContext.js
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
    cartItems: [],
};

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItem = state.cartItems.find(
                (item) => item._id === action.payload._id
            );
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item._id === action.payload._id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
                };
            }

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item._id !== action.payload),
            };

        case "INCREMENT_QUANTITY":
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item._id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };

        case "DECREMENT_QUANTITY":
            return {
                ...state,
                cartItems: state.cartItems
                    .map((item) =>
                        item._id === action.payload && item.quantity > 1
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                    .filter((item) => item.quantity > 0),
            };

        default:
            return state;
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => dispatch({ type: "ADD_TO_CART", payload: product });
    const removeFromCart = (id) => dispatch({ type: "REMOVE_FROM_CART", payload: id });
    const incrementQuantity = (id) => dispatch({ type: "INCREMENT_QUANTITY", payload: id });
    const decrementQuantity = (id) => dispatch({ type: "DECREMENT_QUANTITY", payload: id });

    return (
        <CartContext.Provider
            value={{
                cartItems: state.cartItems,
                addToCart,
                removeFromCart,
                incrementQuantity,
                decrementQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
