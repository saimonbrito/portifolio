
import { Container,Ivimg} from './styles';
import Image from 'next/image'
import { colors } from '@/theme/colors';
import { ThemeProvider } from 'styled-components';





export function Main() {
  return (
    <ThemeProvider theme={colors}>
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
       <Ivimg> 
            <Image 
              src="/so.png"
              width={200}
              height={200}
              alt="Picture of the author"
          />
       </Ivimg>
      
    </Container>
    </ThemeProvider>
  );
}