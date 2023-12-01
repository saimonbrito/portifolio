import { ThemeProvider } from "styled-components";
import { Container ,Logo, LogoLinks, LogoLinksLi, LogoLinksUl} from './styles';
import { colors } from "@/theme/colors";

export function Header() {
  return (
    <ThemeProvider theme={colors}>
    <Container>
        <Logo>
          <h1>Portifolio <strong>Mauricio fernandes</strong></h1>
        </Logo>
        <LogoLinks>
           <LogoLinksUl>
            <LogoLinksLi><a href="">Sobre</a></LogoLinksLi>
            <LogoLinksLi><a href="">Portifolio</a></LogoLinksLi>
            <LogoLinksLi><a href="">Contatos</a></LogoLinksLi>
           </LogoLinksUl>
        </LogoLinks>
    </Container>
    </ThemeProvider>
  );
}