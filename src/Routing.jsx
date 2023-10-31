import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Collection from "./Components/Collection/Collection";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";

const Routing = ({
  shop,
  Filter,
  allcatfilter,
  addtocart,
  cart,
  setCart,
  detailPage,
  detail,
  showDetails,
  closeDetails,
}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home addtocart={addtocart} detailPage={detailPage} />}
        />
        <Route
          path="/shop"
          element={
            <Shop
              shop={shop}
              Filter={Filter}
              allcatfilter={allcatfilter}
              addtocart={addtocart}
              detail={detail}
              showDetails={showDetails}
              closeDetails={closeDetails}
              detailPage={detailPage}
            />
          }
        />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Routing;
