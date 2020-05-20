import React, { useState } from 'react';
import './Annex.scss';
import Contact from './Contact/Contact';
import LastJob from './LastJob/LastJob';
import Project from './Project/Project';
import Lang from './Lang/Lang';

const Annex = ({contact, lastJob, project, lang}) =>
{
	const [out, setOut] = useState(false)

	return (
		<section 
			className={!out ? "left-column" : "left-column show"}
		>
			<h2 className="screen-reader-text">
				Colonne de gauche : coordonées, dernier emploi occupé, projets et langues.
			</h2>
			<Contact {...contact}/>
			<LastJob {...lastJob} />
			<Project {...project} />
			<Lang {...lang} />
			<button
				className="displayContact"
				onClick={() => {
					setOut(!out);
				}}
			>
			<span
				className={!out ? 'arrowRight' : 'arrowLeft'}
				augmented-ui={!out ? "l-clip r-rect br-clip tr-clip exe" : "l-rect r-clip bl-clip tl-clip exe"}
			>&nbsp;</span>
			<span
				className={!out ? 'arrowRight' : 'arrowLeft'}
				augmented-ui={!out ? "l-clip r-rect br-clip tr-clip exe" : "l-rect r-clip bl-clip tl-clip exe"}
			>&nbsp;</span>
			<span
				className={!out ? 'arrowRight' : 'arrowLeft'}
				augmented-ui={!out ? "l-clip r-rect br-clip tr-clip exe" : "l-rect r-clip bl-clip tl-clip exe"}
			>&nbsp;</span>
			</button>
		</section>
	)
}

export default Annex;