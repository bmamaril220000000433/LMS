import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import 'primeicons/primeicons.css';
import background from "../assets/School_Background.jpg";
import Logo from '../assets/Kilig_Logo.png';

function Register() {
  const navigate = useNavigate();

  const goback = () => {
    navigate("/");
  };

  return (
    <div className="register-page">
      {/* Login Form */}
      <div className="container">
        <div className="register-form relative">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <i className="pi pi-arrow-left text-2xl text-black cursor-pointer absolute -top-10 left-4" onClick={goback}></i>

          <label>Email/Student ID</label>
          <div className="input">
            <input type="email" placeholder="Email/Student ID" />
          </div>

          <label>New Password</label>
          <div className="input">
            <input type="password" placeholder="Password" />
          </div>

          <label>Confirm Password</label>
          <div className="input">
            <input type="password" placeholder="Password" />
          </div>

          <div className="submit-container">
            <button className="submit" onClick={goback}>Register</button>
          </div>

        </div>
      </div>

      {/* Background Image */}
      <div className="background">
        <img src={background} alt="background" />
      </div>
    </div>
  );
}

export default Register;
