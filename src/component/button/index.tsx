import { Button } from '@material-ui/core'
import React from 'react'
import './styles.css'

export interface CapiButtonProps {
	text: string
	onClick: () => void
	submit?: boolean
}

const CapiButton: React.FC<CapiButtonProps> = ({ text, onClick, submit }) => {
	const handleClick = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		event.preventDefault()
		onClick()
	}

	return (
		<div className='text_button'>
			<Button
				onClick={handleClick}
				variant='contained'
				type={submit ? 'submit' : 'button'}
			>
				{text}
			</Button>
		</div>
	)
}

export default CapiButton
