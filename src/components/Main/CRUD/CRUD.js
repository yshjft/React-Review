import React, {Component} from 'react';
import TOC from './TOC';
import Read from './Read';

class CRUD extends Component {
  constructor(props){
    super(props);
    this.state={
      selected_id:1,
      contents :[
        {id:1, title:"Intro", desc:"생활코딩 react 강의 CRUD 파트를 복습합니다."},
        {id:2, title:"Create", desc:"새로운 내용을 추가해보세요!"},
        {id:3, title:"Read", desc:"내용을 확인해보세요!"},
        {id:4, title:"Update", desc:"기존 내용을 변경해보세요!"},
        {id:5, title:"Read", desc:"마지막으로 원하는 항목을 삭제해보세요!"},
      ],
    }
  }
  render(){
    return(
      <div className='crud_component'>
        <div>{this.props.title}</div>
        <TOC 
          contents={this.state.contents}
          selectContents={function(ID){
            let _selected_id = ID;
            this.setState({
              selected_id : _selected_id,
            });
          }.bind(this)}>
        </TOC>
        <Read selectedID={this.state.selected_id} contents={this.state.contents}></Read>
        <div>control</div>
      </div>
    );
  }
}

export default CRUD;