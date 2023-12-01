'use client'

import styled from 'styled-components';

export const Container = styled.body`
  background-color: ${props => props.theme["gray-900"]} ;
  width: 100%;
  max-width: 1020px;
  margin: auto;
`;

export const Port = styled.div`
 display: flex;
 justify-content: space-around;
 gap: 32px;
 flex-flow: row wrap;
`;