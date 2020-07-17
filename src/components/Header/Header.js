import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
  render(){
    return(
      <div id='header' className='header'>
        <h1>React Review</h1>
        <h2>생활 코딩에서 배운 내용을 복습 정리 합니다</h2>
      </div>
    );
  }
}

export default Header;