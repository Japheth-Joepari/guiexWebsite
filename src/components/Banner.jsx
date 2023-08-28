import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../assets/images/banner01.png";
import banner2 from "../assets/images/030.png";
import banner3 from "../assets/images/000.png";

export default function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="carousel d-block w-100"
          // Adjust the height as needed
          src={banner2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel d-block w-100"
          // Adjust the height as needed
          src={banner3}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel d-block w-100"
          // Adjust the height as needed
          src={banner1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
