import React, {Component} from 'react';

class Update extends Component {
  render(){
    return(
      <div>
        <div>
        <h3>UPDATE</h3>
        <form onSubmit={function(e){
          e.preventDefault();
          
        }.bind(this)}>
          <p>
            <input 
              type='text' 
              name='title' 
              placeholder='title'
              value={this.props.title}
              onChange></input>
          </p>
          <p>
            <textarea 
              name='desc' 
              placeholder='desc'
              placeholder='desc'
              value={this.props.desc}
              onChange></textarea>
          </p>
          <p>
            <input type='submit'></input>
          </p>
        </form>
      </div>
      </div>
    );
  }
}

export default Update;