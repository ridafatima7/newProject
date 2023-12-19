import "./App.css";
import TezDelivery from "./Components/TezDelivery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import men_banner from "./Components/Images/men.jpeg";
import women_banner from "./Components/Images/shirt.jpeg";
import kids_banner from "./Components/Images/kids.jpeg";
import TNavbar from "./Components/TNavbar";
import ShopCategory from "./Components/ShopCategory";
import { useState,useEffect } from "react";
import Loader from "./Components/Loader";
import Categories from "./Components/Categories";
import Maps from "./Components/Maps";
import Footer from "./Components/Footer";
import Product from "./Components/Product";
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
            <Route path="/" element={<TezDelivery />} />
            <Route path="/home" element={<TezDelivery />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/product_detail" element={<Product />}></Route>
            <Route
              path="/men"
              element={<ShopCategory banner={men_banner} category="men" />}
            />
            <Route
              path="/women"
              element={<ShopCategory banner={women_banner} category="women" />}
            />
            <Route
              path="/kids"
              element={<ShopCategory banner={kids_banner} category="kids" />}
            />
          </Routes>
        </BrowserRouter> 
        </>
       )}
    </div>
  );
}
export default App;
