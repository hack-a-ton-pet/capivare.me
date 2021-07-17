import { Button } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import LockIcon from '@material-ui/icons/Lock'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import React from 'react'
import './styles.css'

export interface CapiButtonProps {
	id: string
	text: string
	status: 'done' | 'open' | 'blocked'
	onClick: () => void
}

const CapiLessonCardButton: React.FC<CapiButtonProps> = ({
	id,
	text,
	status,
	onClick,
}) => {
	const setIcon = () => {
		if (status === 'done') {
			return <DoneIcon />
		} else if (status === 'open') {
			return <LockOpenIcon />
		} else {
			return <LockIcon />
		}
	}

	const setButtonText = () => {
		if (status === 'done') {
			return 'revisar'
		} else if (status === 'open') {
			return 'começar'
		} else {
			return 'bloqueado'
		}
	}

	return (
		<div id={id} className={`lesson_card_wrapper ${status}`}>
			{setIcon()}
			{text}
			<Button onClick={onClick} variant='contained'>
				{setButtonText()}
			</Button>
		</div>
	)
}

export default CapiLessonCardButton
