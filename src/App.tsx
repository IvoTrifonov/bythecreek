import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from './cmps/Header';
import { Footer } from './cmps/Footer';
import { Main } from './cmps/Main';
import './index.scss';

const App = (): JSX.Element => {

  return (
    <React.Fragment>
      <Router>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </Router>
    </React.Fragment>
  )
}

export default App;
