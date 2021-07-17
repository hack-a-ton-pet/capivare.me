import React from 'react'
import CapiButton from '../../component/button'
import GoBackIconButton from '../../component/icon_button/go_back'
import ProfileIconButton from '../../component/icon_button/profile'
import { PRACTICE_BUTTON } from '../../constant/data/Learn'
import './styles.css'

const Learn: React.FC = () => {
	return (
		<div className='learn'>
			<div className='learn_header'>
				<div className='learn_header__start'>
					<GoBackIconButton color='primary' />
				</div>
				<div className='learn_header__end'>
					<ProfileIconButton />
				</div>
			</div>
			<div className='learn__practice_button__wrapper'>
				<CapiButton
					className='learn__practice_button'
					text={PRACTICE_BUTTON}
					onClick={() => {}}
				/>
			</div>
		</div>
	)
}

export default Learn
