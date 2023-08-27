import { Card, Row, Col } from "react-bootstrap";
import fas3 from "../assets/images/fas3.jpg";
import sample1 from "../assets/images/sample1.jpeg";

export default function Catalogue() {
  return (
    <>
      <div className=" d-flex flex-column gap-4 justify-content-center align-items-center p-2 mt-5">
        <h1 className="text-title">Welcome to GUIEX Fashion store</h1>
        <p className="home-text">
          Momos Tula kids is an exquisite fashion brand for Kids. We make
          bespoke kids party ball dresses and casual dresses for kids ages 0 to
          10 years. We believe every child deserves a fairy tale!!!!
        </p>
      </div>

      <div>
        <div className="d-flex flex-row justify-content-center align-items-center gap-2">
          <h1 className="text-title bold bg-white theader text-center py-3">
            Our catalogue
          </h1>
        </div>

        <div className="container">
          <Row xs={2} md={2} lg={3} className="g-4">
            <Col>
              <Card className="text-start borderless h-100 ">
                <Card.Img variant="top" src={sample1} />
                <Card.Body>
                  <Card.Title className="goudy">Women's Fashion</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-start borderless h-100 ">
                <Card.Img
                  variant="top"
                  src={`https://i.pinimg.com/550x/50/71/7c/50717c4ca441e941f4c92ef469097809.jpg`}
                  className="h-100 object-fit-cover"
                />
                <Card.Body>
                  <Card.Title className="goudy">Men's Fashion</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-start borderless h-100 ">
                <Card.Img
                  variant="top"
                  className="h-100 object-fit-cover"
                  src="https://i.pinimg.com/736x/22/7c/33/227c33f8825ba37e4c7e2a96c538342d--african-kids-african-fashion.jpg"
                />
                <Card.Body>
                  <Card.Title className="goudy">Children Fashion</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-start borderless h-100 ">
                <Card.Img
                  variant="top"
                  className="h-100 object-fit-cover"
                  src="https://www.africanprintinfashion.com/wp-content/uploads/2018/08/COVERAfrikrea_interview_apif_7.jpg"
                />
                <Card.Body>
                  <Card.Title className="goudy">African Print</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-start borderless h-100 ">
                <Card.Img
                  variant="top"
                  className="h-100 object-fit-cover"
                  src="https://kipfashion.com/wp-content/uploads/2021/02/African-kids-casual-clothing-Kipfashion-back-scaled.jpg"
                />
                <Card.Body>
                  <Card.Title className="goudy">Kids Casual</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-start borderless h-100 ">
                <Card.Img
                  variant="top"
                  className="h-100 object-fit-cover"
                  src="https://momostula.com/wp-content/uploads/2023/03/Newborn-LG-819x1024.jpg"
                />
                <Card.Body>
                  <Card.Title className="goudy">Newborns</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
