import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

import Home from "./components/Home";
import Login from "./components/Login";
import Bookings from "./components/Bookings";
import About from "./components/About";
import FunctionHallDetails from "./components/FunctionHallDetails";
import Contact from "./components/Contact";
import ServicePage from "./components/Servicess";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import BookingDates from "./components/Context";

const function_halls = [
  {
    id: 1,
    name: "Nizam Palace",
    address: "Bodhan Road, near knowledge park",
    image_url:
      "https://img.weddingbazaar.com/photos/pictures/008/687/818/original/Screenshot_2024-09-06_113327.png?1725602696",
    hall_package: 59999,
    capacity: 500,
    bookedDates: [],
  },
  {
    id: 2,
    name: "NN Palace",
    address: "Bodhan Road, near knowledge park",
    image_url:
      "https://content3.jdmagicbox.com/comp/nizamabad/h9/9999p8462.8462.171201174649.z8h9/catalogue/n-n-palace-function-hall-bodhan-nizamabad-banquet-halls-2e9vk9pi5u.jpg",
    hall_package: 66999,
    capacity: 800,
    bookedDates: [],
  },
  {
    id: 3,
    name: "Imperial Convention",
    address: "Bodhan Road, near Taj Dhaba",
    image_url:
      "https://content3.jdmagicbox.com/comp/nizamabad/q5/9999p8462.8462.221231224415.z8q5/catalogue/imperial-convention-nizamabad-convention-halls-vrsesnjl2j.jpg",
    hall_package: 39999,
    capacity: 1200,
    bookedDates: [],
  },
  {
    id: 4,
    name: "ARR function hall",
    address: "Bodhan Road, near knowledge park",
    image_url:
      "https://files.yappe.in/place/full/arr-function-hall-10511956.webp",
    hall_package: 54999,
    capacity: 400,
    bookedDates: [],
  },
  {
    id: 5,
    name: "AN Garden",
    address: "Bodhan Road, near indo rose nursery",
    image_url:
      "https://img.weddingbazaar.com/photos/pictures/008/688/027/new_large/Screenshot_2024-09-06_123750.png",
    hall_package: 69999,
    capacity: 1000,
    bookedDates: [],
  },
];

function App() {
  const [halls, setHalls] = useState(function_halls);
  const [searchQuery, setSearchQuery] = useState("");

  const updatedDates = (id, value) => {
    setHalls((prevHalls) =>
      prevHalls.map((hall) =>
        hall.id === id
          ? { ...hall, bookedDates: [...hall.bookedDates, value] }
          : hall,
      ),
    );
  };

  const filteredHalls = halls.filter(
    (hall) =>
      hall.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hall.address.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const bookedHalls = halls.filter((hall) => hall.bookedDates.length > 0);

  return (
    <BookingDates.Provider
      value={{
        halls,
        updatedDates,
        filteredHalls,
        bookedHalls,
        searchQuery,
        setSearchQuery,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/bookings"
            element={
              <ProtectedRoute>
                <Bookings />
              </ProtectedRoute>
            }
          />

          <Route
            path="/hall/:id"
            element={
              <ProtectedRoute>
                <FunctionHallDetails />
              </ProtectedRoute>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicePage />} />
        </Routes>
      </BrowserRouter>
    </BookingDates.Provider>
  );
}

export default App;
