import React, {Component} from 'react';
import Basic from './Basic';
import Props from './Props';
import State from './State';
import Event from './Event/Event';

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      title_for_state : 'component with state',
      content_for_state : 'state를 사용한 component 입니다.',
      title_for_event : 'event',
    }
  }
  render(){
    return(
      <div id="mainContents">
        <Basic></Basic>
        <Props title='component with props' contents='props를 사용한 component입니다.'></Props>
        <State title={this.state.title_for_state} contents={this.state.content_for_state}></State>
        <Event title={this.state.title_for_event}></Event>
        <div>CRUD</div>
      </div>
    );
  }
}

export default Main;