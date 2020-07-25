import React, {Component} from 'react';
import ClassComp from './ClassComp';
import FuncComp from './FuncComp';
import './Functional.css';

class Functional extends Component{
  render(){
    return(
      <div className='class_func_component'>
        <div class='class_func_title'>{this.props.title}</div>
        <ClassComp></ClassComp>
        <FuncComp title='function style component'></FuncComp>
      </div>
    );
  }
}

export default Functional;