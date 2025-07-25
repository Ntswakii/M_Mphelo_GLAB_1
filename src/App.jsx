import { useState } from 'react';
import productsData from './data';

function App() {
  const [products] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories for dropdown
  const categories = ['All', ...new Set(productsData.map(p => p.category))];

  // Filter logic
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className='App' 
      style={{
        backgroundColor: 'lightcyan',
        margin: 0,
        padding: 20,
        fontFamily: 'sans-serif',
        minHeight: '100vh'
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Product Catalog</h1> 

      {/* Search input */}
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
          marginRight: 10
        }}
      />

      {/* Category dropdown */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{
          width: 200,
          height: 30,
          border: 'none',
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>

      {/* Product cards container */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginTop: 20 }}>
        {filteredProducts.length === 0 ? (
          <p style={{ color: 'red', fontWeight: 'bold' }}>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div 
              key={product.id} 
              style={{
                border: '1px solid #ccc',
                borderRadius: 10,
                padding: 15,
                backgroundColor: '#fff',
                boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
                width: 300
              }}
            >
              <h3>{product.name}</h3>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Price:</strong> R{product.price}</p>
              <p style={{ color: product.inStock ? 'green' : 'red' }}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
