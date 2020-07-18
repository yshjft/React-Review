import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component{
  render(){
    return(
      <div id='footer' className='footer'>
        <div className='footer-title'>React Review</div>
        <div className='footer-madeby'>made by yshjft</div>
        <a className='footer-github' href='https://github.com/yshjft' target='_blank'>yshjft's github</a>
      </div>
    );
  }
}

export default Footer;