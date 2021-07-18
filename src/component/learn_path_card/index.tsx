import React from 'react'
import { cardsLearnPathProps } from '../../constant/data/cardsLearnPath'
import CapiButton from '../button'
import './styles.css'

export interface SectionCardProps {
	item: cardsLearnPathProps
	buttonText: string
	onClick: () => void
}

const LearnPathCard: React.FC<SectionCardProps> = ({
	buttonText,
	item,
	onClick,
}) => {
	return (
		<div id={item.id} className='learn_path_card'>
			<h1>{item.title}</h1>
			<p className='default_font'>{item.description}</p>
			<div className='button_wrapper'>
				<CapiButton text={buttonText} onClick={onClick} />
			</div>
		</div>
	)
}

export default LearnPathCard
