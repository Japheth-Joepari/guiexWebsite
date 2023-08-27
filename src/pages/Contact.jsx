import { Send } from "react-feather";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message received successfully, Thanks for reaching out");
  };
  return (
    <div className="">
      <ToastContainer />
      <Header />
      <div className="about-sec bg-dark text-white">
        {/* <img
          src="https://t3.ftcdn.net/jpg/01/28/44/76/360_F_128447604_6deYSrg6bgH2F3YaoU0icdhvxNu4ReDN.jpg"
          alt=""
          srcset=""
          className="img-fluid"
        /> */}
        <h1 className="goudy p-5">Contact Us 😏?</h1>
      </div>
      <section className="container py-3 my-2">
        {/*Contact heading*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-sm-12 mb-4 col-md-5">
            {/*Form with header*/}
            <div className="card border-0 shadow rounded-0">
              <div className="card-header p-0">
                <div className="bg-dark text-white text-lef py-2">
                  <h3>
                    <i className="fa fa-envelope" /> Write to us:
                  </h3>
                  <p className="m-0">We’ll reply as soon as posible</p>
                </div>
              </div>
              <form
                className="card-body p-3 d-flex  flex-column gap-2 text-start"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="form-group">
                  <label> Full name </label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required
                      id="name"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Your email</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="email"
                      required
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="text"
                      required
                      name="subject"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="text"
                      className="form-control"
                      name="mesg"
                      placeholder="Message"
                      required
                    />
                  </div>
                </div>
                <div className="">
                  <button className="btn btn-primary" type="submit">
                    <Send /> send
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-sm-12 col-md-7">
            {/*Google map*/}
            <div className="mb-4 shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7882.724898557314!2d7.550796421704087!3d8.93870886640075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0f3f9126a045%3A0x514dfef7982f2a98!2sNigerian%20Army%20Post-service%20Development%20Estate%20Kurudu%20Phase%202!5e0!3m2!1sen!2sng!4v1693118809214!5m2!1sen!2sng"
                width="100%"
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/*Buttons*/}
          </div>
          {/*Grid column*/}
        </div>
      </section>
      <div className="fixe2">
        <Footer />
      </div>
    </div>
  );
}
