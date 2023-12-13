import React, { useState, useEffect } from "react";
import TNavbar from "./TNavbar";
import { Button } from "reactstrap";
import api from "./apis";
import Exclusive from "./Exclusive";
const Categories = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  //console.log(params);
  const cid = params.get("categoryId");
  const mart_id = params.get("martId");
  const [DataProduct, setData] = useState("");
  const [Products, setProducts] = useState([]);
  const [dataset, setDataset] = useState([]);
  //const [DataState, setDataState] = useState([]);
  const get_Products = async (cid, sid) => {
    console.log(cid, sid);

    try {
      const get_mart_product_url = `${api}/get_martProducts?mart_id=1&cid=${cid}&sid=${sid}&limit=10&skip=0`;
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

    // try {
    //   const url2 = `${api}/get_martProducts?mart_id=1`;
    //   console.log(url2);
    //   const responseProducts = await fetch(`${api}/get_martProducts?mart_id=1`);
    //   if (!responseProducts.ok) {
    //     throw new Error(`HTTP error! Status: ${responseProducts.status}`);
    //   }
    //   const resultProducts = await responseProducts.json();
    //   // const filteredProducts = resultProducts.data.filter((product) => {
    //   //   return (
    //   //     DataState.some((category) => category.cid === product.cid
    //   //     )
    //   //   );
    //   // });
    //   //setDataset(resultProducts.data);
    //   setProducts(resultProducts.data);
    //   console.log(resultProducts);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const FilterCat = (id) => {
    get_Products(cid, id);
  };
  return (
    <>
      <TNavbar />
      {DataProduct ? (
        <section className="container">
          <div className="pt">
            <h5 className="main_heading">{DataProduct.name}</h5>
            <div className="pt">
              {DataProduct.sub_categories.map((subcategory) => (
                <Button
                  active={true}
                  className="subcategory pl"
                  onClick={(e) => FilterCat(subcategory.sid)}
                  key={subcategory.sid}
                >
                  {subcategory.name}
                </Button>
              ))}
            </div>
          </div>
          <div className="pt">
            <div className="popular-exclusive">
              {Products.length > 0
                ? Products.map((item, i) => (
                    <Exclusive
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
        </section>
      ) : null}
    </>
  );
};

export default Categories;
