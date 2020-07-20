import React, {Component} from 'react';

class Control extends Component{
  render(){
    return(
      <div className='crud_control_component'>
        <div>
          <button onClick={function(){
            this.props.changeMode("create");
          }.bind(this)}>CREATE</button>
        </div>
        <div>
          <button onClick={function(){
            this.props.changeMode("read");
          }.bind(this)}>READ</button>
        </div>
        <div>
          <button onClick={function(){
            this.props.changeMode("update");
          }.bind(this)}>UPDATE</button>
        </div>
        <div>
          <button onClick={function(){
            this.props.changeMode("delete");
          }.bind(this)}>DELETE</button>
        </div>
      </div>
    );
  }
}

export default Control