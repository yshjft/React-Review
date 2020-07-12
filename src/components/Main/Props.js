import React, {Component} from 'react';

class Props extends Component{
  render(){
    return(
      <div className='props_component'>
        <div className='contents_title'>{this.props.title}</div>
        <div className='code_img'>+code image+</div>
        <div className='contents'>{this.props.contents}</div>
      </div>
    );
  }
}

export default Props