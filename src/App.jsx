import { useState } from 'react'
import productsData from './data';

function App() {
  const [products, setProducts] = useState(productsData); 
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='App' 
      style={{
        backgroundColor: 'lightcyan',
        margin: 0,
        padding: 20,
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Product Catalog</h1> 

      <input 
        type="text" 
        placeholder='Search for an item...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: 200,
          height: 30,
          border: 'none',
          borderRadius: 8,
          marginBottom: 20,
        }}
      />

{filteredProducts.length === 0 ? (
  <p style={{ color: 'red', fontWeight: 'bold' }}>No products found.</p>
) : (
  filteredProducts.map((product) => (
    <div key={product.id}>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: R{product.price}</p>
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  ))
)}

    </div>
  );
}

export default App;
