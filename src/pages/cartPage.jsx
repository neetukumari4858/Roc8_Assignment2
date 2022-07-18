import { useCart } from "./../context/cartContext";
import { WatchLater } from "./../watchLater";
const CartPage = () => {
  const { cartState, cartDispatch } = useCart();
  const { cart, watchLater } = cartState;

  return (
    <>
      <h1 classNAme="my_cart_heading">My Cart:{cart.length} </h1>
      <div className="card_container_div">
        {cart.map(
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
              <div className="horizontal_card_container " key={_id}>
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
                  <div className="cart_btn_div">
                    <button
                      className="btn"
                      onClick={() =>
                        cartDispatch({
                          type: "DECREAMENT",
                          payload: { _id, Quentity }
                        })
                      }
                    >
                      -
                    </button>

                    <button className="center_btn">{Quentity}</button>
                    <button
                      className="btn"
                      onClick={() =>
                        cartDispatch({
                          type: "INCREAMENT",
                          payload: { _id, Quentity }
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="handler_btn_div">
                    <button
                      className="cart_handler_btn"
                      onClick={() =>
                        cartDispatch({
                          type: "ADD_SAVE_LATER",
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
                      Save for Later
                    </button>
                    <button
                      className="cart_handler_btn"
                      onClick={() =>
                        cartDispatch({
                          type: "REMOVE_FROM_CART",
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
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      {watchLater.length > 0 ? <WatchLater /> : null}
    </>
  );
};
export { CartPage };
