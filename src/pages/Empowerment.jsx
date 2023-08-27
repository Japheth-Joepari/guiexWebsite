import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageGallery from "../components/ImageGallery";
import em1 from "../assets/images/em1.jpeg";
import em2 from "../assets/images/em2.jpeg";
import em3 from "../assets/images/em3.jpeg";
import fashion1 from "../assets/images/fashion1.jpeg";
import academy8 from "../assets/images/academy8.jpeg";
import academy9 from "../assets/images/academy9.jpeg";
import academy10 from "../assets/images/academy10.jpeg";
import academy12 from "../assets/images/academy12.jpeg";
import academy13 from "../assets/images/academy13.jpeg";
import academy14 from "../assets/images/academy14.jpeg";
import academy15 from "../assets/images/academy15.jpeg";
import academy16 from "../assets/images/academy16.jpeg";
import academy17 from "../assets/images/academy17.jpeg";
import academy18 from "../assets/images/academy18.jpeg";
import academy19 from "../assets/images/academy19.jpeg";
import academy20 from "../assets/images/academy20.jpeg";
import academy21 from "../assets/images/academy21.jpeg";
import academy22 from "../assets/images/academy22.jpeg";
import academy23 from "../assets/images/academy23.jpeg";
import academy24 from "../assets/images/academy24.jpeg";
import academy25 from "../assets/images/academy25.jpeg";
import academy26 from "../assets/images/academy26.jpeg";

export default function Empowerment() {
  const images = [
    em1,
    em2,
    em3,
    fashion1,
    academy24,
    academy25,
    academy26,
    academy8,
    academy9,
    academy10,
    academy12,
    academy13,
    academy14,
    academy15,
    academy16,
    academy17,
    academy18,
    academy19,
    academy20,
    academy21,
    academy22,
    academy23,
  ];
  return (
    <div>
      <Header />
      <div className="about-sec bg-dark text-white">
        <h1 className="goudy p-5">Guiex Fashion & Skill Empowerment</h1>
      </div>
      <div className="container col-12 text-center">
        <div className="container col-12 text-center"></div>
      </div>
      <div>
        <ImageGallery images={images} />
      </div>
      <Footer />
    </div>
  );
}
