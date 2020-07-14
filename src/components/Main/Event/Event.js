import React, {Component} from 'react';
import Topic from './Topic';
import Read from './Read';
import Explain from './Explain';

class Event extends Component{
  constructor(props){
    super(props);
    this.state={
      selected_id : 1,
      contents_for_event :[
        {id: 1, title : 'WELCOME', desc : 'Welcome to React Review'},
        {id: 2, title : 'HTML', desc : 'HTML is for information'},
        {id: 3, title : 'CSS', desc : 'CSS is for design'},
        {id: 4, title : 'JavaScript', desc : 'JavaScript is for interactive'},
      ]
    }
  }
  render(){
    return(
      <div className='event_component'>
        <div className='event_title'>{this.props.title}</div>
        <Topic 
          contents={this.state.contents_for_event} 
          changePage={function(ID){ //Topic컴포넌트에 호출됩니다.
            var _selected_id=ID;
            this.setState({
              selected_id:_selected_id,
            });
          }.bind(this)}></Topic>
        <Read id={this.state.selected_id} contents={this.state.contents_for_event}></Read>
        <Explain></Explain>
      </div>
    );
  }
}

export default Event;