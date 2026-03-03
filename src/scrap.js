import React from "react";
import calendarImg from "../assets/calendar.png"; // your local image

const CalendarModal = () => {
  return (
    <div className="mt-4">

      {/* Button */}
      <button
        type="button"
        className="btn btn-primary px-4 py-2"
        data-bs-toggle="modal"
        data-bs-target="#calendarModal"
      >
        Select Date
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="calendarModal"
        tabIndex="-1"
        aria-labelledby="calendarModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="calendarModalLabel">
                Select Date
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body text-center">
              <img
                src={calendarImg}
                alt="Calendar"
                className="img-fluid rounded"
              />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default CalendarModal;
