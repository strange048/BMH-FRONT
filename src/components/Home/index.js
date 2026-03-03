import Navbar from "../Navbar";
import FunctionHall from "../FunctionHall";
import Footer from "../Footer";
import "./index.css";
import { Link } from "react-router-dom";
const Home = (props) => {
  const { halls = [], updatedDates } = props; // Default to empty array to prevent map errors

  return (
    <div className="home-container">
      <Navbar />
      <header
        className="hero-section py-5 d-flex align-items-center"
        style={{ backgroundColor: "#f8f9fa", minHeight: "80vh" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="d-flex align-items-center mb-3">
                <div
                  className="bg-primary me-2"
                  style={{ width: "30px", height: "2px" }}
                ></div>
                <p
                  className="text-primary fw-bold text-uppercase m-0"
                  style={{ letterSpacing: "3px", fontSize: "0.85rem" }}
                >
                  BMH
                </p>
              </div>

              <h1
                className="display-1 fw-bold text-dark mb-4"
                style={{ letterSpacing: "-2px" }}
              >
                Elevate Your <span className="text-primary">Occasion.</span>
              </h1>

              <p
                className="lead fs-4 mb-5 text-dark opacity-75"
                style={{ maxWidth: "650px", lineHeight: "1.6" }}
              >
                Step into a world of elegance. We offer sophisticated black-tie
                venues and modern function halls tailored to your vision.
                Experience seamless booking in the heart of the city.
              </p>

              <div className="d-flex gap-5 mb-5 ps-3 border-start border-primary border-3">
                <div>
                  <h4 className="fw-bold mb-0">25+</h4>
                  <small
                    className="text-muted text-uppercase fw-semibold"
                    style={{ fontSize: "0.7rem" }}
                  >
                    Venues
                  </small>
                </div>
                <div>
                  <h4 className="fw-bold mb-0">10k+</h4>
                  <small
                    className="text-muted text-uppercase fw-semibold"
                    style={{ fontSize: "0.7rem" }}
                  >
                    Bookings
                  </small>
                </div>
                <div>
                  <h4 className="fw-bold mb-0">4.9</h4>
                  <small
                    className="text-muted text-uppercase fw-semibold"
                    style={{ fontSize: "0.7rem" }}
                  >
                    Rating
                  </small>
                </div>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-4">
                <a
                  href="#available-halls"
                  className="btn btn-dark btn-lg px-5 py-3 fw-bold rounded-pill shadow-sm"
                >
                  Explore Halls
                </a>
                <div className="d-flex align-items-center gap-3">
                  <Link to="/about">
                    <button className="btn btn-dark btn-sm px-4 py-2 fw-bold rounded-pill">
                      Our Story
                    </button>
                  </Link>

                  <Link to="/contact">
                    <button className="btn btn-outline-dark btn-sm px-4 py-2 fw-bold rounded-pill">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="home-content" id="available-halls">
        <div className="text-center mb-5 mt-4">
          <p
            className="text-primary fw-bold text-uppercase mb-2"
            style={{ letterSpacing: "4px", fontSize: "0.75rem" }}
          >
            Selections
          </p>
          <h2
            className="display-5 fw-bold text-dark mb-3"
            style={{ letterSpacing: "-1.5px" }}
          >
            Available Halls
          </h2>
          <div className="d-flex justify-content-center">
            <div
              className="bg-dark"
              style={{ height: "3px", width: "40px", borderRadius: "2px" }}
            ></div>
          </div>
        </div>
        <div className="home-bottom-containers">
          {halls.length > 0 ? (
            halls.map((each) => (
              <FunctionHall
                object={each}
                key={each.id}
                updatedDates={updatedDates}
              />
            ))
          ) : (
            <p className="no-results">No halls found for the selected dates.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
