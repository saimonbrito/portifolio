'use client'
import styled from "styled-components";


export const Container = styled.div`
 background-color: ${props => props.theme["gray-900"]};
 display: flex;
 align-items: center;
 justify-content: space-around;
 height: 20rem;
 color: ${props => props.theme["gray-500"]};
 font-size: 18px;
 font-weight: bold;
 margin-bottom: 10px;
 padding: 30px;
 

`;
export const Ivimg = styled.div`
  background-color: ${props => props.theme["gray-800"]};
`;
export const Testapp = styled.text`
background-color: #00001c;
  border-radius: 5px;
  padding: 2px;

`;
export const  Servi = styled.div`
  display: flex;
  justify-content: space-around;
`;