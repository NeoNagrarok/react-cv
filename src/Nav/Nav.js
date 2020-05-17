import React from 'react';
import {
	BrowserRouter as Router,
	Link
} from "react-router-dom";
import './Nav.scss';

const Nav = ({match, history, main}) =>
{
	const {currentKey} = match.params;
	let display = <></>;
	for (const key in main)
		display = <>
			{display}
			<span
				className={typeof currentKey !== undefined && currentKey === key ? 'link current' : 'link'}
				augmented-ui="tl-clip bl-clip tr-clip br-clip l-clip-x r-clip-x t-clip-x b-clip-x exe"
			>
				<Link
					className={key}
					to={"/" + key}
					key={key}
					onClick={() => history.replace('/' + key)}
				>
					{main[key].title}
				</Link>
			</span>
		</>;
	return (
		<nav className="mainNav">
			<Router>
				{display}
			</Router>
		</nav>
	);
}

export default Nav;