import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageGallery from "../components/ImageGallery";
import bride1 from "../assets/images/bride1.jpeg";
import bride2 from "../assets/images/bride2.jpeg";
import bride3 from "../assets/images/bride3.jpeg";
import bride4 from "../assets/images/bride4.jpg";

export default function Bridals() {
  const images = [
    bride4,
    "https://ae01.alicdn.com/kf/H6fcfee68dfdf4a9493af61604dea51e8o/Detachable-Trail-2-Pieces-African-Wedding-Dresses-White-Lace-Long-Sleeve-Beading-Belt-Mermaid-Removable-Skirt.jpg_Q90.jpg_.webp",
    "https://myafrocaribbeanwedding.com/wp-content/uploads/2022/04/Nigerian-Custom-Bridal-Fashion-Designer-Ninola-Lagos-8.jpg",
    "https://i.pinimg.com/736x/bc/0f/5e/bc0f5e2274ba1a38281a82ddabba5d39.jpg",
    "https://www.weddingfeferity.com/wp-content/uploads/2015/08/ball-gown-bride.jpg",
    "https://ae01.alicdn.com/kf/S3d1b636c075f40dfb99df4c2fd9d8ec9R/Beading-Mermaid-Wedding-Dresses-Long-Sleeve-Appliques-Pearls-African-Wedding-Bridal-Gowns-Plus-Size-Bridal-Vestido.jpg",
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
        <h1 className="goudy p-5">Guiex Bridals & Apparels</h1>
      </div>
      <div>
        <ImageGallery images={images} />
      </div>
      <Footer />
    </div>
  );
}
