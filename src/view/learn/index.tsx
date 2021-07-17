import React from 'react'
import CapiButton from '../../component/button'
import GoBackIconButton from '../../component/icon_button/go_back'
import NextIconButton from '../../component/icon_button/next'
import CloseIconButton from '../../component/icon_button/close'

const Learn: React.FC = () => {
	return (
		<div>
			<CapiButton text={'Ola'} onClick={() => {}} />
			<GoBackIconButton color='primary' />
			<NextIconButton color='secondary' />
			<CloseIconButton />
		</div>
	)
}

export default Learn
