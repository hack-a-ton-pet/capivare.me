import React, { Fragment, useContext } from 'react'
import CapiButton from '../../component/button'
import GoBackIconButton from '../../component/icon_button/go_back'
import ProfileIconButton from '../../component/icon_button/profile'
import ProgressStatus from '../../component/progress_status'
import LearnPathCard from '../../component/learn_path_card'
import { LEARN_MORE_TITLE, PRACTICE_BUTTON } from '../../constant/data/Learn'
import { Box } from '@material-ui/core'
import PathConstants from '../../constant/PathConstants'
import HistoryService from '../../service/history/HistoryService'
import { authStore } from '../../context/AuthContext'
import GeneralProgressService from '../../service/progress/GeneralProgressService'
import LearnPathProgressService from '../../service/progress/LearnPathProgressService'
import LearnPathService from '../../service/learn_path/LearnPathService'
import './styles.css'

const LearnPath: React.FC = () => {
	const { state } = useContext(authStore)
	const learnPathList = LearnPathService.getAll()
	const user = state.user

	const handleClick = (path: string) => {
		setTimeout(() => HistoryService.push(path), 200)
	}

	return (
		<div className='learn'>
			<div className='learn_header'>
				<div className='learn_header__start'>
					<GoBackIconButton color='primary' path={PathConstants.MENU} />
				</div>
				<div className='learn_header__end'>
					<ProfileIconButton
						onClick={() => handleClick(PathConstants.ACHIEVEMENTS)}
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
					onClick={() => handleClick(`${PathConstants.QUIZ}/1`)}
				/>
			</div>
			<div className='learn__learn_more_wrapper'>
				<h2 className='default_font'>{LEARN_MORE_TITLE}</h2>
				{learnPathList.map((learnPath, index) => (
					<Fragment key={index}>
						<LearnPathCard
							description={learnPath.desc}
							buttonText='Abrir lições'
							title={learnPath.title}
							id={learnPath.id}
							onClick={() =>
								handleClick(
									`${PathConstants.LESSON_MENU}/${learnPath.id}`,
								)
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
