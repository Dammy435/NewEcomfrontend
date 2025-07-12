import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://mernfullstack-backend-d21l.onrender.com/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="home">
            <h2>Featured Products</h2>
            <div className="product-grid">
                {products.map(product => (
                    <Link key={product._id} to={`/product/${product._id}`}>
                        <div className="product-card">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
