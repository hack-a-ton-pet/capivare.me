import React from 'react'
import CapiImg from '../../asset/capi.png'

interface CapiLogoProps {
	width?: string
	className?: string
}

const DEFAULT_WIDTH = '80px'

const CapiLogo: React.FC<CapiLogoProps> = ({ width, className }) => {
	return (
		<img
			src={CapiImg}
			style={{
				width: width ?? DEFAULT_WIDTH,
			}}
			className={className}
		/>
	)
}

export default CapiLogo
