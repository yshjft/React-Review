import React, {Component} from 'react';
import ClassComp from './ClassComp';
import FuncComp from './FuncComp';

class Functional extends Component{
  render(){
    return(
      <div>
        <div>{this.props.title}</div>
        <ClassComp></ClassComp>
        <FuncComp title='function style component'></FuncComp>
      </div>
    );
  }
}

export default Functional;