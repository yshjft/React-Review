import React, {Component} from 'react';

class Basic extends Component{
  render(){
    return(
      <div className='basic_component'>
        <div className='contents_title'>component</div>
        <div className='code_img'>+code image+</div>
        <div className='contents'>props나 state를 사용하지 않은 component 입니다.</div>
      </div>
    );
  }
}

export default Basic