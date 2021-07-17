import { IconButton, Tooltip } from '@material-ui/core'
import React from 'react'
import CapiIconButtonProps from './props'
import './styles.css'

/**
 * @param color: "default" | "primary" | "secondary"
 */
const CapiIconButton: React.FC<CapiIconButtonProps> = props => {
	return (
		<Tooltip
			className='capi_icon_button'
			title={props['aria-label'] || ''}
			enterDelay={200}
			arrow
		>
			<IconButton {...props}>{props.children}</IconButton>
		</Tooltip>
	)
}

export default CapiIconButton
