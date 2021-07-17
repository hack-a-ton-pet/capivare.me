import React from 'react'
import CapiButton from '../../component/button'
import GoBackIconButton from '../../component/icon_button/go_back'
import ProfileIconButton from '../../component/icon_button/profile'
import ProgressStatus from '../../component/progress_status'
import LearnPathCard from '../../component/learn_path_card'
import { LEARN_MORE_TITLE, PRACTICE_BUTTON } from '../../constant/data/Learn'
import './styles.css'

const LearnPath: React.FC = () => {
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
			<div className='learn__progress_status_wrapper'>
				<ProgressStatus
					constitutionProgress={100}
					generalProgress={100}
					lawProgress={100}
					separationOfPowers={100}
				/>
			</div>
			<div className='learn__practice_button__wrapper'>
				<CapiButton
					className='learn__practice_button'
					text={PRACTICE_BUTTON}
					onClick={() => {}}
				/>
			</div>
			<div className='learn__learn_more_wrapper'>
				<h2 className='default_font'>{LEARN_MORE_TITLE}</h2>
				<LearnPathCard
					description='Você sabia que a democracia é dividida em 3 poderes? Legislativo, Executivo e Judiciário'
					buttonText='Continue'
					title='Tripartição de poderes'
					id='section1'
					onClick={() => {}}
				/>
			</div>
		</div>
	)
}

export default LearnPath
