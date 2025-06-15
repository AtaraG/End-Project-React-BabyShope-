import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import HomePage from './components/HomePage';
import AppRoutes from './routes/AppRoutes';
import AllProducts from './components/AllProducts';
import NavBar from './components/NavBar';
import { MyProvider } from './context';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [babyProducts, SetbabyProducts] = useState([
    { id: 1, name: " משטח פעילות דובי ענק -לבן ", price: 420, Image: "p1.webp", description: "משטח פעילות גדול ועבה במיוחד.בעל הרכב בד ייחודי המעניק תחושת רכות מלטפת כמשי", count: 0 },
    { id: 2, name: "משטח פעילות דובי ענק - ורוד ", price: 420, Image: "p2.webp", description: "משטח פעילות גדול ועבה במיוחד.בעל הרכב בד ייחודי המעניק תחושת רכות מלטפת כמשי", count: 0 },
    { id: 3, name: "סוס נדנדה - דובי לבן&בז׳", price: 459.9, Image: "p3.webp", description: "נדנדת דובי מעוצבת שתתן תחילה סטייל לחדר של הבייבי שלך ובגיל המתאים תהיה הסוס נדנדה הבלתי נפרד שלו.", count: 0 },
    { id: 4, name: "שמיכה + פוך למיטת תינוק \ מעבר - בז'", price: 320, Image: "p4.webp", description: "שמיכה רכה מ-100% כותנה אורגנית", count: 0 },
    { id: 5, name: "שמיכה + פוך למיטת תינוק \ מעבר - בועות בז", price: 320, Image: "p5.webp", description: "שמיכה רכה מ-100% כותנה אורגנית", count: 0 },
    { id: 6, name: "נחשוש למיטת תינוק ומעבר - POPO לבן & בז ", price: 89.90, Image: "p6.webp", description: "נחשוש צמה ארוך ורחב במיוחד, משמש כמגן מיטה ותחימת אזור השינה.", count: 0 },
    { id: 7, name: "נחשוש - אפור", price: 89.00, Image: "p7.webp", description: "נחשוש צמה ארוך ורחב במיוחד, משמש כמגן מיטה ותחימת אזור השינה.", count: 0 },
    { id: 8, name: "סלסלה לתמרוקים - דובי", price: 220, Image: "p8.webp", description: "סלסלת דובי לאחסון נוח של תמרוקים ואביזרים ", count: 0 },
    { id: 9, name: "סלסלה לתמרוקים - ורוד", price: 59.90, Image: "p9.webp", description: "חבילת טיטולים סופגים במיוחד", count: 0 },
    { id: 10, name: "סט מצעים לעריסה פרימיום - לבן", price: 350, Image: "p10.jpg", description: "סט מצעים מושלם לעריסה הכולל 3 חלקים :שמיכה, סדין ומגן ראש .", count: 0 },
    { id: 11, name: "סט מצעים לעריסה פרימיום - כחול", price: 350, Image: "p11.webp", description: " סט מצעים מושלם לעריסה הכולל 3 חלקים :שמיכה, סדין ומגן ראש .", count: 0 },
    { id: 12, name: "סט מצעים לעריסה פרימיום - בז'", price: 350, Image: "p12.webp", description: " סט מצעים מושלם לעריסה הכולל 3 חלקים :שמיכה, סדין ומגן ראש .", count: 0 },
    { id: 13, name: "אוהל טיפי - כחול", price: 329, Image: "p13.webp", description: "אוהל טיפי מיוחד שקטנים וגם גדולים אוהבים ממש .", count: 0 },
    { id: 14, name: "אוהל טיפי - ורוד", price: 329, Image: "p14.webp", description: "אוהל טיפי מיוחד שקטנים וגם גדולים אוהבים ממש .", count: 0 },
    { id: 15, name: "אוניברסיטה לתינוק דובי - ורוד", price: 499, Image: "p15.webp", description: "אוניברסיטה לתינוק מלאה בגירויים ומשמשת לאורך זמן .", count: 0 },
    { id: 16, name: "אוניברסיטה לתינוק דובי - כחול ", price: 499, Image: "p16.webp", description: "אוניברסיטה לתינוק מלאה בגירויים ומשמשת לאורך זמן .", count: 0 },
    { id: 17, name: "אוניברסיטה לתינוק דובי - לבן & בז'", price: 329, Image: "p17.webp", description: "וניברסיטה לתינוק מלאה בגירויים ומשמשת לאורך זמן .", count: 0 },
    { id: 18, name: "אוניברסיטה לתינוק ברווז - לבן", price: 329, Image: "p18.webp", description: "אוניברסיטה לתינוק מלאה בגירויים ומשמשת לאורך זמן .", count: 0 },
    { id: 19, name: "ספה נפתחת לילדים - אפור", price: 420, Image: "p19.webp", description: "ספה נפתחת לפעוטות וילדים. מפנקת במיוחד שגם גדולים רוצים.", count: 0 },
    { id: 20, name: "ספה נפתחת לילדים - ב'ז", price: 420, Image: "p20.webp", description: "ספה נפתחת לפעוטות וילדים. מפנקת במיוחד שגם גדולים רוצים.", count: 0 }
  ]);

  const [MyCart, setMyCart] = useState([]);
  //מערך משתמשים
  const [UserList, setUserList] = useState([]);
  const [currentU, setcurrentU] = useState('')
  const Store = {
    UserList,
    AddUser: (user) => {
      setUserList([...UserList, user])
    },

    UserName: (name) => {
      setcurrentU(name)

    },
    currentUserName:currentU
  }

  //הוספת מוצר לעגלת קניות
  const addProductToCart = (p) => {
    setMyCart(prevCart => [...prevCart, p])
  }
  //מחיקת מוצר מעגלת קניות
  const DeletProduct = (id) => {
    const index = MyCart.findIndex(p => p.id === id);
    MyCart.splice(index, 1)
    setMyCart([...MyCart])
  }
  const ResetCart = () => {
    setMyCart([])
  }
  return (
    <div className="App">

      <MyProvider value={Store}>
        <BrowserRouter>

          <NavBar />

          <AppRoutes list={babyProducts} cart={addProductToCart} mycart={MyCart} deletP={DeletProduct}
            reset={ResetCart} />

        </BrowserRouter>

      </MyProvider>
    </div>
  );
}

export default App;
