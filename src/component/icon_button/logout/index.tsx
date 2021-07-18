import React from 'react'
import CapiIconButton from '..'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import CapiIconButtonProps from '../props'
import './styles.css'

const LogoutIconButton: React.FC<CapiIconButtonProps> = props => {
	return (
		<CapiIconButton
			className='logout_icon_button'
			aria-label='Sair'
			{...props}
		>
			<MeetingRoomIcon />
		</CapiIconButton>
	)
}

export default LogoutIconButton
