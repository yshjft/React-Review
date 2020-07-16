import React, {Component} from 'react';
import TOC from './TOC';
import Control from './Control';
import Create from './Create';
import Read from './Read';
import Update from './Update';

class CRUD extends Component {
  constructor(props){
    super(props);
    this.max_content_id=5;
    this.state={
      mode:"read",
      selected_id:1,
      contents :[
        {id:1, title:"Intro", desc:"생활코딩 react 강의 CRUD 파트를 복습합니다."},
        {id:2, title:"Try Create", desc:"새로운 내용을 추가해보세요!"},
        {id:3, title:"Try Read", desc:"내용을 확인해보세요!"},
        {id:4, title:"Try Update", desc:"기존 내용을 변경해보세요!"},
        {id:5, title:"Try Delete", desc:"원하는 항목을 삭제해보세요!"},
      ],
    }
  }
  render(){
    var _content;
    if(this.state.mode === "create"){
      _content=<Create submit={function(_title, _desc){
        this.max_content_id=this.max_content_id+1;
        var newContents= Array.from(this.state.contents); //기존 배열 복사
        newContents.push({id:this.max_content_id, title:_title, desc:_desc});
        this.setState({
          contents:newContents,
          mode : 'read',
          selected_id : this.max_content_id,
        });
      }.bind(this)}></Create>
    }else if(this.state.mode === "read"){
      _content=<Read selectedID={this.state.selected_id} contents={this.state.contents}></Read>
    }else if(this.state.mode === "update"){
      _content=<Update
        update={function(_id, _title, _desc){
          var updateContents=Array.from(this.state.contents);
          var i=0;
          while(i<updateContents.length){
            if(updateContents[i].id === _id){
              updateContents[i]={id:_id, title:_title, desc:_desc};
              break;
            }
            i++;
          }
          this.setState({
            contents : updateContents,
            mode : 'read',
            selected_id : _id
          });
        }.bind(this)}
        id={this.state.selected_id}
        title={this.state.contents[this.state.selected_id-1].title}
        desc={this.state.contents[this.state.selected_id-1].desc}
        ></Update>
    }

    return(
      <div className='crud_component'>
        <div>{this.props.title}</div>
        <TOC 
          contents={this.state.contents}
          selectContents={function(ID){
            let _selected_id = ID;
            this.setState({
              mode : "read",
              selected_id : _selected_id,
            });
          }.bind(this)}>
        </TOC>
        <br/>
        <Control changeMode={function(new_mode){
          let _mode=new_mode;
          if(_mode === 'delete'){
            if(window.confirm("really?")){
              var deletedContents= Array.from(this.state.contents);
              var i=0;
              while(i<deletedContents.length){
                if(deletedContents[i].id === this.state.selected_id){
                  deletedContents.splice(i,1);
                  break;
                }
                i++;
              }
              for(var j=0; j<deletedContents.length; j++){
                deletedContents[j].id=j+1;
              }
              this.max_content_id=this.max_content_id-1;
              
              this.setState ({
                mode : 'read',
                contents : deletedContents,
                selected_id : 1,
              });
              alert('삭제되었습니다.');
            }
          }else{
            this.setState({
              mode : _mode,
            })
          }
        }.bind(this)}></Control>
        {_content}
      </div>
    );
  }
}

export default CRUD;