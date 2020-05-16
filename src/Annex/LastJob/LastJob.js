import React from 'react';

const LastJob =({title, job, where}) =>
{
	return (
		<article>
			<h3>
				{title}
			</h3>
			<ul>
				<li className="signalwowLogo">
					<a href="#signalwow">
						{job}
						<br />
						{where}
					</a>
				</li>
			</ul>
		</article>
	)
}

export default LastJob;