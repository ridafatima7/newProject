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
import AboutUs from "./Components/AboutUs";
import Category from "./Components/Category";
import Login from "./Components/Login";
import ExclusiveScreen from "./Components/ExclusiveScreen";
import SellingScreen from "./Components/SellingScreen";
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
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<TezDelivery />} />
            <Route path="/categories" element={<Category />}></Route>
            <Route path="/categories_page" element={<Categories />} />
            <Route path="/product_detail" element={<Product />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/Exclusive-offers" element={<ExclusiveScreen />}></Route>
            <Route path="/most-selling-offers" element={<SellingScreen />}></Route>

            {/* <Route
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
            /> */}
          </Routes>
        </BrowserRouter> 
        </>
       )}
    </div>
  );
}
export default App;
