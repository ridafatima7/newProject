import React, { useState, useEffect } from "react";
import TNavbar from "./TNavbar";
import { Button } from "reactstrap";
import InfiniteScroll from 'react-infinite-scroll-component';
import api from "./apis";
import {Link} from "react-router-dom";
import Exclusive from "./Exclusive";
const Categories = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const cid = params.get("categoryId");
  const mart_id = params.get("martId");
  const [DataProduct, setData] = useState("");
  const [Products, setProducts] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [page,setPageNo]=useState(0);
  const [dataset, setDataset] = useState([]);
  //const [DataState, setDataState] = useState([]);
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const FilterCat = (id) => {
    get_Products(cid, id);
    fetchScrollData(cid,id);
    setSelectedSubcategory((prev) => (prev === id ? prev : id));

  };
  const fetchScrollData= async (cid,sid)=>{
    setPageNo(page+5);
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
          <div className="pt">
           
            <div className="popular-exclusive">
              {Products.length > 0
                ? Products.map((item, i) => (
                  <Link  to={`/product_detail?martId=1&productId=${item.id}`} >
                  <Exclusive
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

          </div>
        </section>
      ) : null}
      <InfiniteScroll
        dataLength={Products.length}
        next={fetchScrollData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      // below props only if you need pull down functionality
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
        {/* {items} */}
      </InfiniteScroll>
    </>
  );
};

export default Categories;
