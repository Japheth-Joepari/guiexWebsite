import Header from "../components/Header";
import "../assets/styles/style.css";
import Banner from "../components/Banner";
import Catalogue from "../components/Catalouge";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Catalogue />
      <Subscribe />
      <Footer />
    </>
  );
}
