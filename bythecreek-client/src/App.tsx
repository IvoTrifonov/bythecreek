import React from 'react';
import { Header } from './cmps/Header';
import { Footer } from './cmps/Footer';
import './index.scss';

const App = (): JSX.Element => {
  return (
    <div>
      <Header></Header>
      <Footer></Footer>
    </div>
  )
}

export default App;
