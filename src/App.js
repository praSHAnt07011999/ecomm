import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { AddProduct } from './components/seller/AddProduct';
import { Cart } from './components/buyer/Cart';
import { SellerHome } from './components/seller/SellerHome';
import { BuyerHome } from './components/buyer/BuyerHome';
import { SellerHeader } from './components/seller/SellerHeader';
import { Orders } from './components/seller/Orders';
import { BuyerHeader } from './components/buyer/BuyerHeader';
import { AvailableProducts } from './components/buyer/availableProducts';
import { BuyerOrders } from './components/buyer/BuyerOrders';
import { Checkout } from './components/buyer/Checkout';
import { UpdateProduct } from './components/seller/UpdateProduct';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/addProduct" element={<> <SellerHeader /> <AddProduct /> </>} />
          <Route exact path="/shopProducts" element={<> <BuyerHeader /> <AvailableProducts /> </>} />
          <Route exact path="/cart" element={<> <BuyerHeader /> <Cart /> </>} />
          <Route exact path="/sellerHome" element={<><SellerHeader/> <SellerHome/></>}/>
          <Route exact path="/orders" element={<><SellerHeader/> <Orders/></>}/>
          <Route exact path="/buyerHome" element={<><BuyerHeader/> <BuyerHome/></>}/>
          <Route exact path="/buyerOrders" element={<><BuyerHeader/> <BuyerOrders/></>}/>
          <Route exact path="/checkout" element={<><BuyerHeader/> <Checkout/></>}/>
          <Route exact path="/updateProduct" element={<><SellerHeader/> <UpdateProduct/></>}/>
          <Route exact path="/" element={<>  <Header/> <Home /> </>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
