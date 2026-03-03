import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2 sticky-top">
      <div className="container">
        {/* Logo - Adjusted height for better mobile/desktop balance */}
        <Link
          className="navbar-brand fw-bold text-primary d-flex align-items-center"
          to="/"
        >
          <img
            src="https://res.cloudinary.com/dgzksmwpz/image/upload/v1772531480/Intertwined_Monogram_Logo_y7koz2.png"
            alt="bookmyhall logo"
            className="img-fluid"
            style={{ 
                height: "auto", 
                maxHeight: "clamp(40px, 8vw, 60px)" // Responsive sizing: min 40px, max 60px
            }}
          />
        </Link>

        {/* Hamburger Menu */}
        <button
          className="navbar-toggler border-0 shadow-none" 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          {/* Using ms-auto to push nav items to the right */}
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2 text-center py-3 py-lg-0">
            <li className="nav-item">
              <Link className="nav-link px-3" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/contact">Contact</Link>
            </li>
            <li className="nav-item ms-lg-3">
              <button
                className="btn btn-primary w-100 w-lg-auto mt-3 mt-lg-0 px-4"
                onClick={onClickLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;