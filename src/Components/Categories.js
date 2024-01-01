import React, { useState, useEffect } from "react";
import TNavbar from "./TNavbar";
import InfiniteScroll from 'react-infinite-scroll-component';
import api from "./apis";
import {Link} from "react-router-dom";
import Items from "./Items";
const Categories = () => {
  let sid=0;
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const cid = params.get("categoryId");
  const mart_id = params.get("martId");
  const [DataProduct, setData] = useState("");
  const [Products, setProducts] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [page,setPageNo]=useState(0);
  const get_Products = async (cid, sid) => {
    console.log(cid, sid);
    try {
      const get_mart_product_url = `${api}/get_martProducts?mart_id=1&cid=${cid}&sid=${sid}&limit=5&skip=${page}`;
      const products = await fetch(get_mart_product_url);
      if (!products.ok) {
        throw new Error(`HTTP error! Status: ${products.status}`);
      }
      const resultProducts = await products.json();
      console.log(resultProducts);
      setProducts(resultProducts.data ? resultProducts.data : []);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchData = async () => {
    try {
      const url = `${api}/get_martCategories?mart_id=${mart_id}&cid=${cid}`;
      console.log(url);
      const responseCategories = await fetch(
        `${api}/get_martCategories?mart_id=${mart_id}&cid=${cid}`
      );
      if (!responseCategories.ok) {
        throw new Error(`HTTP error! Status: ${responseCategories.status}`);
      }
      const resultCategories = await responseCategories.json();
      setData(resultCategories.data[0]);
      console.log(resultCategories.data[0]);
      get_Products(cid, resultCategories.data[0].sub_categories[0]["sid"]);
      fetchScrollData(cid, resultCategories.data[0].sub_categories[0]["sid"]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const FilterCat = (id) => {
    get_Products(cid, id);
    sid=id;
    // fetchScrollData(cid,id);
    setSelectedSubcategory((prev) => (prev === id ? prev : id));
  };
  const fetchScrollData= async (cid,sid)=>{
    setPageNo(page+5);
    const get_Products = async (cid, sid) => {
      console.log(cid, sid);
      try {
        const get_mart_product_url = `${api}/get_martProducts?mart_id=1&cid=7976&sid=19886&limit=5&skip=${page}`;
        const products = await fetch(get_mart_product_url);
        if (!products.ok) {
          throw new Error(`HTTP error! Status: ${products.status}`);
        }
        const resultProducts = await products.json();
        console.log(resultProducts);
        setProducts(resultProducts.data ? resultProducts.data : []);
      } catch (err) {
        console.log(err);
      }
    };
    get_Products(cid,sid);
  }
  return (
    <>
      <TNavbar />
      {DataProduct ? (
        <section className="container">
          <div className="pt">
            <h5 className="main_heading">{DataProduct.name}</h5>
            <div className="pt">
              {DataProduct.sub_categories.map((subcategory) => (
                <button
                  active={true}
                  className={`subcategory pl ${selectedSubcategory === subcategory.sid ? 'subcat' : ''}`}
                  onClick={(e) => FilterCat(subcategory.sid)}
                  key={subcategory.sid}
                >
                  {subcategory.name}
                </button>
              ))}
            </div>
          </div>
          {/* <div className="pt">
            <div className="exclusive_product">
              {Products.length > 0
                ? Products.map((item, i) => (
                  <Link  to={`/product_detail?martId=1&productId=${item.id}`} className="linkstyle" >
                  <Items
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    exclusivePrice={item.exclusivePrice}
                    price={item.price}
                  />
                   </Link>
                ))
                : null}
            </div>

          </div> */}
        </section>
      ) : null}
      <InfiniteScroll
        dataLength={20 }
        // next={fetchScrollData}
        next={() => fetchScrollData(cid, sid)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      // refreshFunction={this.refresh}
      // pullDownToRefresh
      // pullDownToRefreshThreshold={50}
      // pullDownToRefreshContent={
      //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
      // }
      // releaseToRefreshContent={
      //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
      // }
      >
         <div className="pt">
           <div className="exclusive_product">
         {Products.length > 0
                ? Products.map((item, i) => (
                  <Items
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    exclusivePrice={item.exclusivePrice}
                    price={item.price}
                  />
                ))
                : null}
        </div>
        </div>
        {/* {Products} */}
      </InfiniteScroll>
    </>
  );
};

export default Categories;
