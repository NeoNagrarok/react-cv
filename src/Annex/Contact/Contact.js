import React from 'react';

const Contact = ({title, address, phone, mail, github, linkedin}) =>
{
	return (
		<article>
		<h3>
			{title}
		</h3>
		<ul>
			<li className="adress">
				{address.main}<br />
				{address.more}<br />
				{address.zipcode}<br />
				{address.city}<br />
			</li>
			<li className="tel">
				<a href={"tel:" + phone.replace(/\s+/g, '')}>
					{phone}
				</a>
			</li>
			<li className="email">
				<a href={"mailto:" + mail}>
					{mail}
				</a>
			</li>
			<li className="github">
				<a href={github.url} target="_blank">
					{github.text}
				</a>
			</li>
			<li className="linkedin">
				<a href={linkedin.url} target="_blank">
					{linkedin.text}
				</a>
			</li>
		</ul>
		</article>
	)
}

export default Contact;