import data from "./data.json";
import { Card } from "./card";

const ProductListing = () => {
  return (
    <>
      <h1 className="product_heading">Product ({data.length})</h1>
      <div className="card_outer_container">
        {data.map(
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
              <Card
                _id={_id}
                image={image}
                brand={brand}
                price={price}
                Discounted_value={Discounted_value}
                size={size}
                categoryName={categoryName}
                Quentity={Quentity}
              />
            );
          }
        )}
      </div>
    </>
  );
};
export { ProductListing };
