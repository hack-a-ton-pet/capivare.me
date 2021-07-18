import React from 'react'
import CapiImg from '../../asset/capi.png'
import { LOGO_ALT } from '../../constant/component/CapiLogo'

interface CapiLogoProps {
	width?: string
	className?: string
}

const DEFAULT_WIDTH = '80px'

const CapiLogo: React.FC<CapiLogoProps> = ({ width, className }) => {
	return (
		<img
			alt={LOGO_ALT}
			src={CapiImg}
			style={{
				width: width || DEFAULT_WIDTH,
			}}
			className={className}
		/>
	)
}

export default CapiLogo
