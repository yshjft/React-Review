import React, {Component} from 'react';

class TOC extends Component{
  render(){
    var list=[];
    var data=this.props.contents;

    for(let i=0; i<data.length; i++){
      list.push(
        <div key={data[i].id}>
          <button onClick={function(id, e){
            this.props.selectContents(id);
          }.bind(this, data[i].id)}>{data[i].title}</button>
        </div>
      );
    }

    return(
      <div>
        {list}
      </div>
    )
  }
}

export default TOC;