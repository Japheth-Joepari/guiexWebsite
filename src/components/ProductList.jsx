import { useState } from "react";
import { products } from "./products";
import "../assets/styles/style.css";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Heart,
  ShoppingBag,
  ShoppingCart,
  Star,
} from "react-feather";

export default function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  const addToCart = () => {
    toast.success("Product  added to  cart");
  };

  const addSavedItem = () => {
    toast.success("Product  added to saved Item");
  };
  return (
    <div className="container productContainer container-xm marginTop2Rem">
      <ToastContainer />
      <div className="about-sec bg-dark text-white">
        {/* <img
          src="https://t3.ftcdn.net/jpg/01/28/44/76/360_F_128447604_6deYSrg6bgH2F3YaoU0icdhvxNu4ReDN.jpg"
          alt=""
          srcset=""
          className="img-fluid"
        /> */}
        <h1 className="goudy p-5">Guiex Products</h1>
      </div>
      <div className="d-flex gap-2">
        <div className="rounded">
          <ShoppingBag />
        </div>
        <b>Products</b>
      </div>
      <h4 className="mt-2">
        <b>Explore Our products</b>
      </h4>
      <div className="row justify-content-start d-flex text-start">
        {products.map((product) => (
          <div
            className="col-xl-3 col-lg-4 py-3 col-sm-6 col-12 mb--30"
            key={product.id}
          >
            <div
              className="card border-0 text-decoration-none text-black"
              key={product.id}
            >
              <Link
                to={`#`}
                className="w-100 prodBg"
                onClick={() => openModal(product)}
              >
                <img
                  src={product.image}
                  alt="loading"
                  className="w-100  h-100 object-fit-cover"
                />
              </Link>
              <div className="card-body py-2 bg-white">
                <div className="product-rating py-2">
                  <span className="icon ratingColor">
                    {Array.from({ length: product.stars }, (_, i) => (
                      <Star key={i} />
                    ))}
                  </span>
                  <span className="rating-number">({product.ratings})</span>
                </div>
                <h5 className="title py-2">
                  <b className="greyish">{product.title}</b>
                </h5>
                <div className="product-price-variant gap5">
                  <span className="price current-price smallBoldF">
                    {"₦"}
                    {Number(product.price).toLocaleString("en-NG")}{" "}
                  </span>
                </div>

                <div className="d-flex flex-row justify-content-start align-items-center gap-2 mt-1">
                  <Link
                    to="#"
                    className="cursor-pointer text-decoration-none eyeicon"
                    onClick={() => openModal(product)}
                  >
                    <Eye />
                  </Link>

                  <Link
                    className="  eyeicon darkBlue"
                    onClick={() => addToCart()}
                  >
                    <ShoppingCart />
                  </Link>
                  <Link
                    className="cursor-pointer text-decoration-none fa fa-heart eyeicon red"
                    onClick={() => addSavedItem()}
                  >
                    {" "}
                    <Heart />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Button */}

      <hr />

      <Modal
        show={modalOpen}
        onHide={closeModal}
        size="xl"
        style={{ marginRight: "0.1rem" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <div className="container" key={selectedProduct.id}>
              <div className="row py-6 border-0 shadow-none">
                <div className="col-lg-6 col-sm-10">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="object-fit-cover w-100 h-100"
                  />
                </div>
                <div className="col-lg-6 gap-6 d-flex flex-column gap-2">
                  <h1>
                    <b>{selectedProduct.title}</b>
                  </h1>
                  <h5 className="col-lg-6">
                    <b className="text-dark">
                      ₦{Number(selectedProduct.price).toLocaleString("en-NG")}
                    </b>
                  </h5>
                  <button
                    className="btn btn-primary btn-large"
                    onClick={() => addToCart()}
                  >
                    <ShoppingBag />
                    Add to cart
                  </button>

                  <span className="rating-icon ratingColor">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <i className="fal fa-star" /> ({selectedProduct.ratings})
                    Ratings
                  </span>
                  <div className="text-success">
                    <p>
                      <i className="fa fa-check" /> In stock
                    </p>
                    <p>
                      <i className="fa fa-check" /> Free Delivery Available
                    </p>
                    <p>
                      <i className="fa fa-check" /> Sales 30% Off
                    </p>
                  </div>
                  <hr />
                  <p>{selectedProduct.detail}</p>
                  <div className="d-flex flex-row justify-content-start align-items-center gap-2 mt-1">
                    <Link
                      href="#"
                      onClick={closeModal}
                      className="cursor-pointer bg-white border-0 shadow text-decoration-none fa fa-shopping-basket eyeicon darkBlue"
                    >
                      <EyeOff />{" "}
                    </Link>
                    <Link
                      href="#"
                      onClick={() => addSavedItem()}
                      className="cursor-pointer bg-white border-0 shadow text-decoration-none fa fa-heart eyeicon red"
                    >
                      <Heart />{" "}
                    </Link>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={closeModal}>
            ❌ Close ?
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
