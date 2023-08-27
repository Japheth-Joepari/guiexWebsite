import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ceo from "../assets/images/ceo.jpeg";

export default function AboutUs() {
  return (
    <>
      <Header />
      <div className="about-sec bg-dark text-white">
        {/* <img
          src="https://t3.ftcdn.net/jpg/01/28/44/76/360_F_128447604_6deYSrg6bgH2F3YaoU0icdhvxNu4ReDN.jpg"
          alt=""
          srcset=""
          className="img-fluid"
        /> */}
        <h1 className="goudy p-5">About Me ?</h1>
      </div>
      <div className="d-flex flex-col justify-content-center align-items-center">
        <img src={ceo} alt="" srcset="" className="w-50 border-3 rounded" />
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <p className="text-start">
              Gladness Daniel is the Training Coordinator at Guiex Fashion
              Academy and Creative Director of Guiex Bridals and Apparels in
              Abuja. With over two decades of experience in the fashion
              industry, Gladness shares some of her insights and success stories
              in this interview.
            </p>
            <p className="text-start">
              Gladness started her journey by making conventional female wears
              after her training in Lagos. Her first outfit, "Differences,"
              focused on creating garments like hats, wedding dresses, and other
              fashion accessories. In 2006, she rebranded her business to Guiex
              Bridals and Apparels, adding bridal wears to her offerings. The
              focus shifted to made-to-measure wedding gowns and bridal wears
              for both Christian and Muslim clients. Recognizing the need for
              empowerment, she established Guiex Fashion Academy in 2010.
            </p>
            <p className="text-start">
              The motivation behind Gladness's entrepreneurial journey was her
              concern about rising unemployment and the lack of skills among
              youths. She wanted to impact the younger generation, especially
              women, by teaching them tailoring and fashion skills. Her goal was
              to empower them to overcome challenges and realize their potential
              in society.
            </p>
            <p className="text-start">
              A typical workday for Gladness is filled with training sessions
              for the academy's students, ensuring excellence in teaching and
              close supervision of the curriculum. She also manages customer
              interactions to meet deadlines. Despite the challenges posed by
              the economic environment, shortage of power, and high costs,
              Gladness remains committed to delivering quality products and
              training.
            </p>
            <p className="text-start">
              Gladness's ongoing projects include creating a comprehensive
              handbook for fashion and design courses to enhance the learning
              experience. She's also working on establishing an NGO to extend
              her training programs to the less privileged. Through
              collaborations with like-minded individuals, she aims to empower
              more people through skills development.
            </p>
            <p className="text-start">
              With a small team consisting of two fashion instructors and 27
              trainees, Guiex Fashion Academy focuses on training individuals
              and offering quality services to clients. The income generated
              from school fees and client services is reinvested into the
              business for growth and expansion.
            </p>
            <p className="text-start">
              Looking ahead, Gladness envisions expanding the reach of Guiex
              Fashion Academy through an NGO that offers subsidized or free
              training to the less privileged and youths from local communities.
              This expansion includes providing boarding facilities to create a
              conducive environment for learning and entrepreneurship
              development.
            </p>
            <a
              className="text-decoration-none"
              href="https://dailytrust.com/passion-for-empowerment-drives-my-training-academy-gladness/"
            >
              👆 click to See more about me ...
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
