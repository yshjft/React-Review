import React, {Component} from 'react';

class ClassComp extends Component{
  constructor(props){
    super(props);
    this.state={
      number : 1,
    }
  }
  render(){
    return(
      <div>
        <div>class style component</div>
        <div>Number : {this.state.number}</div>
        <input 
          type='button' 
          value='(+) increase' 
          onClick={function(){
            let _number=this.state.number+1;
            this.setState({
              number : _number,
            })
          }.bind(this)}></input>
        <input 
          type='button' 
          value='(-) decrease' 
          onClick={function(){
            let _number=this.state.number-1;
            this.setState({
              number : _number,
            })
          }.bind(this)}></input>
      </div>
    );
  }
}

export default ClassComp;