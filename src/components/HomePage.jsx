import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <section className="hero-section">
        <img className="hero-image" src="/img/IMGHOME.jpg" alt="בגדי תינוקות" />
        <div className="hero-text">
          <p>קולקציה חדשה נחתה באתר!</p>
          <Link to="/allProducts">
            <button className="hero-button">🧸 אני רוצה לראות</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
