import React, {Component} from 'react'

class Topic extends Component{
  render(){
    var list=[];
    var data=this.props.contents;
    for(let i=0; i<data.length; i++){
      list.push(
        <h3 key={data[i].id}>
          <a href='/'
            onClick={function(id, e){
              e.preventDefault();
              this.props.changePage(id);
            }.bind(this, data[i].id)} //bind(this, data[i].id)를 통해 id를 매개변수로 전달
            >{data[i].title}
          </a>
        </h3>
      );
    }

    return(
      <div className='topic_component'>
        {list}
      </div>
    );
  }
}

export default Topic;