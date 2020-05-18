import React from 'react';
import {
	BrowserRouter as Router,
	Link
} from "react-router-dom";
import './Modal.scss';
import Card from './Card/Card'

const Modal = ({match, history, block}) =>
{
	const {currentKey, currentCategory} = match.params;
	let display = <></>;
	let nav = <></>;
	if (block)
	{
		console.log('block')
		console.log(block)
		display = <>{display}<h2 className="screen-reader-text">{block.title}</h2></>
		for (const categories in block.content)
		{
			nav =	<>
						{nav}
						<Link
							className={typeof currentCategory !== undefined && currentCategory === categories ? 'current' : ''}
							to={"/" + currentKey + "/" + categories}
							key={block.content[categories]}
							onClick={() => history.replace('/' + currentKey + '/' + categories)}
							augmented-ui="t-clip-x tl-clip tr-clip bl-clip-x br-clip-x exe"
						>
							{block.content[categories].title}
						</Link>
					</>;
		}
		nav =	<nav>
					<Router>
						{nav}
					</Router>
				</nav>;
		display = <>{display}{nav}</>
		let article = <></>
		if (currentCategory)
		{
			for (const sub in block.content[currentCategory].content)
				article =	<>
								{article}
								<Card
									title={block.content[currentCategory].content[sub].title}
									sub={block.content[currentCategory].content[sub]}
								/>
							</>;
			article = <section><h3 className="screen-reader-text">{block.content[currentCategory].title}</h3>{article}</section>;
		}
		display = <>{display}{article}</>
	}
	return (
		<section
			className="modal"
			augmented-ui="tl-clip tr-clip bl-clip br-clip exe"
		>
			{display}
		</section>
	);
}

export default Modal;