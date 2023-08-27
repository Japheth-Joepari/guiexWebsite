import { Card, Row, Col } from "react-bootstrap";

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
          <h1 className="text-title bold bg-white theader text-center">
            Our catalogue
          </h1>
        </div>

        <div className="container">
          <Row xs={2} md={2} lg={3} className="g-4">
            <Col>
              <Card className="text-start borderless">
                <Card.Img
                  variant="top"
                  src="https://momostula.com/wp-content/uploads/2023/03/Bell-Dress-LG-819x1024.jpg"
                />
                <Card.Body>
                  <Card.Title className="goudy">Ball Dresses</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-start borderless">
                <Card.Img
                  variant="top"
                  src="https://momostula.com/wp-content/uploads/2023/03/Little-Bride-LG-819x1024.jpg"
                />
                <Card.Body>
                  <Card.Title className="goudy">Little Brides</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-start borderless">
                <Card.Img
                  variant="top"
                  src="https://momostula.com/wp-content/uploads/2023/03/Victorian-Dress-LG-819x1024.jpg"
                />
                <Card.Body>
                  <Card.Title className="goudy">Victorian Dresses</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-start borderless">
                <Card.Img
                  variant="top"
                  src="https://momostula.com/wp-content/uploads/2023/03/African-Print-LG-819x1024.jpg"
                />
                <Card.Body>
                  <Card.Title className="goudy">African Print</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-start borderless">
                <Card.Img
                  variant="top"
                  src="https://momostula.com/wp-content/uploads/2023/03/Kids-Casuals-LG-819x1024.jpg"
                />
                <Card.Body>
                  <Card.Title className="goudy">Kids Casual</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-start borderless">
                <Card.Img
                  variant="top"
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
