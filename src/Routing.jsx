import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Collection from "./Components/Collection/Collection";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";

const Routing = ({ shop, Filter, allcatfilter }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop shop={shop} Filter={Filter} allcatfilter={allcatfilter} />
          }
        />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Routing;
