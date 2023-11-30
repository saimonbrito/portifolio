import React from 'react';
import { Container } from './styles';
import Image from 'next/image'

export function Main() {
  return (
    <Container>
       <div>
       
                <p>Sou desenvolvedor gosto muito de tecnologia,</p> 
                <p>gosto de pensar que quando você faz o que gosta não e trabalho e um privilegio,
                <br/>estou sempre buscando mais conhecimento para minha evolução como desenvolvedor</p> 
                <p>pretendo desenvolver algo que mude as coisas como são, 
                <br/>edezenvolver um projeto que mudada vidas que ajude pessoas a desenvolver nao so na programaçao mas na vida em si 
                <br/> estou estudando a mais de 1 ano e meio tanto no 
                <br/>efront-end html css, javascript, reactjs, tailwindcss alguns framework e bibliotecas  como no
                <br/> back-end  nodejs, axprees, fastify, mysql, mongodb, algumas algumas bibliotecar e frame framework</p>
       </div>
       <div> 
            <Image
              src="/so.png"
              width={400}
              height={400}
              alt="Picture of the author"
          />
        <img src="./fotos" alt="" />
            
       </div>
    </Container>
  );
}