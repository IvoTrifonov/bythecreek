import React, { useRef, ReactElement, ReactChild, JSXElementConstructor } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from './cmps/Header';
import { Footer } from './cmps/Footer';
import { Main } from './cmps/Main';
import './index.scss';

const App = (): JSX.Element => {
  const headerRef = React.createRef<HTMLHeadElement>();

  return (
    <React.Fragment>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </React.Fragment>
  )
}

export default App;
