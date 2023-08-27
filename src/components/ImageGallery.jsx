import React, { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import { Facebook, Instagram } from "react-feather";
import logo from "../assets/images/guiexlogo1.jpeg";
import ModalImage from "react-modal-image";

const ImageGallery = ({ images }) => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setShowImageModal(true);
  };

  const closeModal = () => {
    setShowImageModal(false);
  };

  return (
    <div className="container-fluid w-100">
      <Container className="my-5">
        <div className="d-flex flex-wrap justify-content-start">
          {images.map((image, index) => (
            <div key={index} className="col-md-6 col-lg-4 col-xl-4 col-12 mb-3">
              <div
                className="image-container"
                onClick={() => openModal(index)}
                style={{
                  cursor: "pointer",
                  overflow: "hidden",
                  position: "relative",
                  width: "98%",
                  paddingTop: "100%",
                }}
              >
                <img
                  src={image}
                  alt=""
                  className="img-fluid img-thumbnail"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>

      {showImageModal && (
        <Modal show={showImageModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Image Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ModalImage
              small={images[currentIndex]}
              large={images[currentIndex]}
              alt={`Preview`}
              hideDownload={false}
              showRotate={false}
              showZoom={false}
              showFullscreen={false}
              showNextPrev={true}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default ImageGallery;
