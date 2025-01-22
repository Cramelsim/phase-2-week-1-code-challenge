import React, { useState} from 'react';
import { products } from './data/products';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function Searchsort({ searchTerm, setSearchTerm, handleSort, sortConfig }) {
  return (
    <div className="search-sort">
      <header>
        <h1>E-Commerce Store</h1>
        <div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => handleSort('name')}>
            Sort by Name {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
          </button>
          <button onClick={() => handleSort('price')}>
            Sort by Price {sortConfig.key === 'price' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
          </button>
        </div>
      </header>
    </div>
  );
}

function App() {
  const [productList] = useState(products);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

  // Function to add products to the cart
  const onAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };


  // Function to update quantity of products in the cart
  const onUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      onRemoveFromCart(id);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };
  console.log('onUpdateQuantity function:', onUpdateQuantity);

  // Function to remove products from the cart
 
const onRemoveFromCart = (id) => {
  setCart((prevCart) => prevCart.filter((item) => item.id !== id));
};

  const handleSort = (key) => {
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const getFilteredAndSortedProducts = () => {
    let filtered = productList.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return filtered;
  };

  return (
    <div className="app">
      <Searchsort
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSort={handleSort}
        sortConfig={sortConfig}
      />
      <main>
        <ProductList
          products={getFilteredAndSortedProducts()}
          addToCart={onAddToCart}
        />
        <Cart
  cart={cart}
  onUpdateQuantity={onUpdateQuantity}
  onRemoveFromCart={onRemoveFromCart}  
/>

      </main>
    </div>
  );
}

export default App;
