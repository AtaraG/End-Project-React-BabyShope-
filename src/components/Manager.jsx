import React, { useContext, useState } from 'react'
import MyContext from '../context'
import './Manager.css'

const Manager = ({ list, AddProdFunc, DeletProdFunc, UpdatePriceFunc }) => {

    const [action, setAction] = useState(null);
    const [formData, setFormData] = useState({
        id: Math.max(...list.map(p => p.id), 0) + 1,
        name: '',
        price: '',
        Image: 'LOGO.webp',
        description: '',
        count: 0
    });
    const [Id, setId] = useState()
    const [NewPrice, setNewPrice] = useState()
    const [message, setMessage] = useState('');

    const showMessage = (text) => {
        setMessage(text);
        setTimeout(() => {
            setMessage('');
        }, 2000); 
    };


    const AddP = () => {
        AddProdFunc(formData)
        setFormData({ ...formData, name: '', price: '' })
        showMessage('✅ המוצר נוסף בהצלחה');

    }
    const DeleteP = (Id) => {
       const success = DeletProdFunc(Id)
       if (success){
        setId('')
        showMessage('✅ המוצר נמחק בהצלחה');}
        else {
    showMessage('❌ לא נמצא מוצר עם מזהה זה');
  }

    }
const UpdatePrice = () => {
  const success = UpdatePriceFunc(Id, NewPrice);

  if (success) {
    showMessage('✅ המחיר עודכן בהצלחה');
    setId('');
    setNewPrice('');
  } else {
    showMessage('❌ לא נמצא מוצר עם מזהה זה');
  }
};

    return (
       
        <div className="admin-page">
              {message && (
                <div className="notification">
                    {message}
                </div>
            )}
            <h2>ניהול מוצרים</h2>

            <div className="admin-actions">
                <button onClick={() => setAction('add')}>➕ הוספת מוצר</button>
                <button onClick={() => setAction('delete')}>🗑️ מחיקת מוצר</button>
                <button onClick={() => setAction('update')}>✏️ עדכון מחיר</button>
            </div>

            <div className="admin-form">
                {action === 'add' && (
                    <>
                        <input type="text" name="name" placeholder="שם מוצר"
                            onChange={(event) => { setFormData({ ...formData, name: event.target.value }) }}
                            value={formData.name} />
                        <input type="number" name="price" placeholder="מחיר"
                            onChange={(event) => { setFormData({ ...formData, price: Number(event.target.value) }) }}
                            value={formData.price} />
                        <button onClick={() => { AddP() }}>הוסף</button>
                    </>
                )}

                {action === 'delete' && (
                    <>
                        <input type="text" name="id" placeholder="מזהה מוצר למחיקה"
                            onChange={(event) => { setId(event.target.value) }} value={Id} />
                        <button onClick={() => { DeleteP(Id) }}>מחק</button>
                    </>
                )}

                {action === 'update' && (
                    <>
                        <input type="text" name="id" placeholder="מזהה מוצר"
                            onChange={(event) => { setId(event.target.value) }} value={Id} />
                        <input type="number" name="price" placeholder="מחיר חדש"
                            onChange={(event) => { setNewPrice(event.target.value) }} value={NewPrice} />
                        <button onClick={() => { UpdatePrice() }}>עדכן</button>
                    </>
                )}
            </div>
        </div>
    );
}


export default Manager
