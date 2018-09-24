import React from 'react';

const Header = (props) => {
	return (
		<header>
			<h1>{props.title}</h1>
			{props.subtitle &&  <h2>Web Developer</h2> }
		</header>
		)
};

export default Header;