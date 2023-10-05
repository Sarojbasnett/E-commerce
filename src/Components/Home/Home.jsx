import "./Home.scss";
import { Link } from "react-router-dom";
import Homeproduct from "./Home-product";
import { useState } from "react";

//importing icons
import { AiFillEye, AiFillHeart } from "react-icons/ai";
const Home = () => {
  const[trendingProduct, setTrendingProduct]= useState(Homeproduct);
  return (
    <div>
      <div className="home">
        <div className="top-banner">
          <div className="content">
            <h3>silver almunium</h3>
            <h2>Apple watch</h2>
            <p>30% off at your first order</p>
            <Link to="/shop" className="link">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="trending">
          <div className="container">
            <div className="left-box">
              <div className="header">
                <div className="heading">
                  <h2>trending product</h2>
                </div>
                <div className="cate">
                  <h3>New</h3>
                  <h3>Featured</h3>
                  <h3>Top Selling</h3>
                </div>
              </div>
              <div className="products">

                <div className="container">
                  {
                    trendingProduct.map((curElm)=>{
                      return (
                        <>
                          <div className="box" key={curElm.id}>
                            <div className="img-box">
                              <img src={curElm.image} alt="" />
                              <AiFillEye />
                              <div className="icon">
                                <div className="icon-box">
                                  <AiFillEye />
                                </div>
                              </div>
                              <div className="icon">
                                <div className="icon-box">
                                  <AiFillHeart />
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  }
                </div>
              </div>
            </div>
            <div className="right-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
