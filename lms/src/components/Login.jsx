import '../css/Login.css'
import background from "../assets/School_Background.jpg";

function App() {
  return (
    <div>
        <div className="background">
            <img src={background} alt="background" />
          </div>

          <div className='container'>
            <div className="login-form">
              <div className="logo">
                <img src={background} alt="logo" />
              </div>
              <label>Email/Student ID</label>
                <div className="input">
                  <input type="email" placeholder='Email/Student ID'/>
                </div>
                <label>Password</label>
                <div className="input">
                    <input type="password" placeholder='Password' />
              </div>
        </div>
        <div className="forgot-password">Forgot Password?</div>
        <div className="submit-container">
          <div className="submit">Login</div>
        </div>
        <div className="signup">No account? Sign up <span>here</span></div>
    </div>

    </div>
  )
}

export default App
