import React, { useContext, useState } from 'react'
import MyContext from '../context'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const AllUsers = useContext(MyContext).UserList;
  const AddU = useContext(MyContext).AddUser
  const currentUserFunc = useContext(MyContext).UserName
  const currentUser2 = useContext(MyContext).currentUserName



  const [CurrentUser, setCurrentUser] = useState({
    name: '',
    email: '',
    pass: ''
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'error' או 'success'

  const [isLogin, setIsLogin] = useState(false);

  //הוספת משתמש למערכת
  const MyUser = () => {
    const ExistingUser = AllUsers.find(u => u.email == CurrentUser.email)
    if (!ExistingUser) {
      AddU(CurrentUser);
      currentUserFunc(CurrentUser.name);
      setCurrentUser({ name: '', email: '', pass: '' })
      setMessage('נרשמת בהצלחה!');
      setMessageType('success');
      setTimeout(() => {
        navigate("/")
      }, 1000);
    }
    else {
      setMessage(' אימייל זה קיים במערכת ');
      setMessageType('error');
      setTimeout(() => {
        setCurrentUser({ name: '', email: '', pass: '' })
        setMessage('');
        setMessageType('');
      }, 2000);

    }
  };
  //התחברות למערכת
  const CheckUser = (email, pass) => {
    const foundUser = AllUsers.find(u => u.email === email);

    if (!foundUser) {
      setMessage('האימייל לא קיים');
      setMessageType('error');

    } else if (foundUser.pass !== pass) {
      setMessage('הסיסמה שגויה');
      setMessageType('error');

    } else {
      setMessage('התחברת בהצלחה!');
      setMessageType('success');
      currentUserFunc(foundUser.name);
      setCurrentUser({ name: '', email: '', pass: '' });
      setTimeout(() => {
        navigate("/")
      }, 2000);

    }
    // גורם להודעה להיעלם אחרי 3 שניות
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 1000);
  };
  //התנתקות מהחשבון
  const Disconnected = () => {
    currentUserFunc(null);
    setTimeout(() => {
      navigate("/")
    }, 1000);

  }

  return (

    <div className="auth-container">
      {currentUser2 && (
        <button className="logout-button" onClick={Disconnected}>
          התנתקות
        </button>
      )}
      <div className="auth-box">
        {message && (
          <div className={`auth-message ${messageType}`}>
            {message}
          </div>
        )}
        <h2>{isLogin ? 'התחברות' : 'הרשמה'}</h2>
        <div className="auth-form">
          {!isLogin && (
            <>
              <label htmlFor="name">שם מלא:</label>
              <input type="text" id="name" name="name" required onChange={(event) =>
                setCurrentUser({ ...CurrentUser, name: event.target.value })} value={CurrentUser.name}
              />
            </>
          )}

          <label htmlFor="email">מייל:</label>
          <input type="email" id="email" name="email" required onChange={(event) =>
            setCurrentUser({ ...CurrentUser, email: event.target.value })} value={CurrentUser.email} />

          <label htmlFor="password">סיסמה:</label>
          <input type="password" id="password" name="password" required onChange={(event) =>
            setCurrentUser({ ...CurrentUser, pass: event.target.value })} value={CurrentUser.pass} />

          <button onClick={() => {
            if (!isLogin) {
              MyUser();
            }
            else {
              CheckUser(CurrentUser.email, CurrentUser.pass)
            }
          }}>
            {isLogin ? 'התחבר' : 'הירשם'}
          </button>
        </div>
        <p className="toggle-link">
          {isLogin ? 'אין לך חשבון?' : 'כבר יש לך חשבון?'}{' '}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'הרשמה' : 'התחברות'}
          </span>
        </p>
        <div className="admin-login-wrapper">
          <button className="admin-login-button" onClick={() => navigate("/Manager")}>
            התחברות מנהל <span className="icon">🔑</span>
          </button>
        </div>


      </div>

    </div>
  )
}
export default Login
