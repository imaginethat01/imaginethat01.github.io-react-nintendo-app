import React from 'react';

import styles from './Navbar.css';




function Navbar(props) {
	return(
	<div className="navbar-fixed">
		<nav>
			<div className="nav-wrapper">
				<a style={{cursor: 'pointer'}}className='left' onClick={() => 
					{document.getElementsByClassName('instructionsModal')[0].classList.remove('hide');
				}}>Instructions</a>
				<a href="/" className='brand-logo center'>Nintendo Memory Game</a>
				<ul className='right'>
					<li style={{paddingRight: "60px"}}>Score: {props.score}</li>
					<li style={{paddingRight: "60px"}}>Top Score: {props.topScore}</li>
				</ul>
			</div>
		</nav>
	</div>
	)
}



export default Navbar;








