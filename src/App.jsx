import { useState } from 'react'


function App() {
 const [Products, setProducts] = useState([{

 }])

  return (
    <>
     <div className='App' style={{


     }}>
      {products.map((product) => (
      <div key={product.id}>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: R{product.price}</p>
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  ))}
</div>

    </>
  )
}

export default App
