import React from 'react';
import './Header.scss';

const Header = ({firstname, lastname, title, photo, quote}) =>
{
	return (
		<header>
			<div
				className="photo"
				augmented-ui="br-clip t-rect l-rect exe"
			>
				<img
					src={photo}
					alt={'Photo de ' + firstname + ' ' + lastname}
				/>
			</div>
			<div
				className='title'
				augmented-ui="tl-clip tr-clip bl-clip br-clip exe"
			>
				<h1>
					{firstname + ' ' + lastname}
				</h1>
				<h2>
					{title}
				</h2>
			</div>
			<q>
				{quote}
			</q>
		</header>
	)
}

export default Header;