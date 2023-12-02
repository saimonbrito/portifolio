
import { Container,Ivimg,Testapp,Servi} from './styles';

import { colors } from '@/theme/colors';
import { ThemeProvider } from 'styled-components';






export function Main() {
  return (
    <ThemeProvider theme={colors}>
    <Container>
      
       <div>
       
                <p>Sou desenvolvedor gosto muito de tecnologia,</p> 
                <p>gosto de pensar que quando você faz o que gosta não e trabalho 
                  <br/>e um privilegio.</p>
                   <Servi>

                  <div>
                
                  <img width={20} src="./script-java.png" alt="" /> 
                  <Testapp>Javascript</Testapp>
                 </div>
                  
                 <div>
                  <img width={20} src="./biblioteca.png" alt="" />
                   <Testapp>ReactJs</Testapp>
                   </div>
                   
                   <div>
                   <img width={20} src="./script-java.png" alt="" />
                    <Testapp>Nextjs</Testapp>
                    </div>
                    <div>
                    <img width={20} src="./script-java.png" alt="" />
                    <Testapp>Vite</Testapp>
                    </div>
                    </Servi>
                  
                
       </div>    
       <Ivimg> 
          <h2>Desenvolvedor Front-end</h2>
          <a href=""><img width={20} src="./linkedin.png" alt="" /></a>
          
          <a href=""><img width={20} src="./github.png" alt="" /></a>
         
       </Ivimg>

      
      
    </Container>
    </ThemeProvider>
  );
}