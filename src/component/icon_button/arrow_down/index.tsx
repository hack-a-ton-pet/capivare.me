import React from 'react'
import CapiIconButton from '..'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CapiIconButtonProps from '../props'

/**
 * @param color: "default" | "primary" | "secondary"
 */
const ArrowDownIconButton: React.FC<CapiIconButtonProps> = props => {
	return (
		<CapiIconButton aria-label='Expandir' {...props}>
			<ExpandMoreIcon />
		</CapiIconButton>
	)
}

export default ArrowDownIconButton
