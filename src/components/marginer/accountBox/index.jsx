import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
width: 280px;
min-height: 550px;
display: flex;
flex-direction: column;
border-radius:25px;
background-color: #ffffff;
box-shadow:  0 0 2px rgba(15, 15, 15, 0.60);
position: relative;
overflow: hidden;

`;

const TopContainer = styled.div`
width: 100%;
height: 250px;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 0 1.8em;
padding-bottom: 5em;
`;


const BackDrop = styled.div`
width: 160%;
height: 550px;
position: absolute;
display: flex;
flex-direction: column;
border-radius:50%;
transform: rotate()(60deg);
top: -200px;
left: -70px;
background: rgb(250, 196, 15);
background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%
    rgba(243, 172, 18, 1) 100%
);

`;


const HeaderContainer= styled.div`
width:100%;
display: flex;
flex-direction: column;
`;

const HeaderText = styled.h1`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.24;
    color: #ffff;
    z-index:10;
    margin: 0;
    margin-top: 6px;
`;

const SmallText = styled.h5`
    color: #ffff;
    font-weight: 500;
    font-size: 11px;
    z-index: 10;
`;


const InnerContainr = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`;

export function AccountBox(props){
return <BoxContainer>
    <TopContainer>
        <BackDrop />
        <HeaderContainer>
            <HeaderText> Bienvenido </HeaderText>
            <HeaderText> De nuevo</HeaderText>
            <SmallText>Por favor accede para continuar</SmallText>
        </HeaderContainer>
    </TopContainer>
    <InnerContainr></InnerContainr>
</BoxContainer>
}