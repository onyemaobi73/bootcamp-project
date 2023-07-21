import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <div>
        <Container>
            <Main>
                <Title>Stationery seller</Title>
                <NavHolder>
                    <Nav>Home</Nav>
                    <Nav>Catalogue</Nav>
                    <Nav>Women</Nav>
                    <Nav>Men</Nav>
                    <Nav>Accessories</Nav>
                    <Nav>Sale</Nav>
                    <Nav>News</Nav>
                    <Nav>Info</Nav>
                </NavHolder>
            </Main>
        </Container>
    </div>
  )
}

export default Header

const Nav = styled.div`

`
const NavHolder = styled.div`
display: flex;
width: 60%;
justify-content: space-around;
align-items: center;
margin: 0  20%;
margin-right:30px;



`
const Title = styled.div`
    font-size: 25px;
    font-weight: 600;
padding: 20px 30px;
`
const Main = styled.div`
width: 95%;
height: 70px;
background-color: blue;
`
const Container = styled.div`
width: 100%;
height: 80px;
background-color: blue;
`