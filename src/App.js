import React, {Component} from 'react';
import './App.css';

import Header from './components/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';

class App extends Component {
  render(){
    return(
      <div className='App'>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;