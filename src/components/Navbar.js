import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const linkClasses = (path) =>
        pathname === path
            ? "text-blue-600 font-bold"
            : "text-gray-700 hover:text-blue-500";

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-black">E-Sole</Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className={linkClasses("/")}>Home</Link>
                        <Link to="/products" className={linkClasses("/products")}>Products</Link>
                        <Link to="/cart" className={linkClasses("/cart")}>Cart</Link>
                        <Link to="/login" className={linkClasses("/login")}>Login</Link>
                        <Link to="/register" className={linkClasses("/register")}>Register</Link>
                    </div>

                    {/* Hamburger */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
                            ☰
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden flex flex-col gap-3 mt-2 pb-4 border-t pt-4">
                        <Link to="/" onClick={() => setIsOpen(false)} className={linkClasses("/")}>Home</Link>
                        <Link to="/products" onClick={() => setIsOpen(false)} className={linkClasses("/products")}>Products</Link>
                        <Link to="/cart" onClick={() => setIsOpen(false)} className={linkClasses("/cart")}>Cart</Link>
                        <Link to="/login" onClick={() => setIsOpen(false)} className={linkClasses("/login")}>Login</Link>
                        <Link to="/register" onClick={() => setIsOpen(false)} className={linkClasses("/register")}>Register</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
