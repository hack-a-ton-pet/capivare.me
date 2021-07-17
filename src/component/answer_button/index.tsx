import { Button } from '@material-ui/core'
import React from 'react'
import './styles.css'

export interface CapiButtonProps {
	text: string
	status?: string
	onClick: () => void
}

const CapiAnswerButton: React.FC<CapiButtonProps> = ({
	text,
	status,
	onClick,
}) => {
	if (!status) {
		status = 'default'
	}
	return (
		<div className={`answer_button ${status}`}>
			<Button onClick={onClick} variant='contained'>
				{text}
			</Button>
		</div>
	)
}
export default CapiAnswerButton
