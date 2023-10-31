import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Homeproduct from "./Components/Home/Home-product";
import Nav from "./Components/Navbar/Nav";
import Routing from "./Routing";
function App() {
  //show page product
  const [shop, setShop] = useState(Homeproduct);

  //Shop search filter
  const [search, setSearch] = useState("");

  //Cart page
  const [cart, setCart] = useState([]);

  //Shop category Filter
  const Filter = (x) => {
    const catefilter = Homeproduct.filter((product) => {
      return product.cat === x;
    });
    setShop(catefilter);
  };

  const allcatfilter = () => {
    setShop(Homeproduct);
  };

  //shop search filter
  const searchlength = (search || []).length === 0;
  const searchproduct = () => {
    if (searchlength) {
      alert("Please search something!");
      setShop(Homeproduct);
    } else {
      const searchfilter = Homeproduct.filter((x) => {
        return x.cat === search;
      });
      setShop(searchfilter);
    }
  };
  //Cart Page
  const addtocart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist) {
      alert("The item is already added");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Added to cart");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Nav
          search={search}
          setSearch={setSearch}
          searchproduct={searchproduct}
        />
        <Routing
          shop={shop}
          Filter={Filter}
          allcatfilter={allcatfilter}
          addtocart={addtocart}
          cart={cart}
          setCart={setCart}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
