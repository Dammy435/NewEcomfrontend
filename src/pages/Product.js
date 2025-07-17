import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Product = () => {
    const { id } = useParams(); // product ID from URL
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    // Fetch product details by ID
    useEffect(() => {
        axios
            .get(`https://mernfullstack-backend-d21l.onrender.com/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);

    // Add product to cart in localStorage
    const addToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
        const exists = cart.find(item => item._id === product._id);

        if (exists) {
            exists.quantity += 1;
        } else {
            product.quantity = 1;
            cart.push(product);
        }

        localStorage.setItem("cartItems", JSON.stringify(cart));
        navigate("/cart");
    };

    if (!product) return <p className="text-center mt-12">Loading product...</p>;

    return (
        <div className="max-w-5xl mx-auto px-6 py-10">
            <div className="flex flex-col md:flex-row gap-10 items-center">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full md:w-1/2 h-auto object-cover rounded-xl shadow-lg"
                />
                <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-700 text-lg mb-2">{product.description}</p>
                    <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
                    <button
                        onClick={() => addToCart(product)}
                        className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
