import Navbar from "../Navbar";
import "./index.css";
import { useContext } from "react";
import BookingDates from "../Context";

function Bookings(props) {
  const { updatedDates } = props;
  const { bookedHalls } = useContext(BookingDates);

  return (
    <div className="bookings-container">
      <Navbar />
      <div>
        {bookedHalls.map((each) => (
          <div key={each.id} className="bg-light py-5">
            <div className="container">
              <div
                className="card shadow-lg border-0"
                style={{ borderRadius: "20px" }}
              >
                <div className="row g-0">
                  {/* Image */}
                  <div className="col-12 col-md-5">
                    <img
                      src={each.image_url}
                      alt={each.name}
                      className="img-fluid w-100"
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        maxHeight: "350px",
                        borderTopLeftRadius: "20px",
                        borderBottomLeftRadius: "20px",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="col-12 col-md-7 p-4">
                    <h2 className="fw-bold mb-3">{each.name}</h2>

                    <div className="row text-muted">
                      <div className="col-12 col-sm-6 d-flex align-items-center mb-3">
                        <i className="bi bi-geo-alt me-2 fs-5"></i>
                        <span>{each.address}</span>
                      </div>

                      <div className="col-12 col-sm-6 d-flex align-items-center fw-bold mb-3">
                        <i className="bi bi-calendar me-2 fs-5"></i>
                        <span>{each.bookedDates?.at(-1)}</span>
                      </div>

                      <div className="col-12 col-sm-6 d-flex align-items-center mb-3">
                        <i className="bi bi-clock me-2 fs-5"></i>
                        <span>6:00 PM - 11:00 PM</span>
                      </div>

                      <div className="col-12 col-sm-6 d-flex align-items-center mb-3">
                        <i className="bi bi-people me-2 fs-5"></i>
                        <span>Capacity: 200 guests</span>
                      </div>
                    </div>

                    <hr />

               
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mt-3">
                    
                      <div>
                        <span className="fw-bold" style={{ fontSize: "32px" }}>
                           {(each.hall_package / 10).toLocaleString("en-IN")}
                        </span>
                        <span className="text-muted ms-2">total</span>
                      </div>

                     
                      <div className="d-flex flex-column flex-sm-row gap-3 w-100 w-md-auto">
                        <button className="btn btn-outline-secondary px-4 py-2 rounded-3 w-100">
                          <i className="bi bi-pencil me-2"></i>
                          Edit
                        </button>

                        <button
                          className="btn text-white px-4 py-2 rounded-3 w-100"
                          style={{ backgroundColor: "#2563eb" }}
                        >
                          <i className="bi bi-credit-card me-2"></i>
                          Payment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookings;
