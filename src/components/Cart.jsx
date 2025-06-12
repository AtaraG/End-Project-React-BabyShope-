import React, { useState } from 'react'
import './Cart.css'  // ייבוא קובץ ה-CSS
import { useNavigate } from 'react-router-dom';


const Cart = ({ mycart, deletP,resetC }) => {
    const navigate=useNavigate();
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const totalSum = mycart.reduce((sum, p) => sum + p.price, 0);
    
     
    const handleOrder = () => {
    resetC()
    setOrderConfirmed(true);
    setTimeout(() => setOrderConfirmed(false), 2000); // ההודעה תיעלם אחרי 3 שניות
    setTimeout(() => {navigate('/')}, 2500); 
        
};



    return (
        <div className="cart-container">

            {orderConfirmed && (
        <div className="order-popup">
          <p>✅ הזמנתך התקבלה</p>
       
        </div>
      )}
            <div className="cart-items">
                {mycart.map(p => (
                    <div className="cart-item" key={p.id}>
                        <img src={`./img/${p.Image}`} alt={p.name} />
                        <p>{p.name}</p>
                        <p>{p.price} ₪</p>
                        <button onClick={() => deletP(p.id)}>🗑️</button>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <h3>סיכום הזמנה</h3>
                <p>כמות מוצרים: {mycart.length}</p>
                <p>סה״כ לתשלום: <strong>{totalSum} ₪</strong></p>
                <label>כתובת למשלוח:</label>
                <input type="text" placeholder="כתוב את כתובתך כאן..." />
                <br />
                <button onClick={() => { handleOrder() }}>אישור הזמנה</button>
            </div>

        </div>


    )
}

export default Cart
