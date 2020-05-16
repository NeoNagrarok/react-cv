import React from 'react';

const Lang = ({title, list}) =>
{
	return (
		<article>
		<h3>
			{title}
		</h3>
		<ul>
		{
				list.map((m, i) => {
					return (
						<li className={m.class} key={i}>
							{m.name} : {m.level}
						</li>
					)
				})
			}
		</ul>
		</article>
	)
}

export default Lang;