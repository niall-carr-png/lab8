import React from "react";
export class Content extends React.Component{
	
	/* The main component of the page, including accurate time */
	render(){
		return (
			<div>
				<h1>Hello World</h1>
				<h2>It is {new Date().toLocaleTimeString()} </h2>
			</div>
        )
	}
}