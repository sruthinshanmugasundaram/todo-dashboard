import React, { useState } from "react";
import styled from "styled-components";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "", name: "", rememberMe: false });

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate('/');
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn();
  };

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <div className="body">
          <form onSubmit={handleSubmit}>
            <div className="form">
              <Title>Create Account</Title>
              <FormField>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  value={formValues.name}
                  onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                  style={{ width: "100%" }} // Set input width to 100%
                />
              </FormField>
              <FormField>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formValues.email}
                  onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                  style={{ width: "100%" }} // Set input width to 100%
                />
              </FormField>
              <FormField>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
                  style={{ width: "100%" }} // Set input width to 100%
                />
              </FormField>
              <FormField>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={formValues.rememberMe}
                    onChange={(e) => setFormValues({ ...formValues, rememberMe: e.target.checked })}
                  />
                  Remember me
                </label>
              </FormField>
              <Button type="submit">Sign Up</Button>
              <AlreadyHaveAccount>
                Already Have an account? <Header login />
              </AlreadyHaveAccount>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    .body {
      background-color: white;
      padding: 3rem;
      border-radius: 0.5rem;
      form {
        .form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 400px; /* Set the width here */
          margin: 0 auto; /* Center the form horizontally */
          input[type="email"],
          input[type="password"],
          input[type="text"] {
            border-radius: 0.5rem;
            padding: 0.5rem 1rem;
            outline: none;
          }
          .title{
            text-align: center;
          }
          button {
            border: none;
            border-radius: 0.3rem;
            padding: 0.5rem 1rem;
            background-color: #4169e1;
            color: white;
            cursor: pointer;
            font-size: 1rem;
          }
          .checkbox {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: black;
          }
        }
      }
    }
  }
`;

const Title = styled.h2`
  text-align: center;
`;

const FormField = styled.div`
  label {
    margin-bottom: 0.5rem;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #4169e1;
  color: white;
  cursor: pointer;
  font-size: 1rem;
`;

const AlreadyHaveAccount = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Register;
