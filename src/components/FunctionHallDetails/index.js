import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Users,
  IndianRupee,
  Check,
  Calendar as CalendarIcon,
  Sparkles,
} from "lucide-react";
import { functionHalls } from "./data.jsx";
import Navbar from "../Navbar/index.js";
import "./index.css";

export default function FunctionHallDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookingDate, setBookingDate] = useState("");

  const hall = functionHalls.find((h) => String(h.id) === String(id));
  // 1. Your existing array of booked dates (usually comes from your hall data)
const [bookedDates, setBookedDates] = useState(hall.bookedDates || ["2026-03-15", "2026-03-20"]);

// 2. Check if a date is already taken
const isDateBooked = (date) => bookedDates.includes(date);

// 3. Handle Booking Confirmation
const handleBooking = () => {
    if (!bookingDate) return;
    
    // Add the selected date to the booked list
    setBookedDates([...bookedDates, bookingDate]);
    alert(`Payment Successful! ${bookingDate} is now reserved.`);
    setBookingDate(""); // Reset input
};

  if (!hall) {
    return (
      <div className="container min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h3 className="fw-bold">Venue not found</h3>
          <button
            onClick={() => navigate("/")}
            className="btn btn-outline-primary mt-3"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const advancePayment = Math.round(hall.price * 0.1);

  // Improved Map URL (Standard Google Embed)
  const mapUrl = `https://maps.google.com/maps?q=${hall.latitude},${hall.longitude}&z=15&output=embed`;

  return (
    <div className="min-vh-100 bg-light">
      <Navbar />

      <div className="container py-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="btn btn-link text-decoration-none text-muted mb-3 p-0 d-flex align-items-center"
        >
          <ArrowLeft size={18} className="me-2" /> Back to Search
        </button>

        <div className="row g-4">
          <div className="col-lg-8">
            <div
              id="hallCarousel"
              className="carousel slide shadow-sm carousel-container mb-4"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {hall.images.map((image, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <img
                      src={image}
                      className="d-block w-100"
                      alt={hall.name}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#hallCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#hallCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>

            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <div className="d-md-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
                <div>
                  <h1 className="h3 premium-gradient-text mb-1">{hall.name}</h1>
                  <div className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-10 px-2 py-1 rounded-pill">
                    <Sparkles size={12} className="me-1" /> Verified Premium
                    Venue
                  </div>
                </div>
                <button className="btn btn-outline-primary btn-sm rounded-pill px-3 mt-2 mt-md-0">
                  Select Date
                </button>
              </div>

              <div className="row g-3">
                {/* Address Card */}
                <div className="col-12 col-md-4">
                  <div className="info-card">
                    <div className="icon-circle bg-blue-soft">
                      <MapPin size={22} />
                    </div>
                    <h6 className="fw-bold mb-1">Location</h6>
                    <p className="address-text mb-0">{hall.address}</p>
                  </div>
                </div>

                {/* Capacity Card */}
                <div className="col-6 col-md-4">
                  <div className="info-card text-center text-md-start">
                    <div className="icon-circle bg-purple-soft mx-auto mx-md-0">
                      <Users size={22} />
                    </div>
                    <h6 className="fw-bold mb-1">Capacity</h6>
                    <p className="text-muted mb-0">{hall.capacity} Guests</p>
                  </div>
                </div>

                {/* Pricing Card */}
                <div className="col-6 col-md-4">
                  <div className="info-card text-center text-md-start">
                    <div className="icon-circle bg-green-soft mx-auto mx-md-0">
                      <IndianRupee size={22} />
                    </div>
                    <h6 className="fw-bold mb-1">Starting Price</h6>
                    <p className="text-success fw-bold mb-0">
                      ₹{hall.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* 3. Package Content */}
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h5 className="fw-bold mb-3">What this venue offers</h5>
              <div className="row g-2">
                {hall.packageIncludes.map((item, index) => (
                  <div key={index} className="col-md-6">
                    <div className="d-flex align-items-center py-1">
                      <div className="text-success me-2">
                        <Check size={18} />
                      </div>
                      <span className="text-secondary">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Styled Map Container */}
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h5 className="fw-bold mb-3">Location</h5>
              <div
                className="map-wrapper shadow-inner"
                style={{ height: "300px" }}
              >
                <iframe
                  title="map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  src={mapUrl}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 sticky-md-top booking-sidebar">
              <h5 className="fw-bold mb-4">Book Venue</h5>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span className="text-muted">Total Price</span>
                  <span className="fw-bold">
                    ₹{hall.price.toLocaleString()}
                  </span>
                </div>
                <div className="d-flex justify-content-between small text-primary mb-1">
                  <span>Booking Deposit (10%)</span>
                  <span>₹{advancePayment.toLocaleString()}</span>
                </div>
                <hr />
              </div>

              <div className="mb-4">
                <label className="form-label small fw-bold">Event Date</label>
                <div className="input-group">
                  <span
                    className={`input-group-text bg-white border-end-0 ${isDateBooked(bookingDate) ? "border-danger" : ""}`}
                  >
                    <CalendarIcon
                      size={18}
                      className={
                        isDateBooked(bookingDate) ? "text-danger" : "text-muted"
                      }
                    />
                  </span>
                  <input
                    type="date"
                    className={`form-control border-start-0 ps-0 ${isDateBooked(bookingDate) ? "is-invalid" : ""}`}
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                  {/* Visual feedback for booked dates */}
                  {isDateBooked(bookingDate) && (
                    <div className="invalid-feedback fw-bold">
                      This date is already booked. Please choose another.
                    </div>
                  )}
                </div>

                {/* Quick list of unavailable dates for better UX */}
                <div className="mt-2">
                  <span className="small text-muted">Currently Booked: </span>
                  {bookedDates.map((date) => (
                    <span
                      key={date}
                      className="badge bg-danger bg-opacity-10 text-danger me-1 small"
                    >
                      {date}
                    </span>
                  ))}
                </div>
              </div>

              <button
                className={`btn btn-primary w-100 py-2 fw-bold rounded-3 ${!bookingDate || isDateBooked(bookingDate) ? "disabled" : ""}`}
                onClick={handleBooking}
              >
                Confirm & Pay ₹{advancePayment.toLocaleString()}
              </button>

              
              <p
                className="text-center text-muted x-small mt-3 mb-0"
                style={{ fontSize: "0.75rem" }}
              >
                Secure payment via Razorpay or Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
