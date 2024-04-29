import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import styled from "styled-components";
import { firebaseAuth } from "../utils/firebase-config";
import Header from "../components/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      if (rememberMe) {
        localStorage.setItem("email", email);
        localStorage.setItem("rememberMe", rememberMe);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("rememberMe");
      }
      if (firebaseAuth.currentUser) {
        navigate("/connect"); 
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const rememberMeState = localStorage.getItem("rememberMe") === "true";
    if (rememberMeState) {
      const savedEmail = localStorage.getItem("email") || "";
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  return (
    <Wrapper>
      <BackgroundImage />
      <div className="loginContent">
        <div className="form-wrapper">
          <div className="form">
            <div className="title">
              <h2>Login to your account</h2>
            </div>
            <div className="container">
              <p>Email</p>
              <input
                type="text"
                placeholder="examplemail@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <p>Password</p>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <button onClick={handleLogin}>Login</button>
            </div>
            <AlreadyHaveAccount>
                Already Have an account? <Header />
              </AlreadyHaveAccount>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const AlreadyHaveAccount = styled.p`
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
  position: relative;
  .loginContent {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
    .form-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      height: 85vh;
    }
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background-color: white;
      height: 70vh;
      padding: 2rem;
      color: black;
      border-radius: 1.5rem;

      .container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        input {
          border-radius: 0.4rem;
          padding: 0.5rem 1rem;
          width: 25rem;
          height: 2.9rem;
          outline: none;
        }
        .checkbox {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .checkbox input[type="checkbox"] {
          appearance: none;
          width: 0.8rem; /* Adjust the width to make the checkbox smaller */
          height: 0.8rem; /* Adjust the height to make the checkbox smaller */
          border: 1px solid #333;
          border-radius: 0.2rem;
          cursor: pointer;
        }
        
        .checkbox input[type="checkbox"]:checked {
          background-color: #333;
        }
        
        .checkbox input[type="checkbox"]:checked::after {
          content: "\u2714";
          font-size: 0.6rem; /* Adjust the font-size to make the tick mark smaller */
          color: #fff;
          position: absolute;
          top: 0.1rem; /* Adjust the position of the tick mark */
          left: 0.2rem; /* Adjust the position of the tick mark */
        }
        
        button {
          padding: 0.5rem;
          background-color: #4169e1;
          border: none;
          cursor: pointer;
          border-radius: 0.4rem;
          height: 3.4rem;
          color: black;
          font-weight: bolder;
          font-size: 1.05rem;
        }
        
      }
    }
  }
`;

export default Login;
