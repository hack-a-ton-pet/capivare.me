import React from 'react'
import CapiQuestionStatusCircle, { StatusType } from '../question_status_circle'

interface CapiStepperProps {
	questionStatus: StatusType[]
}

const CapiStepperQuestions: React.FC<CapiStepperProps> = props => {
	return (
		<div className='capi_stepper'>
			{props.questionStatus.map((e, index) => (
				<CapiQuestionStatusCircle key={index} status={e} />
			))}
		</div>
	)
}

export default CapiStepperQuestions
