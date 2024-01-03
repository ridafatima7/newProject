import "./App.css";
import TezDelivery from "./Components/TezDelivery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";
import Loader from "./Components/Loader";
import Categories from "./Components/Categories";
import Maps from "./Components/Maps";
import Product from "./Components/Product";
import AboutUs from "./Components/AboutUs";
import Category from "./Components/Category";
import Login from "./Components/Login";
import ExclusiveScreen from "./Components/ExclusiveScreen";
import SellingScreen from "./Components/SellingScreen";
import Sidebar from "./Components/Sidebar";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
function App() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },8000)
  },[])
  return (
      <div className="App">
      {loading ? (
        <Loader />
         ) : ( 
          <>
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Maps />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/home" element={<Sidebar/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/categories" element={<Category />}></Route>
            <Route path="/categories_page" element={<Categories />} />
            <Route path="/product_detail" element={<Product />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/Exclusive-offers" element={<ExclusiveScreen />}></Route>
            <Route path="/most-selling-offers" element={<SellingScreen />}></Route>
          </Routes>
        </BrowserRouter> 
        </>
       )}
    </div>
  );
}
export default App;
