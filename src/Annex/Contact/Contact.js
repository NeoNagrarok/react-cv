import React from 'react';

const Contact = ({title, address, phone, mail, github}) =>
{
	return (
		<article>
		<h3>
			{title}
		</h3>
		<ul>
			<li class="adress">
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
		</ul>
		</article>
	)
}

export default Contact;