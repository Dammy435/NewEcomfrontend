// src/pages/Cart.js
import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
    if (cartItems.length === 0) {
        return (
            <div className="p-8">
                <h2 className="text-2xl font-bold mb-6">Your Cart is Empty</h2>
            </div>
        );
    }


    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="space-y-6">
                    {cartItems.map((item) => (
                        <div key={item._id} className="flex items-center justify-between border-b pb-4">
                            <div>
                                <h3 className="font-semibold">{item.name}</h3>
                                <p>${item.price}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => decrementQuantity(item._id)}
                                    className="px-2 py-1 bg-gray-300 rounded"
                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    onClick={() => incrementQuantity(item._id)}
                                    className="px-2 py-1 bg-gray-300 rounded"
                                >
                                    +
                                </button>
                            </div>
                            <button
                                onClick={() => removeFromCart(item._id)}
                                className="text-red-500 font-bold"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="text-right mt-4">
                        <div className="text-xl font-bold mb-4">
                            Total: ${totalPrice.toFixed(2)}
                        </div>
                        <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                            Proceed to Checkout
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Cart;
