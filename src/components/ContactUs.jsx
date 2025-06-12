import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {

  return (
        <div className="contact-container">
      <h2>צור קשר</h2>
      <form className="contact-form">
        <label htmlFor="name">שם:</label>
        <input type="text" id="name" name="name" placeholder="הכנס את שמך" />

        <label htmlFor="email">אימייל:</label>
        <input type="email" id="email" name="email" placeholder="הכנס את האימייל שלך" />

        <label htmlFor="message">הודעה:</label>
        <textarea id="message" name="message" rows="5" placeholder="כתוב כאן את ההודעה שלך..."></textarea>

        <button type="submit" disabled>שלח (לא פעיל)</button>
      </form>
    </div>
  );
}

export default ContactUs;

