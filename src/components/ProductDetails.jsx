import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'  // ייבוא קובץ ה-CSS


const ProductDetails = ({list,addP}) => {

  const {id}=useParams();
  const Product= list.find(p=> p.id=== Number(id))
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    addP(Product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // נעלם אחרי 2 שניות
  };

  return (
    <div className="product-details-container">
            {showPopup && <div className="popup-message">✔️ נוסף לסל</div>}

      <img
        src={`/img/${Product.Image}`}
        alt={Product.name}
        className="prod-image"
      />
      <div className="product-info">
        <h3 className="product-name">{Product.name}</h3>
        <h3 className="product-price">₪{Product.price}</h3>
        <h4 className="product-description">{Product.description}</h4>
        <button onClick={()=>{handleAddToCart()}}>הוסף לסל</button>
      </div>
    </div>
  )
}

export default ProductDetails
