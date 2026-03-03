import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './index.css';

function BookingCalendar(props) {
    const [selectedDate, setSelectedDate] = useState(null);
    const { bookedDates, updatedDates, id } = props;
    const [hasClicked, setHasClicked] = useState(false);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const tileDisabled = ({ date, view }) => {
        if (view !== "month") return false;
        const activeMonth = selectedDate ? selectedDate.getMonth() : new Date().getMonth();
        if (date.getMonth() !== activeMonth) return false;
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const formatted = formatDate(date);
        
        return date < today || bookedDates?.includes(formatted);
    };

    const tileClassName = ({ date, view }) => {
        if (view !== "month") return null;
        const formatted = formatDate(date);
        if (bookedDates?.includes(formatted)) {
            return "booked-date";
        }
        return null;
    };

    const handleDateChange = (date) => {
        const formatted = formatDate(date);
        if (bookedDates?.includes(formatted)) {
            alert("This date is already booked!");
        } else {
            setSelectedDate(date);
            updatedDates(id, formatted);
            setHasClicked(false); // Closes the calendar automatically
        }
    };

    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 6);

    return (
        <div className="calendar-wrapper"> 
            <h5 className="mb-2 heading-calendar-main">Check Availability</h5>
            
            {/* Replaced Image with Button */}
            {!hasClicked ? (
                <button 
                    className="select-date-btn" 
                    onClick={() => setHasClicked(true)}
                >
                    {selectedDate ? formatDate(selectedDate) : "Select Date"}
                </button>
            ) : (
                <div className="calendar-popup">
                    <div className="top-calendar-container">
                        <h5 className="select-date m-0">Select a Date</h5>
                        <button className="close-button" onClick={() => setHasClicked(false)}>X</button>
                    </div>

                    <Calendar 
                        onChange={handleDateChange}
                        value={selectedDate}
                        minDate={new Date()}
                        maxDate={maxDate}
                        tileDisabled={tileDisabled}
                        tileClassName={tileClassName}
                    />
                </div>
            )}
        </div>
    );
}

export default BookingCalendar;