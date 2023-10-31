import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./Cart.scss";

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  //Increase Quantity
  const incqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty + 1 }
          : curElm;
      })
    );
  };

  //Decrease Quantity
  const decqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty - 1 }
          : curElm;
      })
    );
  };

  //Removing Product
  const removeproduct = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist.qty > 0) {
      setCart(
        cart.filter((curElm) => {
          return curElm.id !== product.id;
        })
      );
    }
  };

  //Calculating Total
  const total = cart.reduce((price, item) => price + item.qty * item.price, 0);

  return (
    <div className="cart">
      <h3>#cart</h3>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your shopping cart is empty</h2>
          <button onClick={() => navigate("/shop")}>Shop now</button>
        </div>
      ) : (
        <div className="container">
          {cart.map((curElm, index) => (
            <div className="box" key={index}>
              <div className="img-box">
                <img src={curElm.image} alt="" />
              </div>
              <div className="details">
                <div className="info">
                  <h4>{curElm.cat}</h4>
                  <h3>{curElm.Name}</h3>
                  <p>Price: ${curElm.price}</p>
                  <p>Total: ${curElm.price * curElm.qty}</p>
                </div>
                <div className="quantity">
                  <button onClick={() => incqty(curElm)}>+</button>
                  <input type="number" value={curElm.qty} />
                  <button onClick={() => decqty(curElm)}>-</button>
                </div>
                <div className="icon">
                  <li onClick={() => removeproduct(curElm)}>
                    <AiOutlineClose />
                  </li>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="buttom">
        {cart.length > 0 && (
          <>
            <div className="total">
              <h4>Total: ${total}</h4>
            </div>
            <button>Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
