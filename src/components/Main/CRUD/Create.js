import React, {Component} from 'react';

class Create extends Component {
  render(){
    return(
      <div>
        <h3>CREATE</h3>
        <form onSubmit={function(e){
          e.preventDefault();
          this.props.submit(e.target.title.value, e.target.desc.value);
        }.bind(this)}>
          <p><input type='text' name='title' placeholder='title'></input></p>
          <p><textarea name='desc' placeholder='description'></textarea></p>
          <p>
            <input type='submit'></input>
          </p>
        </form>
      </div>
    );
  }
}

export default Create;