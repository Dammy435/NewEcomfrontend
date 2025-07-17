import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Navbar from "./components/Navbar";
import './styles.css';
import { CartProvider } from "./context/CartContext";



function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
