import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context';

const HomePage = () => {
  const userN = useContext(MyContext).currentUserName

  return (
    <div className="homepage-container">
      {userN && (

        <div className="welcome-message">
          שלום {userN}  😊
        </div>
)}
      <section className="hero-section">
        <img className="hero-image" src="/img/IMGHOME.jpg" alt="בגדי תינוקות" />
        <div className="hero-text">
          <p>קולקציה חדשה נחתה באתר!</p>
          <Link to="/allProducts">
            <button className="hero-button">🧸 אני רוצה לראות</button>
          </Link>
        </div>
        <h1>{userN}</h1>
      </section>
    </div>
  );
};

export default HomePage;
