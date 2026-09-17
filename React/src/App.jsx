import ProductCard from './ProductCard';
import './App.css';

function App(){
  const products=[
    {
      id: 1,
      name: 'Clavier Mécanique RGB',
      price: 89.99,
      category: 'Informatique',
      isAvailable: true,
    },
    {
      id: 2,
      name: 'Souris Sans Fil Ergonomique',
      price: 45.00,
      category: 'Informatique',
      isAvailable: false,
    },
    {
      id: 3,
      name: 'Casque Audio Bluetooth',
      price: 120.50,
      category: 'Audio',
      isAvailable: true,
    },
    {
      id: 4,
      name: 'Écran 27" 144Hz',
      price: 249.99,
      category: 'Écrans',
      isAvailable: false,
    },
  ];

  return(
    <div className="main-container">
      <h1>Catalogue de Produits</h1>
      <div className="products-grid">
        {products.map((product)=>(
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            isAvailable={product.isAvailable}
          />
        ))}
      </div>
    </div>
  );
}

export default App;