import React from 'react';
import {
	BrowserRouter as Router,
	Link
} from "react-router-dom";
import './Modal.scss';

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
							to={"/" + currentKey + "/" + categories}
							key={block.content[categories]}
							onClick={() => history.replace('/' + currentKey + '/' + categories)}
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
								<article>
									<h4>
										{block.content[currentCategory].content[sub].title}
									</h4>
									<ul>
										{block.content[currentCategory].content[sub].content.map((m, i) => <li key={i}>{m}</li>)}
									</ul>
									{
										block.content[currentCategory].content[sub].link
										?
											<aside>
												<a
													href={"http://" + block.content[currentCategory].content[sub].link.url}
													target="_blank"
												>
													{block.content[currentCategory].content[sub].link.text}
												</a>
											</aside>
										:
										''
									}
								</article>
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