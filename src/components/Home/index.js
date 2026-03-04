import { useContext, useEffect } from "react"; 
import BookingDates from "../Context";
import Navbar from "../Navbar";
import FunctionHall from "../FunctionHall";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { Search } from "lucide-react"; 
import "./index.css";

const Home = () => {
  const { filteredHalls, updatedDates, searchQuery, setSearchQuery } = useContext(BookingDates);

  // Improved auto-scroll logic for centering
  useEffect(() => {
    if (searchQuery.length > 0) {
      const resultsSection = document.getElementById("available-halls");
      if (resultsSection) {
        // block: "center" ensures the section is vertically centered in the window
        resultsSection.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [searchQuery]); 

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
                <div className="bg-primary me-2" style={{ width: "30px", height: "2px" }}></div>
                <p className="text-primary fw-bold text-uppercase m-0" style={{ letterSpacing: "3px", fontSize: "0.85rem" }}>
                  BMH
                </p>
              </div>

              <h1 className="display-1 fw-bold text-dark mb-4" style={{ letterSpacing: "-2px" }}>
                Elevate Your <span className="text-primary">Occasion.</span>
              </h1>

              {/* Search Bar */}
              <div className="mb-5" style={{ maxWidth: "500px" }}>
                <div className="input-group bg-white rounded-pill p-1 border shadow-sm">
                  <span className="input-group-text bg-transparent border-0 ps-3">
                    <Search size={18} className="text-muted" />
                  </span>
                  <input
                    type="text"
                    className="form-control border-0 shadow-none"
                    placeholder="Search halls..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <p className="lead fs-4 mb-5 text-dark opacity-75" style={{ maxWidth: "650px", lineHeight: "1.6" }}>
                Step into a world of elegance. We offer sophisticated black-tie
                venues and modern function halls tailored to your vision.
              </p>

              <div className="d-flex gap-5 mb-5 ps-3 border-start border-primary border-3">
                <div>
                  <h4 className="fw-bold mb-0">25+</h4>
                  <small className="text-muted text-uppercase fw-semibold" style={{ fontSize: "0.7rem" }}>Venues</small>
                </div>
                <div>
                  <h4 className="fw-bold mb-0">10k+</h4>
                  <small className="text-muted text-uppercase fw-semibold" style={{ fontSize: "0.7rem" }}>Bookings</small>
                </div>
                <div>
                  <h4 className="fw-bold mb-0">4.9</h4>
                  <small className="text-muted text-uppercase fw-semibold" style={{ fontSize: "0.7rem" }}>Rating</small>
                </div>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-4">
                <a href="#available-halls" className="btn btn-dark btn-lg px-5 py-3 fw-bold rounded-pill shadow-sm">
                  Explore Halls
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="home-content py-5" id="available-halls">
        <div className="text-center mb-5 mt-4">
          <p className="text-primary fw-bold text-uppercase mb-2" style={{ letterSpacing: "4px", fontSize: "0.75rem" }}>
            Selections
          </p>
          <h2 className="display-5 fw-bold text-dark mb-3" style={{ letterSpacing: "-1.5px" }}>
            {searchQuery ? `Results for "${searchQuery}"` : "Available Halls"}
          </h2>
        </div>

        <div className="home-bottom-containers">
          {filteredHalls.length > 0 ? (
            filteredHalls.map((each) => (
              <FunctionHall
                object={each}
                key={each.id}
                updatedDates={updatedDates}
              />
            ))
          ) : (
            <div className="w-100 text-center py-5">
              <p className="no-results">No halls match your search.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;