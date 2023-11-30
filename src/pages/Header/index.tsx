
import { Container ,Logo, LogoLinks, LogoLinksLi, LogoLinksUl} from './styles';

export function Header() {
  return (
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
  );
}