import React from 'react';
import { Header } from './cmps/Header';
import { Footer } from './cmps/Footer';
import './index.scss';

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header></Header>
      <main style={{height: '40em'}}></main>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default App;
