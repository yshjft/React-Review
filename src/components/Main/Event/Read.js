import React, {Component} from 'react';

import './Event.css'

class Read extends Component{
  render(){
    const selectedID = this.props.id;
    const title=this.props.contents[selectedID-1].title
    const desc=this.props.contents[selectedID-1].desc
    return(
      <div className='read_component'>
        <div className='read_title'>{title}</div>
        <div className='read_desc'>{desc}</div>
      </div>
    );
  }
}

export default Read;