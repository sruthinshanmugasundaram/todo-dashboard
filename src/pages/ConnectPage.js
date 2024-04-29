import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ConnectPage = () => {
  return (
    <Container>
      <FormContainer>
        <Message>Weather Page Integration</Message>
        <Button to="/">Connect Page</Button>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #4169E1; /* Changed background color to black */
`;

const FormContainer = styled.div`
  background-color: #fff; /* Changed form background color to white */
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Added box shadow for depth */
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #000; /* Changed font color to black */
`;

const Button = styled(Link)`
  background-color: #4169E1; /* Changed button color to Netflix red */
  color: #fff;
  padding: 0.5rem 2rem; /* Increased padding for button length */
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

`;

export default ConnectPage;
