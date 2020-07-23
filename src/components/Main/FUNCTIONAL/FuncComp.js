import React, {useState} from 'react';

function FuncComp(props){
  var [number, setNumber]=useState(1);

  return(
    <div>
      <div>{props.title}</div>
      <div>Number: {number}</div>
      <input 
        type='button' 
        value='(+) increase'
        onClick={function(){
          var _number=number+1;
          setNumber(_number);
        }}></input>
      <input 
        type='button' 
        value='(-) decrease'
        onClick={function(){
          var _number=number-1;
          setNumber(_number);
        }}></input>
    </div>
  )
}

export default FuncComp;