import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageGallery from "../components/ImageGallery";
import academy1 from "../assets/images/academy1.jpeg";
import academy2 from "../assets/images/academy2.jpeg";
import academy3 from "../assets/images/academy3.jpeg";
import academy4 from "../assets/images/academy4.jpeg";
import academy5 from "../assets/images/academy5.jpeg";
import academy6 from "../assets/images/academy6.jpeg";
import academy7 from "../assets/images/academy7.jpeg";

import sample1 from "../assets/images/sample1.jpeg";
import sample2 from "../assets/images/sample2.jpeg";
import sample3 from "../assets/images/sample3.jpeg";
import sample4 from "../assets/images/sample4.jpeg";
import sample5 from "../assets/images/sample5.jpeg";
import sample6 from "../assets/images/sample6.jpeg";

import academy11 from "../assets/images/academy11.jpeg";

import vid from "../assets/videos/academyvideo.mp4";

export default function Academy() {
  const images = [
    academy1,
    sample4,
    academy2,
    sample1,
    academy3,
    academy4,
    sample2,
    academy5,
    sample3,
    academy6,
    academy7,
    sample5,
    sample6,

    academy11,
  ];
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
        <h1 className="goudy p-5">Guiex Fashion Academy</h1>
      </div>
      <div className="container col-12 text-center">
        <div className="container col-12 text-center">
          <video
            src={vid}
            className="mt-2 shadow-lg" // Apply shadow style
            style={{
              border: "12px solid white",
              borderRadius: "1.3rem", // Apply border and border radius
              maxWidth: "100%", // Make the video responsive
              height: "auto", // Ensure aspect ratio is maintained
            }}
            controls // Adding the "controls" attribute to show all video controls
            autoPlay // Adding the "autoPlay" attribute to start playing on page load
            loop
          ></video>
        </div>
      </div>
      <div>
        <ImageGallery images={images} />
      </div>
      <Footer />
    </div>
  );
}
