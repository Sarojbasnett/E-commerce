import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Navbar/Nav";
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";
import Homeproduct from "./Components/Home/Home-product";
function App() {
  //show page product
  const [shop, setShop] = useState(Homeproduct);

  //Shop search filter
  const [search, setSearch] = useState("");

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

  return (
    <>
      <BrowserRouter>
        <Nav
          search={search}
          setSearch={setSearch}
          searchproduct={searchproduct}
        />
        <Routing shop={shop} Filter={Filter} allcatfilter={allcatfilter} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
