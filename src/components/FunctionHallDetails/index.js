import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext } from "react"; // Removed useMemo, added useContext
import {
  ArrowLeft,
  MapPin,
  Users,
  IndianRupee,
  Check,
  Sparkles,
  ShieldCheck,
  ExternalLink
} from "lucide-react";

import BookingDates from "../Context"; // 1. Restore Context Import
import Navbar from "../Navbar/index.js";
import BookingCalendar from "../BookingCalendar";
import "./index.css";

export default function FunctionHallDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 2. Consume Global Context
  const { halls, updatedDates } = useContext(BookingDates);
  
  // 3. Find the hall from Global State
  const hall = halls.find((h) => String(h.id) === String(id));
  
  // States
  const [selectedDate, setSelectedDate] = useState(null); 
  const [isProcessing, setIsProcessing] = useState(false);

  if (!hall) {
    return (
      <div className="container min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h3 className="fw-bold text-muted">Venue not found</h3>
          <button onClick={() => navigate("/")} className="btn btn-primary mt-3 rounded-pill px-4">
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const advancePayment = Math.round(hall.hall_package * 0.1);

  // 4. FIXED BOOKING LOGIC
  const handleBooking = () => {
    if (!selectedDate) return;

    setIsProcessing(true);
    const dateString = selectedDate.toLocaleDateString('en-CA'); // "YYYY-MM-DD"
    
    // Simulate payment processing
    setTimeout(() => {
      // Update the Global Context (App.js state)
      updatedDates(hall.id, dateString);
      
      alert(`Success! Venue reserved for ${selectedDate.toDateString()}.`);
      setSelectedDate(null);
      setIsProcessing(false);
      
      // Navigate to the list of bookings to see the new order
      navigate("/bookings"); 
    }, 1500);
  };

  // Maps URL Logic
  const fallbackMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(hall.name + " " + hall.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="min-vh-100 bg-light pb-5">
      <Navbar />

      <div className="container py-4">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-link text-decoration-none text-muted mb-3 p-0 d-flex align-items-center"
        >
          <ArrowLeft size={18} className="me-2" /> Back to Search
        </button>

        <div className="row g-4">
          <div className="col-lg-8">
            {/* Carousel Section */}
            <div className="shadow-sm rounded-4 overflow-hidden mb-4 bg-white">
               <img src={hall.image_url} className="d-block w-100 object-fit-cover" style={{ height: "450px" }} alt={hall.name} />
            </div>

            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <div className="d-md-flex justify-content-between align-items-start mb-4 pb-3 border-bottom">
                <div>
                  <h1 className="h3 fw-bold text-dark mb-1">{hall.name}</h1>
                  <div className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 rounded-pill">
                    <Sparkles size={14} className="me-1" /> Verified Premium Venue
                  </div>
                </div>
              </div>

              <div className="row g-3">
                <div className="col-12 col-md-4">
                  <div className="info-card p-3 border rounded-3 h-100 bg-light">
                    <MapPin size={20} className="text-primary mb-2" />
                    <h6 className="fw-bold mb-1">Location</h6>
                    <p className="small text-muted mb-0">{hall.address}</p>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="info-card p-3 border rounded-3 h-100 bg-light">
                    <Users size={20} className="text-primary mb-2" />
                    <h6 className="fw-bold mb-1">Capacity</h6>
                    <p className="small text-muted mb-0">{hall.capacity} Guests</p>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="info-card p-3 border rounded-3 h-100 bg-light">
                    <IndianRupee size={20} className="text-primary mb-2" />
                    <h6 className="fw-bold mb-1">Price</h6>
                    <p className="small text-success fw-bold mb-0">₹{hall.hall_package.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar - Passing hall.bookedDates from Global Context */}
            <div className="mb-4">
              <BookingCalendar 
                bookedDates={hall.bookedDates} 
                setDate={setSelectedDate} 
              />
            </div>

            {/* Map Section */}
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                 <h5 className="fw-bold mb-0">Venue Location</h5>
                 <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hall.name + " " + hall.address)}`} 
                    target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary rounded-pill">
                    <ExternalLink size={14} /> View Full Map
                 </a>
              </div>
              <div className="rounded-4 overflow-hidden border" style={{ height: "350px" }}>
                <iframe title="venue-map" width="100%" height="100%" style={{ border: 0 }} src={fallbackMapUrl} loading="lazy" />
              </div>
            </div>
          </div>

          {/* Sidebar Booking Summary */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-lg rounded-4 p-4 sticky-top" style={{ top: "2rem" }}>
              <h5 className="fw-bold mb-4">Reservation Summary</h5>

              <div className="bg-light p-3 rounded-3 mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted small">Total Venue Price</span>
                  <span className="fw-bold text-dark">₹{hall.hall_package.toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between text-primary mb-1 fw-bold">
                  <span>Advance (10%)</span>
                  <span>₹{advancePayment.toLocaleString()}</span>
                </div>
                <hr className="my-2" />
                <div className="d-flex justify-content-between small text-muted">
                  <span>Balance at Venue</span>
                  <span>₹{(hall.hall_package - advancePayment).toLocaleString()}</span>
                </div>
              </div>

              <div className="mb-4 text-center">
                {selectedDate ? (
                  <div className="p-3 bg-success-subtle border border-success-subtle rounded-3">
                    <p className="small mb-0 text-success fw-bold">Date Selected</p>
                    <h6 className="mb-0 text-success">{selectedDate.toDateString()}</h6>
                  </div>
                ) : (
                  <div className="p-3 bg-warning-subtle border border-warning-subtle rounded-3 text-warning">
                    <p className="small mb-0 fw-bold">No Date Selected</p>
                    <p className="x-small mb-0" style={{fontSize: '0.75rem'}}>Please pick a date from the calendar</p>
                  </div>
                )}
              </div>

              <button
                className="btn btn-primary w-100 py-3 fw-bold rounded-pill shadow-sm"
                disabled={!selectedDate || isProcessing}
                onClick={handleBooking}
              >
                {isProcessing ? (
                  <span className="spinner-border spinner-border-sm me-2"></span>
                ) : (
                  `Pay ₹${advancePayment.toLocaleString()} to Book`
                )}
              </button>

              <div className="d-flex align-items-center justify-content-center gap-2 mt-4 opacity-50">
                <ShieldCheck size={16} />
                <span style={{ fontSize: '0.7rem' }}>Secure Payment powered by Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}