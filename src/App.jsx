//page for assemblings all the components together (entry point)
//Routing page
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Nav from "./Components/Nav"
import Portfolio from "./pages/portfolio";
import Homepage from './pages/Homepage';
import About from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './Components/Header';
import Footer from './Components/Feet';
import CodingPortfolio from './pages/CodingProjects';
//react is architect, like lego blocks

function App() {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPages = () => {
    if (currentPage === 'Home') {
      return <Homepage />;
    }//return corresponding jsx file
    if (currentPage === 'AboutMe') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume/>;
    }
    if (currentPage === 'CodingProjects') {
      return <CodingPortfolio/>
    }
    if (currentPage === "Contact") {
      return <Contact />;    }
    //add error route
  };
  return (//This is the main rendering entry point
    <>
  <Header setCurrentPage={setCurrentPage}>
  </Header>
  {renderPages()}
  <Footer/>
      
    </>
  )
};

export default App;
