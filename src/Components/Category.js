import React, { useEffect, useState } from 'react'
import TNavbar from './TNavbar'
import Footer from './Footer'
import api from "./apis";
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";
const Category = () => {
    const [DataProduct, setData] = useState([]);
    const fetchData = async () => {
        try {
            const response = await fetch(`${api}/get_martCategories?mart_id=1`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            console.log(result);
            setData(result.data);
        } catch (error) {
            console.log(error);
        } finally {
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (   
        <div>
        <TNavbar />
        <section className='container pt'>
          {DataProduct.map((item, index) => (
            <div key={index}>
              <div className="pb heading-box">
                <h5 className="main_heading">{item.name}</h5>
              </div>
              <div className="products_grid_Cat pb">
              {item.sub_categories.slice(0, 4).map((subCategory, subIndex) => (
                <Link to={`categories_page?martId=1&categoryId=${item.cid}`} key={subIndex} className="linkstyle">
                  <div className="products_grid_item">
                  <img src={subCategory.image} alt="img" />
              <p>{subCategory.name}</p>
            </div>
          </Link>
        ))}
              </div>
            </div>
          ))}
        </section>
        <Footer />
      </div>      
    )
}

export default Category
