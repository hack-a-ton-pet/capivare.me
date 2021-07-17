import React from 'react'
import './styles.css'

export interface CapiQuestionCardProps {
	question: string
}

const CapiQuestionCard: React.FC<CapiQuestionCardProps> = ({ question }) => {
	return (
		<div className='question_card'>
			<h1>{question}</h1>
		</div>
	)
}

export default CapiQuestionCard
