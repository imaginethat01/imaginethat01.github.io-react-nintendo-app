import React from 'react';
import './ClickCard.css';

function handleClick(props) {
	props.reArrangeCards();
	props.clickedCharacter(props.id);
}


function ClickCard(props) {
	return (

<div className="flip-container">

	<div className="flipper">
		<div className="front">
		<img className="mysterybox" src="https://files.gamebanana.com/img/ico/sprays/block---big.gif" />
		</div>


		
		<div className="back">
		<div className="card img-container" onClick={() => handleClick(props)}>
			<img alt={props.name} src={props.image} />
		</div>
		</div>
	</div>
</div>

		
		
	)
}




export default ClickCard