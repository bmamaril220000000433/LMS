import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import background from "../assets/School_Background.jpg";
import Logo from '../assets/Kilig_Logo.png';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Here you can add authentication logic before navigating
    navigate("/dashboard"); // Navigate to Dashboard after login
  };

  return (
    <div className="login-page">
      {/* Login Form */}
      <div className="container">
        <div className="login-form">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          
          <label>Email/Student ID</label>
          <div className="input">
            <input type="email" placeholder="Email/Student ID" />
          </div>

          <label>Password</label>
          <div className="input">
            <input type="password" placeholder="Password" />
          </div>

          <div className="forgot-password">Forgot Password?</div>

          <div className="submit-container">
            <button className="submit" onClick={handleLogin}>Login</button>
          </div>

          <div className="signup">
            No account? Sign up <span>here</span>
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

export default Login;
