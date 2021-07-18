import React from 'react'
import CapiButton from '../button'
import './styles.css'

export interface SectionCardProps {
	title: string
	description: string
	buttonText: string
	id: string
	onClick: () => void
}

const LearnPathCard: React.FC<SectionCardProps> = ({
	title,
	description,
	buttonText,
	id,
	onClick,
}) => {
	return (
		<div id={id} className='learn_path_card'>
			<h1>{title}</h1>
			<p className='default_font'>{description}</p>
			<div className='button_wrapper'>
				<CapiButton text={buttonText} onClick={onClick} />
			</div>
		</div>
	)
}

export default LearnPathCard
