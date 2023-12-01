'use client'
import styled from "styled-components";


export const Container = styled.div`
 background-color: ;
 height: 70px;
 display: flex;
 justify-content: space-between;
 padding: 30px;

 

`;
export const Logo = styled.text`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: darkslategrey;

`;
export const LogoLinks = styled.div`


`;
export const LogoLinksUl = styled.ul`
 display: flex;
 gap: 64px;
 list-style-type: none;
 color: ${props => props.theme["gray-600"]};
 
 
 
`;
export const LogoLinksLi = styled.li`
color: black;
`;
