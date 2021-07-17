import React from 'react'
import CapiQuestionStatusCircle from '../question_status_circle'
import './styles.css'

interface CapiStepperProps {
	steps: number
	current: number
}

const CapiStepper: React.FC<CapiStepperProps> = props => {
	return (
		<div className='capi_stepper'>
			{new Array(props.steps).fill(1).map((e, index) => (
				<CapiQuestionStatusCircle
					key={index}
					status={props.current === index ? 'current' : 'not_answered'}
				/>
			))}
		</div>
	)
}

export default CapiStepper
