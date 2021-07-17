import React from 'react'
import CapiIconButton from '..'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import CapiIconButtonProps from '../props'

/**
 * @param color: "default" | "primary" | "secondary"
 */
const ArrowNextIconButton: React.FC<CapiIconButtonProps> = props => {
	return (
		<CapiIconButton
			className='arrow_next__icon_button'
			aria-label={props.direction === 'back' ? 'Anterior' : 'Próximo'}
			{...props}
		>
			{props.direction === 'back' ? (
				<ArrowBackIos />
			) : (
				<ArrowForwardIosIcon />
			)}
		</CapiIconButton>
	)
}

export default ArrowNextIconButton
