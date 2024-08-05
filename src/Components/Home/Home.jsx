import "./Home.scss";
import { Link } from "react-router-dom";
import Homeproduct from "./Home-product";
import { useEffect, useState } from "react";

//importing icons
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogoFacebook, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";

//importing images
import T1 from "../../assets/T1.avif";
import banner1 from "../../assets/Multi-Banner-1.avif";
import banner2 from "../../assets/Multi-banner-2.avif";
import banner3 from "../../assets/Multi-Banner-3.Webp";
import banner4 from "../../assets/Multi-banner-4.avif";
import banner5 from "../../assets/Multi-banner-5.Webp";
import ItemDetails from "../../Common/ItemDetails";

const Home = ({ addtocart }) => {
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeatureProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);

  const [showDetails, setShowDetails] = useState(null);

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

  //Product Type
  useEffect(() => {
    productcategory();
  }, []);

  const productcategory = () => {
    //New Product
    const newcategory = Homeproduct.filter((x) => {
      return x.type === "new";
    });
    setNewProduct(newcategory);

    //Featured Product
    const featuredcategory = Homeproduct.filter((x) => {
      return x.type === "featured";
    });
    setFeatureProduct(featuredcategory);

    //Top Product
    const topcategory = Homeproduct.filter((x) => {
      return x.type === "top";
    });
    setTopProduct(topcategory);
  };

  const detailPage = (product) => {
    // const detaildata = [{ product }];
    // const productdetail = detaildata[0]["product"];
    // setDetail(productdetail);
    setShowDetails(product);
  };

  const url = 'https://s.daraz.com.np/s.Z0B3'
  return (
    <div>
      {showDetails && (
        <ItemDetails
          detail={showDetails}
          closeDetails={() => setShowDetails(null)}
        />
      )}
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
                              <div
                                className="icon-box"
                                onClick={() => detailPage(curElm)}
                              >
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
                            <button
                              className="btn"
                              onClick={() => addtocart(curElm)}
                            >
                              Add To Cart
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="div">
                  <button>Show More </button>
                </div>
              </div>
            </div>
            <div className="right-box">
              <div className="right-container">
                <div className="testimonial">
                  <div className="head">
                    <h3>our testimonial</h3>
                  </div>
                  <div className="details">
                    <div className="img-box">
                      <img src={T1} alt="testimonial" />
                    </div>
                    <div className="info">
                      <h3>Anisha Pokhrel</h3>
                      <h4>Happy customer</h4>
                      <p>
                        I recently purchased a laptop from Royal Institute, and I couldn’t be happier with my experience! The website was easy to navigate, the prices were competitive, and the customer service was exceptional. My laptop arrived quickly and in perfect condition. I highly recommend Royal Institute for all your tech needs!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="newsletter">
                  <div className="head">
                    <h3>newsletter</h3>
                  </div>
                  <div className="form">
                    <p>join our mailing list</p>
                    <input
                      type="email"
                      placeholder="E-mail"
                      autoComplete="off"
                    />
                    <button>Subscribe</button>
                    <div className="icon-box">
                      <div className="icon" onCLick={() => window.open(url, '_blank', 'noopener,noreferrer')}>
                        <img src="https://img.lazcdn.com/us/domino/1ee015d6a5c62fd0339c88c657c1c183.jpg_2200x2200q80.jpg_.webp" style={{objectFit: 'fill', width: '16px' height: '16px'}} />
                      </div>
                      <div className="icon">
                        <BiLogoTwitter />
                      </div>
                      <div className="icon">
                        <BiLogoYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="container">
            <div className="left-box">
              <div className="box">
                <img src={banner1} alt="banner" />
              </div>
              <div className="box">
                <img src={banner2} alt="banner" />
              </div>
            </div>
            <div className="right-box">
              <div className="top">
                <img src={banner3} alt="banner" />
                <img src={banner4} alt="banner" />
              </div>
              <div className="bottom">
                <img src={banner5} alt="banner" />
              </div>
            </div>
          </div>
        </div>
        <div className="product-type">
          <div className="container">
            <div className="box">
              <div className="header">
                <h2>New Product</h2>
              </div>
              {newProduct.map((curElm) => {
                return (
                  <>
                    <div className="product-box">
                      <div className="img-box">
                        <img src={curElm.image} alt="" />
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>${curElm.price}</p>
                        <div className="icon">
                          <button onClick={() => detailPage(curElm)}>
                            {" "}
                            <AiFillEye />
                          </button>
                          <button>
                            <AiFillHeart />
                          </button>
                          <button onClick={() => addtocart(curElm)}>
                            <AiOutlineShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="box">
              <div className="header">
                <h2>Featured Product</h2>
              </div>
              {featuredProduct.map((curElm) => {
                return (
                  <>
                    <div className="product-box">
                      <div className="img-box">
                        <img src={curElm.image} alt="" />
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>${curElm.price}</p>
                        <div className="icon">
                          <button>
                            {" "}
                            <AiFillEye />
                          </button>
                          <button>
                            <AiFillHeart />
                          </button>
                          <button onClick={() => addtocart(curElm)}>
                            <AiOutlineShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="box">
              <div className="header">
                <h2>Top Product</h2>
              </div>
              {topProduct.map((curElm) => {
                return (
                  <>
                    <div className="product-box">
                      <div className="img-box">
                        <img src={curElm.image} alt="" />
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>${curElm.price}</p>
                        <div className="icon">
                          <button>
                            {" "}
                            <AiFillEye />
                          </button>
                          <button>
                            <AiFillHeart />
                          </button>
                          <button onClick={() => addtocart(curElm)}>
                            <AiOutlineShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
