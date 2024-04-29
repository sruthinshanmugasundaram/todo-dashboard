import React from 'react'
import styled from 'styled-components'

const Header = (props) => {
  return (
   <HeaderContainer>
     
     <a href={props.login ? '/login' : '/signup'}>
  {props.login ? 'Login' : 'Sign Up'}
</a>

   </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    .logo{
     img{
      height: 3rem;
      cursor: pointer;
     }
    }
    button{
      padding: 0.5rem 1rem;
      background-color: white;
      border: none;
      cursor: pointer;
      color: 	#6495ED;
      border-radius: 0.2rem;
      font-weight: bolder;
      font-size: 1.05rem;
    }
`

export default Header