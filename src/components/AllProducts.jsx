import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AllProducts.css'  // ייבוא קובץ ה-CSS


const AllProducts = ({ list,addP }) => {

  const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

     const handleAddToCart = (p) => {
    addP(p);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // נעלם אחרי 2 שניות
  };


  return (

    <div className="all-products-container">
      <h2 className="all-products-title">כל המוצרים</h2>
            {showPopup && <div className="popup-message">✔️ נוסף לסל</div>}

      <div className="products-grid">

        {list.map(p => (
          <div className="product-card" key={p.id}>
            <img src={`./img/${p.Image}`} alt={p.name} className="product-image" />
            <div className="product-details">
              <div className="product-title">{p.name}</div>
              <div className="product-price">₪{p.price}</div>
              <button className="details-button" onClick={() => { navigate('/ProductDetails/'+p.id) }}>לפרטים נוספים</button>
              <button className="product-button" onClick={()=>{handleAddToCart(p)}}>הוסף לסל</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )

}

export default AllProducts
