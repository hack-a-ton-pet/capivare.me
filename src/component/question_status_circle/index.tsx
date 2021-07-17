import React from 'react'
import './styles.css'

export interface CapiQuestionStatusCircleProps {
	status: string
	onChange: (status: string) => void
}

const CapiQuestionStatusCircle: React.FC<CapiQuestionStatusCircleProps> = ({
	status,
	onChange,
}) => {
	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value)
	}

	return (
		<div
			className={`question_status_circle status_${status}`}
			onChange={handleOnChange}
		></div>
	)
}

export default CapiQuestionStatusCircle
