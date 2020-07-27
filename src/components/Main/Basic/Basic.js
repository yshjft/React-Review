import React, {Component} from 'react';
import './Basic.css';

class Basic extends Component{
  render(){
    return(
      <div className='basic_component'>
        <div className='basic_title'>component</div>
        <div className='basic_contents'>props나 state를 사용하지 않은 component 입니다.</div>
        <div></div>
      </div>
    );
  }
}

export default Basic