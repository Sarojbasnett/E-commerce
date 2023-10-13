import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Collection from "./Components/Collection/Collection";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";

const Routing = ({ shop, Filter, allcatfilter, addtocart , cart, setCart}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home addtocart={addtocart} />} />
        <Route
          path="/shop"
          element={
            <Shop
              shop={shop}
              Filter={Filter}
              allcatfilter={allcatfilter}
              addtocart={addtocart}
            />
          }
        />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </div>
  );
};

export default Routing;
