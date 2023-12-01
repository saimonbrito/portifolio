import React from 'react';
import { Container } from './styles';
import Image from 'next/image'

export function Portifolios() {
  return (
    <Container>
         <div>
          <a href="*">
         <Image 
              src="/sistema-vendas.png"
              width={200}
              height={200}
              alt="Picture of the author"
          />
          </a>
         </div>
         <p>meu projeto</p>
    </Container>
  );
}