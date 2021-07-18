import React from 'react'
import CapiButton from '../../component/button'
import GoBackIconButton from '../../component/icon_button/go_back'
import ProfileIconButton from '../../component/icon_button/profile'
import ProgressStatus from '../../component/progress_status'
import LearnPathCard from '../../component/learn_path_card'
import { LEARN_MORE_TITLE, PRACTICE_BUTTON } from '../../constant/data/Learn'
import { Box } from '@material-ui/core'
import PathConstants from '../../constant/PathConstants'
import HistoryService from '../../service/history/HistoryService'
import { cardsLearnPath } from '../../constant/data/cardsLearnPath'
import './styles.css'

const LearnPath: React.FC = () => {
	const handleClick = (path: string) => {
		setTimeout(() => HistoryService.push(path), 200)
	}

	return (
		<div className='learn'>
			<div className='learn_header'>
				<div className='learn_header__start'>
					<GoBackIconButton color='primary' />
				</div>
				<div className='learn_header__end'>
					<ProfileIconButton
						onClick={() => handleClick(PathConstants.ACHIEVEMENTS)}
					/>
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
					onClick={() => handleClick(`${PathConstants.QUIZ}/1`)}
				/>
			</div>
			<div className='learn__learn_more_wrapper'>
				<h2 className='default_font'>{LEARN_MORE_TITLE}</h2>
				{cardsLearnPath.map(e => (
					<>
						<LearnPathCard
							item={e}
							buttonText='Abrir Lições'
							onClick={() => handleClick(PathConstants.LESSON)}
						/>
						<Box m={3} />
					</>
				))}
			</div>
		</div>
	)
}

export default LearnPath
