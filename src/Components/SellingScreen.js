import React,{useState,useEffect} from 'react'
import TNavbar from './TNavbar'
import Footer from './Footer';
import {Link} from 'react-router-dom';
import api from "./apis";
import Items from './Items';
const SellingScreen = () => {
    const [mostSellingOffers,setSelling]=useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${api}/get_martProducts?mart_id=1&most_selling=true`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                console.log(result);
                setSelling(result.data);
            } catch (error) {
                console.log(error);
            } finally {
            }
        };

        fetchData();
    }, []);
  return (
    <div>
      <TNavbar />
            <section className='container pt pb'>
            <div className="pt">
            <h5 className="main_heading">Most Selling Screen</h5>
          </div>
          <div className="pt">
           
            <div className="exclusive_product">
              {mostSellingOffers.length > 0
                ? mostSellingOffers.map((item, i) => (
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

          </div>
            </section>
            <Footer />
    </div>
  )
}

export default SellingScreen
