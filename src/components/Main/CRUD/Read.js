import React, {Component} from 'react';

class Read extends Component{
  render(){
    const selectedID=this.props.selectedID;
    const title=this.props.contents[selectedID-1].title;
    const desc=this.props.contents[selectedID-1].desc;
    return(
      <div>
        <h3>{title}</h3>
        <div>{desc}</div>
      </div>
    );
  }
}

export default Read;