import React from 'react';
import './Card.scss';

const Card = ({title, sub}) =>
{
	return (
		<article
			className="card"
			augmented-ui="t-clip-x b-clip-x l-clip-y r-clip-y tl-clip tr-clip bl-clip br-clip exe"
		>
			<h4>
				{title}
			</h4>
			<ul
				augmented-ui="tl-clip tr-clip bl-clip br-clip exe"
			>
				{sub.content.map((m, i) => <li key={i}>{m}</li>)}
			</ul>
			{
				sub.link
				?
					<aside>
						<a
							href={"http://" + sub.link.url}
							target="_blank"
						>
							{sub.link.text}
						</a>
					</aside>
				:
				''
			}
		</article>
	);
}

export default Card;