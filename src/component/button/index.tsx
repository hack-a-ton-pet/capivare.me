import { Button } from '@material-ui/core'
import React from 'react'
import './styles.css'

export interface CapiButtonProps {
	text: string
	onClick: () => void
	className?: string
}

const CapiButton: React.FC<CapiButtonProps> = ({
	text,
	onClick,
	className,
}) => {
	return (
		<div className={`text_button ${className ?? ''}`}>
			<Button onClick={onClick} variant='contained'>
				{text}
			</Button>
		</div>
	)
}

export default CapiButton
