import React, {Component} from 'react';
import './Props.css';

class Props extends Component{
  render(){
    return(
      <div className='props_component'>
        <div className='props_title'>{this.props.title}</div>
        {/* <div className='code_img'>+code image+</div> */}
        <div className='props_contents'>{this.props.contents}</div>
      </div>
    );
  }
}

export default Props;