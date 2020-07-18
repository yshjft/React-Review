import React, {Component} from 'react'
import './State.css'

class State extends Component{
  render(){
    return(
      <div className='state_component'>
        <div className='state_title'>{this.props.title}</div>
        {/* <div className='code_img'>+code image+</div> */}
        <div className='state_contents'>state를 사용한 component</div>
      </div>
    );
  }
}

export default State;