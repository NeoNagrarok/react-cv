import React from 'react';
import './Annex.scss';
import Contact from './Contact/Contact';
import lastJob from './LastJob/LastJob';
import LastJob from './LastJob/LastJob';
import Project from './Project/Project';
import Lang from './Lang/Lang';

const Annex = ({contact, lastJob, project, lang}) =>
{
	return (
		<section className="left-column">
			<h2 className="screen-reader-text">
				Colonne de gauche : coordonées, dernier emploi occupé, projets et langues.
			</h2>
			<Contact {...contact}/>
			<LastJob {...lastJob} />
			<Project {...project} />
			<Lang {...lang} />
		</section>
	)
}

export default Annex;