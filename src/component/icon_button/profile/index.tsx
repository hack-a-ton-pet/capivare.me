import React from 'react'
import CapiIconButton from '..'
import PersonIcon from '@material-ui/icons/Person'
import CapiIconButtonProps from '../props'
import './styles.css'

const ProfileIconButton: React.FC<CapiIconButtonProps> = props => {
	return (
		<CapiIconButton
			className='profile__icon_button'
			aria-label='Usuário'
			{...props}
		>
			<PersonIcon />
		</CapiIconButton>
	)
}

export default ProfileIconButton
