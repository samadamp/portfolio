import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, extendTheme, Flex } from '@chakra-ui/react'
import {theme} from './theme.ts'
import { routePaths } from './routepaths.ts';
import { About } from './views/About.tsx';
import { Contact } from './views/Contact.tsx';
import { LandingPage } from './views/Landingpage.tsx';
import { Projects } from './views/Projects.tsx';
import App from './App.tsx'

const customTheme = extendTheme(
  theme
);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
        <Flex bg="teal.50" 
        flexDir="column" justifyContent="center" alignItems="center">
    <BrowserRouter>
        <Routes>
          
          <Route  index element={<LandingPage />} />
          <Route path={routePaths.home} element={<App />} />
          <Route path={routePaths.about} element={<About />} />
          <Route path={routePaths.projects} element={<Projects />} />
          <Route path={routePaths.contact} element={<Contact />} />
          
          
        </Routes>
      </BrowserRouter>
</Flex>
    </ChakraProvider>
  </React.StrictMode>,
)
