import React, {Component} from 'react';

import './Event.css';

class Explain extends Component{
  render(){
    return(
      <div className='explain_component'>
        {/* <div className='code_img'>+code image+</div> */}
        <div className='contents'>컴포넌트 이벤트를 구현하였습니다. </div>
      </div>
    );
  }
}

export default Explain;