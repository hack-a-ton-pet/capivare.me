import React from 'react'
import CapiButton from '../../component/button'
import GoBackIconButton from '../../component/icon_button/go_back'
import ArrowNextIconButton from '../../component/icon_button/arrow_next'
import CloseIconButton from '../../component/icon_button/close'

const LearnPath: React.FC = () => {
	return (
		<div>
			<CapiButton text={'Ola'} onClick={() => {}} />
			<GoBackIconButton color='primary' />
			<ArrowNextIconButton color='secondary' />
			<CloseIconButton />
		</div>
	)
}

export default LearnPath
