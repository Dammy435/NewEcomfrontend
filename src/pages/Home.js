import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Hero from "../components/Hero"; 

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("https://mernfullstack-backend-d21l.onrender.com/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <Hero />

            <section className="py-12 px-4 sm:px-8 lg:px-16 bg-white">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Featured Products
                </h2>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map(product => (
                        <Link
                            key={product._id}
                            to={`/product/${product._id}`}
                            className="bg-white border rounded-lg shadow hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 object-cover rounded-t-lg"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-700">
                                    {product.name}
                                </h3>
                                <p className="text-gray-500 mt-1">${product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
