import { Carousel } from "react-bootstrap";

export default function Banner() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://momostula.com/wp-content/uploads/2023/03/Banner.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://momostula.com/wp-content/uploads/2023/03/Rectangle-34.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://momostula.com/wp-content/uploads/2023/03/Rectangle-35.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
