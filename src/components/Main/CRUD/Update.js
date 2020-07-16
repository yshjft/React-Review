import React, {Component} from 'react';

class Update extends Component {
  constructor(props){
    super(props);
    this.state={
      id : this.props.id,
      title : this.props.title,
      desc : this.props.desc,
    }
  }

  render(){
    return(
      <div>
        <div>
        <h3>UPDATE</h3>
        <form onSubmit={function(e){
          e.preventDefault();
          this.props.update(this.state.id, this.state.title, this.state.desc);
        }.bind(this)}>
          <p>
            <input 
              type='text' 
              name='title' 
              placeholder='title'
              value={this.state.title}
              onChange={function(e){
                this.setState({
                  title : e.target.value,
                });
              }.bind(this)}></input>
          </p>
          <p>
            <textarea 
              name='desc' 
              placeholder='desc'
              value={this.state.desc}
              onChange={function(e){
                this.setState({
                  desc : e.target.value,
                });
              }.bind(this)}></textarea>
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