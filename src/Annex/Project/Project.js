import React from 'react';

const Project = ({title, list}) =>
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
							<a href={'#' + m.name}>
								{m.name}
							</a>
						</li>
					)
				})
			}
		</ul>
		</article>
	)
}

export default Project;