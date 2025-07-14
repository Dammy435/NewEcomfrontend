import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-gray-800">
                            E-Sole
                        </Link>
                    </div>

                    {/* Nav Links */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="text-gray-700 hover:text-gray-900">
                            Home
                        </Link>
                        <Link to="/products" className="text-gray-700 hover:text-gray-900">
                            Products
                        </Link>
                        <Link to="/cart" className="text-gray-700 hover:text-gray-900">
                            Cart
                        </Link>
                        <Link to="/login" className="text-gray-700 hover:text-gray-900">
                            Login
                        </Link>
                        <Link to="/register" className="text-gray-700 hover:text-gray-900">
                            Register
                        </Link>
                    </div>

                    {/* Mobile Menu Placeholder (optional) */}
                    <div className="md:hidden">
                        {/* Future: Mobile menu toggle button */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
