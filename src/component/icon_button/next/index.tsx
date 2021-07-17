import React from 'react'
import CapiIconButton from '..'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import CapiIconButtonProps from '../props'

/**
 * @param color: "default" | "primary" | "secondary"
 */
const NextIconButton: React.FC<CapiIconButtonProps> = props => {
	return (
		<CapiIconButton aria-label='Próximo' {...props}>
			<ArrowForwardIosIcon />
		</CapiIconButton>
	)
}

export default NextIconButton
