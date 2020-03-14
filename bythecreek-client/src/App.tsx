import React from 'react';
import { Header } from './cmps/Header';
import { Footer } from './cmps/Footer';
import { Main } from './cmps/Main';
import './index.scss';

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default App;
