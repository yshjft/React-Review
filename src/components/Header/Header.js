import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
  render(){
    return(
      <div id='header' className='header'>
        <div className='header_title'>React Review</div>
        <div className='header_subtitle'>생활 코딩에서 배운 내용을 복습 정리 합니다</div>
      </div>
    );
  }
}

export default Header;