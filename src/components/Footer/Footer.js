import React from 'react';

import styles from './Footer.css';
function Footer(props) {
  return (


    <div className="container">
    <div className="footer">
 
        <h4 className="center white-text footer-update">{props.text}</h4>
        <img className="nintenlogo" src="http://logok.org/wp-content/uploads/2014/12/Nintendo-logo-red.png" />
   </div>
   </div>
  )
}




export default Footer;