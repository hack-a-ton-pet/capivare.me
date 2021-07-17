import React from 'react'
import CapiIconButton from '..'
import { ReactComponent as ProfileIcon } from '../../../asset/profile.svg'
import CapiIconButtonProps from '../props'

const ProfileIconButton: React.FC<CapiIconButtonProps> = props => {
	return (
		<CapiIconButton aria-label='Próximo' {...props}>
			<ProfileIcon />
		</CapiIconButton>
	)
}

export default ProfileIconButton
