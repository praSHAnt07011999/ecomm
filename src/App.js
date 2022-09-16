import Products from './components/Products';
import AddProduct from './components/AddProduct';
import { useSelector } from 'react-redux';

function App() {
  const products = useSelector(state=>state.addProduct);
  return (
    <div className="App">
      {
        Object.keys(products).length===0 ? <p>No product added! You can add products from Add Product section</p> : <Products />
      }
      <AddProduct />
    </div>
  );
}

export default App;
