import React from "react";
import Navbar from "../Navbar";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="bookmyhall-home">
        {/* 1. About Us Section */}
        <section className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
                alt="About bookmyhall"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="mb-4">About Us</h2>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Why Choose book_my_hall Section */}
        <section className="bg-light py-5">
          <div className="container">
            <h2 className="text-center mb-5">Why Choose book_my_hall?</h2>
            <div className="row g-4">
              <div className="col-md-4 text-center">
                <div className="card h-100 border-0 shadow-sm p-4">
                  <h4 className="mt-3">Verified Venues</h4>
                  <p className="text-muted">
                    Every hall on our platform is physically verified for
                    quality, safety, and amenities.
                  </p>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="card h-100 border-0 shadow-sm p-4">
                  <h4 className="mt-3">Best Price Guarantee</h4>
                  <p className="text-muted">
                    We negotiate the best rates so you can book your dream venue
                    without breaking the bank.
                  </p>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="card h-100 border-0 shadow-sm p-4">
                  <h4 className="mt-3">Instant Booking</h4>
                  <p className="text-muted">
                    Check real-time availability and secure your booking
                    instantly with zero hassle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Cities Carousel Section */}

        {/* 4. Reviews Section */}
        <section className="bg-light py-5 mb-5">
          <div className="container">
            <h2 className="text-center mb-5">What Our Customers Say</h2>
            <div className="row g-4">
              {/* Review 1 */}
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <div className="text-warning mb-2">★★★★★</div>
                    <p className="card-text">
                      "Booking a hall for my sister's wedding was so stressful
                      until I found book_my_hall. The interface is smooth, and
                      we got a great deal on a premium venue."
                    </p>
                    <h6 className="card-subtitle mt-3 text-muted">
                      - Rahul S.
                    </h6>
                  </div>
                </div>
              </div>
              {/* Review 2 */}
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <div className="text-warning mb-2">★★★★☆</div>
                    <p className="card-text">
                      "Great selection of venues in the city. The photos were
                      accurate, and the instant booking feature saved me a lot
                      of time calling different managers."
                    </p>
                    <h6 className="card-subtitle mt-3 text-muted">
                      - Priya M.
                    </h6>
                  </div>
                </div>
              </div>
              {/* Review 3 */}
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <div className="text-warning mb-2">★★★★★</div>
                    <p className="card-text">
                      "Highly recommend! Customer support was very helpful when
                      I had to make a last-minute change to my event date.
                      Flawless experience."
                    </p>
                    <h6 className="card-subtitle mt-3 text-muted">- Amit K.</h6>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <div className="text-warning mb-2">★★★★★</div>
                    <p className="card-text">
                      "Booking a hall for my sister's wedding was so stressful
                      until I found book_my_hall. The interface is smooth, and
                      we got a great deal on a premium venue."
                    </p>
                    <h6 className="card-subtitle mt-3 text-muted">
                      - Sudheer S.
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <div className="text-warning mb-2">★★★★★</div>
                    <p className="card-text">
                      "Booking a hall for my sister's wedding was so stressful
                      until I found book_my_hall. The interface is smooth, and
                      we got a great deal on a premium venue."
                    </p>
                    <h6 className="card-subtitle mt-3 text-muted">
                      - Younus S.
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <div className="text-warning mb-2">★★★★★</div>
                    <p className="card-text">
                      "Booking a hall for my sister's wedding was so stressful
                      until I found book_my_hall. The interface is smooth, and
                      we got a great deal on a premium venue."
                    </p>
                    <h6 className="card-subtitle mt-3 text-muted">
                      - Ranveer K.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
