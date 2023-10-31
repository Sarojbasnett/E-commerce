
import { AiOutlineClose } from 'react-icons/ai';


const ItemDetails = ({detail={},closeDetails,addtocart}) => {
  return (
    <div>
      <div className="product-details">
        <button className="close-btn" onClick={closeDetails}>
          <AiOutlineClose />
        </button>
        <div className="container">
          <div className="img_box">
            <img src={detail?.image} alt=""></img>
          </div>
          <div className="info">
            <h4># {detail?.cat}</h4>
            <h2>{detail?.Name}</h2>
            <p>
              A Searchcreen Everyone Will Love: Whether your family is streaming
              or video chatting with friends tablet A8...
            </p>
            <h3>${detail?.price}</h3>
            <button onClick={() => addtocart(detail)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails
