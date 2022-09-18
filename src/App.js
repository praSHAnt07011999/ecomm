import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';

function App() {
  // const products = useSelector(state=>state.addProduct);
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/addProduct" element={<> <Header /> <AddProduct /> </>} />
          <Route exact path="/cart" element={<> <Header /> <Cart /> </>} />
          <Route exact path="/" element={<>  <Header/> <Home /> </>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
