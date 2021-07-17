import React from 'react'
import './styles.css'

export interface CapiInputProps {
	percentage: number
}

const CapiHorizontalProgress: React.FC<CapiInputProps> = ({ percentage }) => {
	return (
		<div className='capi_horizontal_progress_wrapper'>
			<div
				className='capi_horizontal_progress_bar'
				style={{ width: `${percentage}%` }}
			></div>
		</div>
	)
}

export default CapiHorizontalProgress
