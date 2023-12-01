'use client'

import { Header } from "@/pages/Header";
import { Container,Port } from "./styles";
import { Main } from "../pages/Main";
import { colors } from "../theme/colors";
import { Portifolios } from '@/Portifolios';


import { ThemeProvider } from "styled-components";



export default function Home() {
  return (
    <ThemeProvider theme={colors}>
    <Container>
      <Header/>
      <Main/>
      <Port>
       <Portifolios/>
       <Portifolios/>
       <Portifolios/>
       <Portifolios/>
       <Portifolios/>
       <Portifolios/>
       <Portifolios/>
       <Portifolios/>
       <Portifolios/>

            
       </Port>
      
    </Container>
    </ThemeProvider>
  )
}
