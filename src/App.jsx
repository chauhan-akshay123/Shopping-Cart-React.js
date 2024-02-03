import Products from "./components/products";
import CartProvider from "./contexts/CartProvider";
import Header from "./components/Header";

function App() {
  return (
    <CartProvider>
      <Header/>
      <Products />
    </CartProvider> 
  );
}

export default App;