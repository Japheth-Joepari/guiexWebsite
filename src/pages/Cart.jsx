import { ShoppingBag, ShoppingCart } from "react-feather";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div>
      <Header />
      <div className="about-sec bg-dark text-white">
        {/* <img
          src="https://t3.ftcdn.net/jpg/01/28/44/76/360_F_128447604_6deYSrg6bgH2F3YaoU0icdhvxNu4ReDN.jpg"
          alt=""
          srcset=""
          className="img-fluid"
        /> */}
        <h1 className="goudy p-5">
          View Cart Items <ShoppingCart />
        </h1>
      </div>
      <div className="p-5">
        <h4 className="p-5">
          Cart is Empty ...
          <Link to="/" className="text-decoration-none">
            Back to Home 😁
          </Link>
        </h4>
      </div>
      <Footer />
    </div>
  );
}
