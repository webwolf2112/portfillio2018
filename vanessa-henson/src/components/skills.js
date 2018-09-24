import React from 'react';

const Skills = (props) => {


	let mySkilz = props.skills.map((skill, index) => {
		return <div key={index} >{skill}</div>;
	});

	console.log(mySkilz);

	return (
		<div>
			<h1>test</h1>
			{mySkilz}
		</div>

		)
};

export default Skills;