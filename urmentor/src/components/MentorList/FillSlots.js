import React, { useState } from 'react';
import axios from 'axios';
import './fillSlots.css'
// import React, { useState } from 'react';
// import './SlotSelector.css';

const slots = [
  { time: '06:00 AM' },
  { time: '06:30 AM' },
  { time: '07:00 AM' },
  { time: '07:30 AM' },
  { time: '08:00 AM' },
  { time: '08:30 AM' },
  { time: '09:00 AM' },
  { time: '09:30 AM' },
  { time: '10:00 AM' },
  { time: '10:30 AM' },
  { time: '11:00 AM' },
  { time: '11:30 AM' },
  { time: '12:00 PM' },
  { time: '12:30 PM' },
  { time: '01:00 PM' },
  { time: '01:30 PM' },
  { time: '02:00 PM' },
  { time: '02:30 PM' },
  { time: '03:00 PM' },
  { time: '03:30 PM' },
  { time: '04:00 PM' },
  { time: '04:30 PM' },
  { time: '05:00 PM' },
  { time: '05:30 PM' },
  { time: '06:00 PM' },
  { time: '06:30 PM' },
  { time: '07:00 PM' },
  { time: '07:30 PM' },
  { time: '08:00 PM' },
  { time: '08:30 PM' },
  { time: '09:00 PM' },
  { time: '09:30 PM' },
  { time: '10:00 PM' },
  { time: '10:30 PM' },
  { time: '11:00 PM' }
];

function SlotSelector() {
  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleClick = (index) => {
    const slot = slots[index];
    const isSelected = selectedSlots.includes(slot);
    if (isSelected) {
      setSelectedSlots(selectedSlots.filter(s => s !== slot));
    } else {
      setSelectedSlots([...selectedSlots, slot]);
    }
    console.log(selectedSlots)
  };
  const [subject, setSubject] = useState('');

  const handleSlotClick = (slot) => {
    if (selectedSlots.includes(slot)) {
      setSelectedSlots(selectedSlots.filter(selectedSlot => selectedSlot !== slot));
    } else {
      setSelectedSlots([...selectedSlots, slot]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/book-slots', { slots: selectedSlots, subject });
      alert('Slots booked successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="slot-selector">
      {slots.map((slot, index) => (
        <button
          key={index}
          className=  {`slot-selector slot ${selectedSlots.includes(slot) ? 'selected' : ''}`}
          disabled={selectedSlots.some(s => s.time === slot.time && s !== slot)}
          onClick={() => handleClick(index)}
        >
          {slot.time}
        </button>
      ))}
      <div>
      <form onSubmit={handleSubmit}>
      {/* <div className="slot-selector">{renderSlots()}</div> */}
      <label htmlFor="subject">Subject:</label>
      <input type="text" id="subject" name="subject" value={subject} onChange={event => setSubject(event.target.value)} />
      <button type="submit" disabled={selectedSlots.length === 0 || subject.trim() === ''}>Book Slots</button>
    </form>
      </div>
    </div>
  );
}

export default SlotSelector;
