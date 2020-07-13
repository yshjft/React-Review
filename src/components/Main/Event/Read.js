import React, {Component} from 'react';

class Read extends Component{
  render(){
    const selectedID = this.props.id;
    const title=this.props.contents[selectedID-1].title
    const desc=this.props.contents[selectedID-1].desc
    return(
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    );
  }
}

export default Read;