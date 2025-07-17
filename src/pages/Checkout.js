// src/pages/Checkout.js
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import axios from 'axios';

const Checkout = () => {
    const { cartItems } = useCart();
    const [form, setForm] = useState({ name: '', address: '', email: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.name || !form.address || !form.email) {
            return setMessage('Please fill all fields.');
        }

        try {
            const order = {
                customer: form,
                items: cartItems,
            };

            const res = await axios.post('https://your-backend-url/api/orders', order);
            setMessage('Order placed successfully!');
            console.log(res.data);
            // Optionally: clearCart();
        } catch (err) {
            setMessage('Order failed. Try again.');
            console.error(err);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    className="w-full border p-2 rounded"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    onChange={handleChange}
                />
                <input
                    className="w-full border p-2 rounded"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <textarea
                    className="w-full border p-2 rounded"
                    name="address"
                    placeholder="Shipping Address"
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
                >
                    Place Order
                </button>
                {message && <p className="text-center text-red-500">{message}</p>}
            </form>
        </div>
    );
};

export default Checkout;
