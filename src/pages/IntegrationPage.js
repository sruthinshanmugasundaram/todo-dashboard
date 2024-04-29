import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const IntegrationPage = () => {
  const navigate = useNavigate();
  const handleDeleteIntegration = () => {
    navigate("/login");
  };

  const handleReplyToMessages = () => {
    navigate("/signup");
  };


  return (
    <Container>
      <FormContainer>
        <Message>Dashboard Page Integrations</Message>
        <Message>Integrated Page: <strong>Amazon Business</strong></Message>
        <ButtonContainer>
          <ButtonDelete onClick={handleDeleteIntegration}>Go back To Login page</ButtonDelete>
        </ButtonContainer>
        <ButtonContainer>
          <ButtonReply onClick={handleReplyToMessages}>Go back To signin page</ButtonReply>
        </ButtonContainer>
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
  padding: 3rem 3rem 1.5rem 3rem;
  border-radius: 1.3rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Added box shadow for depth */
`;

const Message = styled.p`
  text-align: center; /* Aligning message content to center */
  font-size: 1.5rem;
  margin-bottom: 1.5rem; /* Increased margin between messages and buttons */
  color: #000; /* Changed font color to black */
`;

const ButtonContainer = styled.div`
  margin-bottom: 1rem; /* Added margin-bottom to create a gap between buttons */
`;

const Button = styled.button`
  color: #fff;
  padding: 0.8rem 8rem ; /* Increased padding for button length */
  border: none;
  border-radius: 0.3rem;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const ButtonDelete = styled(Button)`
  background-color: #FF0000; /* Changed button color to red for deletion */
`;

const ButtonReply = styled(Button)`
  background-color: #4169E1; /* Changed button color to green for reply */
`;

export default IntegrationPage;
