import { useCart } from "./context/cartContext";

const Card = ({
  _id,
  image,
  brand,
  price,
  Discounted_value,
  size,
  categoryName,
  Quentity
}) => {
  const { cartDispatch } = useCart();
  return (
    <div className="card_container" key={_id}>
      <div>
        <img className="image_size" src={image} alt="T-shirt" />
      </div>
      <p>Brand:{brand}</p>
      <p>Ideal: {categoryName}</p>
      <div>
        {price}Rs. <span>{Discounted_value}Rs./-</span>
      </div>
      <p>Size:{size}</p>
      <button
        className="add_to_cart_btn"
        onClick={() =>
          cartDispatch({
            type: "ADD_TO_CART",
            payload: {
              _id: _id,
              image: image,
              brand: brand,
              price: price,
              Discounted_value: Discounted_value,
              size: size,
              categoryName: categoryName,
              Quentity: Quentity
            }
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
};
export { Card };
