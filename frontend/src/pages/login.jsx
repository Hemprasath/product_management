import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styling/login.css";

const LoginPage = ({ onlogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    const validEmail = "admin@gmail.com";
    const validPassword = "admin";

    if (email === validEmail && password === validPassword) {
      console.log("Login successful!");
      navigate("/home"); // Redirect to homepage
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="loginbackground">
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
