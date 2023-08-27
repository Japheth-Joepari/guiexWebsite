import { Link } from "react-router-dom";
import { Facebook, Instagram } from "react-feather";
import logo from "../assets/images/logg.png"; // Assuming the path is correct

export default function Footer() {
  return (
    <div className="container-fluid w-100 footer-bottom">
      <div className="footerBg d-flex text-start flex-lg-row flex-xl-row flex-md-row flex-column flex-xs-col flex-sm-column justify-content-center py-3 p-5    gap-footer ">
        <div className="">
          <img src={logo} alt="" className="footerImg" />
        </div>

        <div>
          <h4>
            <b>The Store</b>
          </h4>
          <div>
            <p>Mon – Fri : 9am – 5pm</p>
            <p>Saturday: 10am – 5pm</p>
            <p>Sunday: Closed</p>
          </div>

          <p>Phone: +234 802 5505 210 | +234 809 7859489</p>
        </div>

        <div>
          <h4>
            <b>Info</b>
          </h4>

          <div className="d-flex flex-column gap-2">
            <Link className="text-decoration-none text-black" to="/about">
              {" "}
              About Us
            </Link>
            <Link className="text-decoration-none text-black" to="/contact">
              {" "}
              Contact Us
            </Link>
            <Link className="text-decoration-none text-black" to="/academy">
              {" "}
              Fashion Academy
            </Link>
            <Link className="text-decoration-none text-black" to="/empowerment">
              {" "}
              Skill Empowerment
            </Link>
            <Link className="text-decoration-none text-black" to="/bridals">
              {" "}
              Bridal and Aparels
            </Link>
          </div>
        </div>

        <div>
          <h4>
            <b>Follow us</b>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-dark rounded-circle p-2 btn-sm">
                <Facebook />
              </button>
              <button className="btn btn-outline-dark rounded-circle p-2 btn-sm">
                <Instagram />
              </button>
            </div>
          </h4>
        </div>
      </div>

      <div className="d-flex flex-column py-5 justify-content-center align-items-center">
        <p>
          © Copyright 2023 GUIEX | Design by{" "}
          <a href="https://joeparicodes.vercel.app">joeparicodes</a>
        </p>
        <hr className="w-75" />
      </div>
    </div>
  );
}
