import React, { Fragment, useContext } from 'react'
import CapiButton from '../../component/button'
import GoBackIconButton from '../../component/icon_button/go_back'
import ProfileIconButton from '../../component/icon_button/profile'
import ProgressStatus from '../../component/progress_status'
import LearnPathCard from '../../component/learn_path_card'
import {
	LEARN_MORE_TITLE,
	OPEN_LESSONS,
	PRACTICE_BUTTON,
} from '../../constant/data/Learn'
import { Box } from '@material-ui/core'
import Path from '../../constant/Path'
import HistoryService from '../../service/history/HistoryService'
import { authStore } from '../../context/Auth'
import GeneralProgressService from '../../service/progress/GeneralProgressService'
import LearnPathProgressService from '../../service/progress/LearnPathProgressService'
import LearnPathService from '../../service/learn_path/LearnPathService'
import './styles.css'
import { suspend } from '../../util/AsyncUtils'

const LearnPath: React.FC = () => {
	const { state } = useContext(authStore)
	const learnPathList = LearnPathService.getAll()
	const user = state.user

	const handleClick = async (path: string) => {
		await suspend(200)
		HistoryService.push(path)
	}

	return (
		<div className='learn'>
			<div className='learn_header'>
				<div className='learn_header__start'>
					<GoBackIconButton color='primary' path={Path.MENU} />
				</div>
				<div className='learn_header__end'>
					<ProfileIconButton
						onClick={() => handleClick(Path.ACHIEVEMENTS)}
					/>
				</div>
			</div>
			<div className='learn__progress_status_wrapper'>
				<ProgressStatus
					constitutionProgress={LearnPathProgressService.calc(
						user,
						'undefined',
					)}
					generalProgress={GeneralProgressService.calc(user)}
					lawProgress={LearnPathProgressService.calc(user, 'undefined')}
					separationOfPowers={LearnPathProgressService.calc(
						user,
						LearnPathService.getStatePowersLearnPathId(),
					)}
				/>
			</div>
			<div className='learn__practice_button__wrapper'>
				<CapiButton
					className='learn__practice_button'
					text={PRACTICE_BUTTON}
					onClick={() => handleClick(`${Path.QUIZ}/1`)}
				/>
			</div>
			<div className='learn__learn_more_wrapper'>
				<h2 className='default_font'>{LEARN_MORE_TITLE}</h2>
				{learnPathList.map((learnPath, index) => (
					<Fragment key={index}>
						<LearnPathCard
							description={learnPath.desc}
							buttonText={OPEN_LESSONS}
							title={learnPath.title}
							id={learnPath.id}
							onClick={() =>
								handleClick(`${Path.LESSON_MENU}/${learnPath.id}`)
							}
						/>
						<Box m={3} />
					</Fragment>
				))}
				<Box m={3} />
			</div>
		</div>
	)
}

export default LearnPath
