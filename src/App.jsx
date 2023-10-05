
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Navbar/Nav"
import Routing from "./Routing"
import { BrowserRouter} from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routing />
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App
