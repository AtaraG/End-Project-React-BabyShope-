import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //משתנים
 const [product,setProdact] =useState([
    {id:1,name:"צעצוע 1",price:50, img:"1.jpg"},
    {id:2,name:"צעצוע 2",price:100,img:"2.jpg"},
    {id:3,name:"צעצוע 3",price:20,img:"3.jpg"},
    {id:4,name:"צעצוע 4",price:150,img:"4.jpg"},
    {id:5,name:"צעצוע 5",price:250,img:"5.jpg"}, 
    {id:6,name:"צעצוע 6",price:200,img:"6.jpg"},
    {id:7,name:"צעצוע 7",price:30,img:"7.jpg"},
    {id:8,name:"צעצוע 8",price:100,img:"8.jpg"},
    {id:9,name:"צעצוע 9",price:20,img:"9.jpg"},
    {id:10,name:"צעצוע 10",price:15,img:"10.png"},
    {id:11,name:"צעצוע 11",price:220,img:"11.png"}, 
    {id:12,name:"צעצוע 12",price:300,img:"12.jpg"}
  ])

  const [filterProdact,setfilterProdact]=useState(product)// מערך מוצרים משןכפל מה שיוצג בפועל למסך
  const [searchValue,setSearchValue]=useState("");// יכיל את מילות החיפוש באינפוט

  const[productval,setproductval]=useState("")//משתנה המקבל שם מוצר להוספה
  const[priceval,setpriceval]=useState("")    //משתנה המקבל מחיר מוצר להוספה

  const[cart,setcart]=useState([]);//מערך של עגלת הקניות
  const sumCart=cart.length;// משתנה לכמות מוצרים בעגלה

  const [User,setUser]=useState("user")// משתנה לסוג המשתמש
  //פונקציות

//הוספת מוצר לחנות לפי מה שנכתב באינפוטים
  const addProduct=()=>{
    const newProduct={
      id:product[product.length-1].id+1,
      name:productval,
      price:priceval
    }
    //עריכת מערך המוצרים- משכפלת כל מה שקיים בו ומוסיפה מוצר חדש
    product.push(newProduct)
     setfilterProdact([...product])
    console.log(newProduct);
    
  }

//פונקציה שמוסיפה את הפריט למערך העגלה
const addcart=(p)=>{
  setcart([...cart,p])
}
// פונקציה שמוחקת מוצר מהעגלה
const deleteP=(id)=>{
  const index=cart.findIndex(p=>p.id==id)
  const newcart=[...cart];
  newcart.splice(index,1);
  setcart(newcart);
}
//שליחת ההזמנה
const send=()=>{
  alert("הזמנתך התקבלה ❤️")
}
//פונקצית חיפוש
const search=(txt)=>{
  setSearchValue(txt)
  const filterArr=product.filter(p=>p.name.includes(txt)||
  p.price.toString().includes(txt))

  setfilterProdact(filterArr)
}

  


  return (
    <div className="App">
      <header></header>
      <button onClick={()=>setUser("manager")}>מנהל </button>
      <button onClick={()=>setUser("user")}>אורח</button>
      <nav>
        {User=="manager"  && <a href="#addp">הוסף מוצר לחנות</a>}<br />
      <a href="#cart">לעגלת הקניות שלי</a>
      <input id='search' type="text" placeholder='חפש מוצר...' onChange={(event)=>search(event.target.value)} value={searchValue} /></nav>
     

      <section>
        {// רנדור מערך -הוספת המוצרים מהמערך לתצוגה
          filterProdact.map(p=> <div className='prod1'>
            <img src={"./image/"+p.img} alt="" />
            <p>{p.name}</p>
            <h3>{p.price} ש"ח</h3>
            <button className='button-p' onClick={()=>{addcart(p)}}>+</button>
          </div>)
        }
      </section>
      {User=="manager" &&
        <form >
        <div id='addp'>
          <h4>הוסף מוצר לחנות</h4>
      <input type="text" placeholder='הכנס שם מוצר' onChange={(event)=>{setproductval(event.target.value)}} value={productval}/>
      <input type="text" placeholder='הכנס מחיר מוצר'onChange={(event)=>{setpriceval(parseInt(event.target.value))}} value={priceval}/>
      <button className='button-p' type="button" onClick={()=>{addProduct()}}>הוסף</button>
        
        </div>
      </form>}
      <br />

        <div id='cart'>
        <h3 >עגלת הקניות</h3>
        <ul>
          {// רנדור מערך -הוספת המוצרים מהמערך לעגלה
            cart.length==0?
            <p>העגלה שלך ריקה...</p>:

          cart.map(p=> <li>
            <h5>{p.name} : {p.price} ש"ח <button onClick={()=>{deleteP(p.id)}}>הסר</button></h5>
            
          </li>)
        }
        </ul>
        <h4>סה"כ מוצרים בעגלה {sumCart}</h4>

        <button className='button-p' onClick={()=> {send()}}>בצע הזמנה</button>
        </div>


  

    </div>
  );
}

export default App;
