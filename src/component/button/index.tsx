import { Button } from '@material-ui/core'
import React from 'react'
import './styles.css'

export interface CapiButtonProps {
	text: string
	onClick: () => void
}

const CapiButton: React.FC<CapiButtonProps> = ({ text, onClick }) => {
	return (
		<div className='text_button'>
			<Button onClick={onClick} variant='contained'>
				{text}
			</Button>
		</div>
	)
}

export default CapiButton
