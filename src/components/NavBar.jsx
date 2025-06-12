import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './NavBar.css'  // ייבוא קובץ ה-CSS


function NavBar() {
    const navigate = useNavigate();

    return (
        <div>
            <header className="header">

                {/* צד ימין ריק לצורך חלוקה שווה */}
                <div style={{ width: "80px" }}></div>

                {/* אמצע - לוגו */}
                <img onClick={() => { navigate("/") }} className="logo" src="/img/LOGO.webp" alt="לוגו החנות" />
                
                {/* צד שמאל - איקונים */}
                <div className="header-icons">
                    <img onClick={() => { navigate("/login") }} className='icon' src="/img/login.png" alt="התחברות" />
                    <img onClick={() => { navigate("/Cart") }} className='icon' src="/img/iconCart.png" alt="עגלת קניות" />
                </div>

            </header>

            <nav className="nav-bar">
                <Link to="/allProducts">כל המוצרים</Link>
                |
                <Link to="/about">אודות</Link>
                |
                <Link to="/contact">צור קשר</Link>
            </nav>

        </div>
    )
}

export default NavBar
