import React from 'react'

const About = () => {
  return (
  <div className="about-container">
  <img src="./img/about.webp" alt="About us" className="about-image" />

  <div className="about-content">
    <h2 className="about-title">אודותינו</h2>

    <div className="about-section">
      <h3>מי אנחנו?</h3>
      <p>
        אנחנו עסק משפחתי שנולד מתוך אהבה לפרטים הקטנים, עם דגש על שירות אנושי, איכות ואמינות.
      </p>
    </div>

    <div className="about-section">
      <h3>מה אנחנו מציעים?</h3>
      <p>
        מגוון רחב של מוצרים איכותיים שנבחרו בקפידה, עם מחירים הוגנים ושירות בגובה העיניים.
      </p>
    </div>

    <div className="about-section">
      <h3>החזון שלנו</h3>
      <p>
        להעניק ללקוחות חווית קנייה נעימה, מקצועית ונגישה – ולבנות קהילה סביב אמון וחיוך.
      </p>
    </div>
  </div>
</div>

  )
}

export default About
