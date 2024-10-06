import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [persons, setPersons] = useState([{ fullName: '', contactNumber: '', age: '', gender: '' }]);
  const navigate = useNavigate();

  const handlePersonChange = (index, e) => {
    const updatedPersons = persons.map((person, i) =>
      i === index ? { ...person, [e.target.name]: e.target.value } : person
    );
    setPersons(updatedPersons);
  };

  const addPerson = () => {
    setPersons([...persons, { fullName: '', contactNumber: '', age: '', gender: '' }]);
  };

  return (
    <div className="booking-form-container">
      <h2>Booking Information</h2>
      <form>
        {persons.map((person, index) => (
          <div key={index} className="person-form">
            <h3>Person {index + 1}</h3>
            <div className="form-group">
              <label>Full Name:</label>
              <input type="text" name="fullName" value={person.fullName} onChange={(e) => handlePersonChange(index, e)} />
            </div>
            <div className="form-group">
              <label>Contact Number:</label>
              <input type="text" name="contactNumber" value={person.contactNumber} onChange={(e) => handlePersonChange(index, e)} />
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input type="number" name="age" value={person.age} onChange={(e) => handlePersonChange(index, e)} />
            </div>
            <div className="form-group">
              <label>Gender:</label>
              <select name="gender" value={person.gender} onChange={(e) => handlePersonChange(index, e)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <hr />
          </div>
        ))}
        <button type="button" className="add-person" style={{ backgroundColor: '#FFC107', color: '#fff' }} onClick={addPerson}>Add Person</button>
        <div className="action-buttons">
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button type="button" className="book-btn flight" style={{ marginRight: '20px' }} onClick={() => navigate('/flight-booking')}>Flight Booking</button>
            <button type="button" className="book-btn railway" style={{ marginLeft: '20px' }} onClick={() => navigate('/railway-booking')}>Railway Booking</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;