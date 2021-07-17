import React from 'react'
import './styles.css'
import QuestionStatusConstants from '../../constant/QuestionStatusConstants'
import ClearIcon from '@material-ui/icons/Clear'
import CheckIcon from '@material-ui/icons/Check'

export interface CapiQuestionStatusCircleProps {
	status: string
}

function StatusIcon(props: any) {
	const status = props.status
	if (status === QuestionStatusConstants.CORRECT) {
		return <CheckIcon />
	} else if (status === QuestionStatusConstants.INCORRECT) {
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
