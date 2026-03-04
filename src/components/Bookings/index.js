import { useContext, useState } from "react";
import BookingDates from "../Context";
import Navbar from "../Navbar";
import { MapPin, Calendar as CalIcon, CreditCard, Smile, Clock, Hash, HandCoins, CalendarX } from "lucide-react";

function Bookings() {
  const { halls = [] } = useContext(BookingDates);
  const [showModal, setShowModal] = useState(false);
  const [activeOrderId, setActiveOrderId] = useState(null);

  // Helper to get payment info from storage
  const getPaymentInfo = (hallId, date) => {
    return localStorage.getItem(`paid_${hallId}_${date}`); 
  };

  const handleConfirm = (method) => {
    if (activeOrderId) {
      localStorage.setItem(`paid_${activeOrderId.id}_${activeOrderId.date}`, method);
      setShowModal(false);
    }
  };

  // Check if there are ANY bookings across ALL halls
  const hasAnyBookings = halls.some(hall => hall.bookedDates && hall.bookedDates.length > 0);

  return (
    <div className="min-vh-100 bg-light pb-5">
      <Navbar />
      <div className="container py-5">
        <h2 className="fw-bold mb-4">Your Booking History</h2>
        
        <div className="row g-4">
          {!hasAnyBookings ? (
            /* --- EMPTY STATE --- */
            <div className="col-12 text-center py-5 mt-5">
              <div className="mb-3 text-muted">
                <CalendarX size={80} strokeWidth={1} />
              </div>
              <h3 className="fw-bold text-secondary">No Bookings Confirmed</h3>
              <p className="text-muted">You haven't reserved any halls yet. Visit the home page to start booking!</p>
              <a href="/" className="btn btn-primary rounded-pill px-4 mt-2">Browse Halls</a>
            </div>
          ) : (
            /* --- BOOKINGS LIST --- */
            halls.map((hall) => 
              hall.bookedDates.map((date) => {
                const paymentMethod = getPaymentInfo(hall.id, date);
                const amount = Math.round(hall.hall_package * 0.9).toLocaleString();
                const randomTxn = Math.floor(10000000 + Math.random() * 90000000);

                return (
                  <div key={`${hall.id}-${date}`} className="col-12">
                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-3">
                      <div className="row g-0">
                        <div className="col-md-3">
                          <img src={hall.image_url} className="img-fluid h-100 object-fit-cover" style={{ minHeight: '150px' }} alt="" />
                        </div>
                        <div className="col-md-9 p-4">
                          
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className={`badge rounded-pill px-3 py-2 
                              ${paymentMethod === 'online' ? 'bg-success' : 
                                paymentMethod === 'cash' ? 'bg-info text-dark' : 'bg-warning text-dark'}`}>
                              
                              {paymentMethod === 'online' && <><Smile size={14} /> BE READY FOR VENUE</>}
                              {paymentMethod === 'cash' && <><HandCoins size={14} /> PAY ₹{amount} AT VENUE</>}
                              {!paymentMethod && <><Clock size={14} /> Status: Pending</>}
                            </span>

                            {paymentMethod && (
                              <small className="text-muted"><Hash size={12}/> TXN_{randomTxn}</small>
                            )}
                          </div>

                          <div className="d-flex justify-content-between align-items-start">
                            <div>
                              <h5 className="fw-bold mb-1">{hall.name}</h5>
                              <p className="text-muted small mb-0"><MapPin size={12}/> {hall.address}</p>
                            </div>
                            <div className="text-end">
                              <div className="fw-bold text-primary"><CalIcon size={16}/> {date}</div>
                              <small className="text-muted">Event Date</small>
                            </div>
                          </div>

                          <div className="mt-3 pt-3 border-top d-flex justify-content-between align-items-center">
                            <div className="small">
                              <CreditCard size={14} className="text-success me-1"/> 
                              <strong>
                                {paymentMethod === 'online' ? "FULL Payment Received" : 
                                 paymentMethod === 'cash' ? "Cash Payment (Pending at Venue)" : 
                                 `Due: ₹${amount}`}
                              </strong>
                            </div>
                            
                            {!paymentMethod ? (
                              <button 
                                onClick={() => { setActiveOrderId({id: hall.id, date}); setShowModal(true); }}
                                className="btn btn-primary btn-sm rounded-pill px-4"
                              >
                                Pay Due: ₹{amount}
                              </button>
                            ) : (
                              <button className={`btn btn-sm rounded-pill px-4 fw-bold ${paymentMethod === 'online' ? 'btn-outline-success' : 'btn-outline-info'}`} disabled>
                                {paymentMethod === 'online' ? "Confirmed 😊" : "Cash Booked 🤝"}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )
          )}
        </div>
      </div>

      {/* Payment Modal */}
      {showModal && (
        <div className="modal d-block" style={{background: 'rgba(0,0,0,0.7)'}}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 rounded-4 p-4 text-center shadow">
              <h5 className="fw-bold mb-4">Complete Your Payment</h5>
              <div className="d-grid gap-2">
                <button onClick={() => handleConfirm('online')} className="btn btn-primary py-3 fw-bold rounded-3">
                   Online Payment
                </button>
                <button onClick={() => handleConfirm('cash')} className="btn btn-outline-dark py-3 fw-bold rounded-3">
                   Pay Cash at Venue
                </button>
              </div>
              <button onClick={() => setShowModal(false)} className="btn btn-link text-muted mt-3 text-decoration-none">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookings;