import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageGallery from "../components/ImageGallery";
import bride1 from "../assets/images/bride1.jpeg";
import bride2 from "../assets/images/bride2.jpeg";
import bride3 from "../assets/images/bride3.jpeg";
import bride4 from "../assets/images/bride4.jpg";

export default function Bridals() {
  const images = [bride4, bride3, bride1, bride2];
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
        <h1 className="goudy p-5">Guiex Bridals & Apparels</h1>
      </div>
      <div>
        <ImageGallery images={images} />
      </div>
      <Footer />
    </div>
  );
}
