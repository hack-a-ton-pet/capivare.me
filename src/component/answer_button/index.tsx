import { Button } from '@material-ui/core'
import React from 'react'
import './styles.css'

export interface CapiButtonProps {
	text: string
	status?: 'correct' | 'incorrect'
	onClick: () => void
}

const CapiAnswerButton: React.FC<CapiButtonProps> = ({
	text,
	status,
	onClick,
}) => {
	return (
		<div className={`answer_button` + (status ? ' ' + status : '')}>
			<Button onClick={onClick} variant='contained'>
				{text}
			</Button>
		</div>
	)
}
export default CapiAnswerButton
