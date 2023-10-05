import "./Home.scss";
import { Link } from "react-router-dom";
import Homeproduct from "./Home-product";
import { useState } from "react";

//importing icons
import { AiFillEye, AiFillHeart } from "react-icons/ai";

//importing images
import T1 from '../../assets/T1.avif';


const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
  const filtercate = (x) => {
    const filterProduct = Homeproduct.filter((curElm) => {
      return curElm.type === x;
    });
    setTrendingProduct(filterProduct);
  };

  //All Trending Product
  const allTrendingProduct = () => {
    setTrendingProduct(Homeproduct);
  };
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
                  <h2 onClick={() => allTrendingProduct()}>trending product</h2>
                </div>
                <div className="cate">
                  <h3 onClick={() => filtercate("new")}>New</h3>
                  <h3 onClick={() => filtercate("featured")}>Featured</h3>
                  <h3 onClick={() => filtercate("top")}>Top Selling</h3>
                </div>
              </div>
              <div className="products">
                <div className="container">
                  {trendingProduct.map((curElm) => {
                    return (
                      <>
                        <div className="box" key={curElm.id}>
                          <div className="img-box">
                            <img src={curElm.image} alt="" />
                            <div className="icon">
                              <div className="icon-box">
                                <AiFillEye />
                              </div>
                              <div className="icon-box">
                                <AiFillHeart />
                              </div>
                            </div>
                          </div>
                          <div className="info">
                            <h3>{curElm.Name}</h3>
                            <p>${curElm.price}</p>
                            <button className="btn">Add To Cart</button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="right-box">
              <div className="container">
                <div className="testimonial">
                  <div className="head">
                    <h3>our testimonial</h3>
                  </div>
                  <div className="details">
                    <div className="img-box">
                      <img src={T1} alt="testimonial" />
                    </div>
                    <div className="info">
                      <h3>Anish Pokhrel</h3>
                      <h4>Web Developer</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
