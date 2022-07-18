import { useCart } from "./context/cartContext";
const WatchLater = () => {
  const { cartState, cartDispatch } = useCart();
  const { watchLater } = cartState;

  return (
    <>
      <h1>save for Later:{watchLater.length} </h1>
      <div className="card_container_div">
        {watchLater.map(
          ({
            _id,
            image,
            brand,
            price,
            Discounted_value,
            size,
            categoryName,
            Quentity
          }) => {
            return (
              <div className="horizontal_card_container" key={_id}>
                <div>
                  <img className="image_size" src={image} alt="T-shirt" />
                </div>
                <div>
                  <p>Brand:{brand}</p>
                  <p>
                    Ideal: {categoryName} , Size:{size}{" "}
                  </p>
                  <div>
                    {price}Rs. <span>{Discounted_value}Rs./-</span>
                  </div>
                  <div className="handler_btn_div">
                    <button
                      className="cart_handler_btn"
                      onClick={() =>
                        cartDispatch({
                          type: "MOVE_TO_CART",
                          payload: {
                            _id,
                            image,
                            brand,
                            price,
                            Discounted_value,
                            size,
                            categoryName,
                            Quentity
                          }
                        })
                      }
                    >
                      Move to cart
                    </button>
                    <button
                      className="cart_handler_btn"
                      onClick={() =>
                        cartDispatch({
                          type: "REMOVE_FROM_SAVELATER",
                          payload: {
                            _id,
                            image,
                            brand,
                            price,
                            Discounted_value,
                            size,
                            categoryName,
                            Quentity
                          }
                        })
                      }
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};
export { WatchLater };
