import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="header">
      <Link to="/" className="logo_text">
        <h1 className="header_text_color">Flipcart</h1>
      </Link>

      <Link to="/cartPage" className="cart_text">
        <h4 className="header_text_color">cart</h4>
      </Link>
    </div>
  );
};
export { Navbar };
