import React,{useState,useEffect} from 'react'
import TNavbar from "./TNavbar";
import {Button} from "reactstrap";
import api from "./apis";
import Exclusive from "./Exclusive";
const Categories = () => {
  const search = window.location.search;
	const params = new URLSearchParams(search);
  console.log(params);
	const cid = params.get('categoryId');
  const mart_id=params.get('martId')
  const [DataProduct,setData]=useState([]);
  const [Products,setProducts]=useState([]);
  const [dataset,setDataset]=useState([]);
  const [DataState,setDataState]=useState([]);
  useEffect(() => {
  const fetchData = async () => {
    try {
      const url=`${api}/get_martCategories?mart_id=${mart_id}&cid=${cid}`;
      console.log(url);
      const responseCategories = await fetch(`${api}/get_martCategories?mart_id=${mart_id}&cid=${cid}`);
      if (!responseCategories.ok) {
        throw new Error(`HTTP error! Status: ${responseCategories.status}`);
      }
      const resultCategories = await responseCategories.json();
      console.log(resultCategories);
      setData(resultCategories.data);
      console.log(resultCategories.data);
      setDataState(resultCategories.data);
      console.log(resultCategories.data);
    } catch (error) {
      console.log(error);
    }

    try {
      const url2=`${api}/get_martProducts?mart_id=1`;
      console.log(url2);
      const responseProducts = await fetch(`${api}/get_martProducts?mart_id=1`);
      if (!responseProducts.ok) {
        throw new Error(`HTTP error! Status: ${responseProducts.status}`);
      }
      const resultProducts = await responseProducts.json();
      // const filteredProducts = resultProducts.data.filter((product) => {
      //   return (
      //     DataState.some((category) => category.cid === product.cid 
      //     )
      //   );
      // });
      setDataset(resultProducts.data);
      setProducts(resultProducts.data);
      console.log(resultProducts);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);

  const FilterCat = (id) => {
    const filteredProducts = dataset.filter((product) => {
      return( product.sid==id);
    });

    console.log(filteredProducts);
    setProducts(filteredProducts);
  };
  return (
    <>
    <TNavbar />
    <section className='container'>
      <div className='pt'>
      {DataProduct.map((category) => (
          <div key={category.cid}>
            <h5 className="main_heading">{category.name}</h5>
            <div className='pt'>
              {category.sub_categories.map((subcategory) => (
                <Button active={true} className='subcategory pl' onClick={(e)=>FilterCat(subcategory.sid)} key={subcategory.sid}>{subcategory.name}</Button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='pt'>
      <div className="popular-exclusive">
      {Products
       .filter(item => DataProduct.some(category => category.cid === item.cid))
        .map((item, i) =>  (
                <Exclusive
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  exclusivePrice={item.exclusivePrice}
                  price={item.price}
                />
            ))}
      </div>
      </div>
    </section>
    </>
  )
}

export default Categories
