import React from 'react'
import CapiIconButton from '..'
import CloseIcon from '@material-ui/icons/Close'
import CapiIconButtonProps from '../props'

const CloseIconButton: React.FC<CapiIconButtonProps> = props => {
	return (
		<CapiIconButton aria-label='Fechar' {...props}>
			<CloseIcon />
		</CapiIconButton>
	)
}

export default CloseIconButton
