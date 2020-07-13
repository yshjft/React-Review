import React, {Component} from 'react'

class State extends Component{
  render(){
    return(
      <div className='state_component'>
        <div className='contents_title'>{this.props.title}</div>
        <div className='code_img'>+code image+</div>
        <div className='contents'>
          <div className='sub_title'></div>
          <div className='sub_contents'></div>
          
        </div>
      </div>
    );
  }
}

export default State;