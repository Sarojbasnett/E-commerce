import "./shop.scss";

//importing images
import shopleft from "../../assets/shop_left.avif";
import shoptop from "../../assets/shop_top.webp";

//importing icons
import { AiFillHeart, AiFillEye } from "react-icons/ai";
const Shop = ({ shop, Filter, allcatfilter }) => {
  return (
    <>
      <div className="shop">
        <h2>shop</h2>
        <p>Home . shop</p>
        <div className="container">
          <div className="left-box">
            <div className="category">
              <div className="header">
                <h3>all categories</h3>
              </div>
              <div className="box">
                <ul>
                  <li onClick={()=> allcatfilter()}># all product</li>
                  <li onClick={() => Filter("tv")}># Tv</li>
                  <li onClick={() => Filter("laptop")}># Laptop</li>
                  <li onClick={() => Filter("watch")}># watch</li>
                  <li onClick={() => Filter("speaker")}># speaker</li>
                  <li onClick={() => Filter("electronics")}># electronics</li>
                  <li onClick={() => Filter("headphone")}># headphone </li>
                  <li onClick={() => Filter("phone")}># phone</li>
                </ul>
              </div>
            </div>
            <div className="banner">
              <div className="img-box">
                <img src={shopleft} alt="" />
              </div>
            </div>
          </div>
          <div className="right-box">
            <div className="banner">
              <div className="img-box">
                <img src={shoptop} alt="" />
              </div>
            </div>
            <div className="product-box">
              <h2>Shop product</h2>
              <div className="product-container">
                {shop.map((curElm) => {
                  return (
                    <>
                      <div className="box" key={curElm.id}>
                        <div className="image-box">
                          <img src={curElm.image} alt="" />
                          <div className="icon">
                            <li>
                              <AiFillHeart />
                            </li>
                            <li>
                              <AiFillEye />
                            </li>
                          </div>
                        </div>
                        <div className="detail">
                          <h3>{curElm.Name}</h3>
                          <p>${curElm.price}</p>
                          <button>Add To Cart</button>
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
    </>
  );
};

export default Shop;
