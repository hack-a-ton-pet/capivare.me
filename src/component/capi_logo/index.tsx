import React from 'react'
import CapiImg from '../../asset/capi.png'

interface CapiLogoProps {
	width?: string
	height?: string
}

const DEFAULT_WIDTH = '80px'
const DEFAULT_HEIGHT = '70px'

const CapiLogo: React.FC<CapiLogoProps> = ({ width, height }) => {
	return (
		<img
			src={CapiImg}
			style={{
				width: width ?? DEFAULT_WIDTH,
				height: height ?? DEFAULT_HEIGHT,
			}}
		/>
	)
}

export default CapiLogo
