import React from 'react'
import './styles.css'

export interface CapiQuestionStatusCircleProps {
	status: string
}

const CapiQuestionStatusCircle: React.FC<CapiQuestionStatusCircleProps> = ({
	status,
}) => {
	return <div className={`question_status_circle status_${status}`}></div>
}

export default CapiQuestionStatusCircle
