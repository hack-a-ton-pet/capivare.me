import React from 'react'
import ClearIcon from '@material-ui/icons/Clear'
import CheckIcon from '@material-ui/icons/Check'
import './styles.css'

export interface CapiQuestionStatusCircleProps {
	status: 'correct' | 'incorrect' | 'current' | 'not_answered'
}

export type StatusType = 'correct' | 'incorrect' | 'current' | 'not_answered'

function StatusIcon(props: any) {
	const status = props.status
	if (status === 'correct') {
		return <CheckIcon />
	} else if (status === 'incorrect') {
		return <ClearIcon />
	} else {
		return <></>
	}
}

const CapiQuestionStatusCircle: React.FC<CapiQuestionStatusCircleProps> = ({
	status,
}) => {
	return (
		<div className={`question_status_circle status_${status}`}>
			<StatusIcon status={status} />
		</div>
	)
}

export default CapiQuestionStatusCircle
