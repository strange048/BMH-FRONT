import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.css"; 

function BookingCalendar({ bookedDates = [], setDate }) {
    const [selectedDate, setSelectedDate] = useState(null);

    // Formats date to YYYY-MM-DD for consistency with your backend/context data
    const formatDate = (date) => {
        return date.toLocaleDateString('en-CA');
    };

    const tileDisabled = ({ date, view }) => {
        if (view !== "month") return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        // Disable past dates and dates already present in bookedDates array
        return date < today || bookedDates.includes(formatDate(date));
    };

    const tileClassName = ({ date, view }) => {
        if (view !== "month") return null;

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const formattedDate = formatDate(date);

        if (date < today) return "past-date";
        if (bookedDates.includes(formattedDate)) return "booked-date";
        
        return "un-booked-date";
    };

    const handleDateChange = (date) => {
        const formatted = formatDate(date);

        // Toggle selection logic: clicking the same date again deselects it
        if (selectedDate && formatDate(selectedDate) === formatted) {
            setSelectedDate(null);
            setDate(null); 
            return;
        }

        if (!bookedDates.includes(formatted)) {
            setSelectedDate(date);
            setDate(date); // Send Date object to parent/modal
        }
    };

    return (
        <div className="calendar-card border-0 shadow-sm rounded-4 bg-white p-3">
            <div className="calendar-container">
                <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    minDate={new Date()}
                    maxDate={new Date(new Date().setMonth(new Date().getMonth() + 6))}
                    tileDisabled={tileDisabled}
                    tileClassName={tileClassName}
                    next2Label={null}
                    prev2Label={null}
                />

                {/* Legend Section */}
                <div className="mt-4 d-flex justify-content-center gap-4 small border-top pt-3">
                    <div className="d-flex align-items-center gap-2">
                        <span className="legend-dot available"></span>
                        <span className="text-muted fw-semibold">Available</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <span className="legend-dot booked"></span>
                        <span className="text-muted fw-semibold">Booked</span>
                    </div>
                </div>

                {/* Selected Date Indicator */}
                {selectedDate && (
                    <div className="mt-3 p-2 bg-primary-subtle border border-primary-subtle rounded-3 text-primary text-center x-small fw-bold">
                         Selected: {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookingCalendar;