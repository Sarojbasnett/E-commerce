
import Nav from "./Components/Navbar/Nav"
import Routing from "./Routing"
import { BrowserRouter} from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App
