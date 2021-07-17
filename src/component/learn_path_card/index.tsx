import React from 'react'
import PathConstants from '../../constant/PathConstants'
import HistoryService from '../../service/history/HistoryService'
import CapiButton from '../button'
import './styles.css'

export interface SectionCardProps {
	title: string
	description: string
	buttonText: string
	id: string
}

const LearnPathCard: React.FC<SectionCardProps> = ({
	title,
	description,
	buttonText,
	id,
}) => {
	const handleClick = () => {
		setTimeout(() => HistoryService.push(PathConstants.LESSON), 200)
	}

	return (
		<div id={id} className='section_card'>
			<h1>{title}</h1>
			<p>{description}</p>
			<div className='button_wrapper'>
				<CapiButton text={buttonText} onClick={handleClick} />
			</div>
		</div>
	)
}

export default LearnPathCard
