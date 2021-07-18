import CapiButton from '../../../component/button'
import PathConstants from '../../../constant/PathConstants'
import HistoryService from '../../../service/history/HistoryService'
import ProgressCircle from '../../../component/progress/progress_circle'
import {
	BACK_TO_MENU,
	CONGRATULATIONS,
	ENCOURAGING_MESSAGE,
	FAILURE_MESSAGE,
	NEXT_LESSON,
} from '../../../constant/data/Quiz'
import CapiLogo from '../../../component/capi_logo'
import './styles.css'

interface LearnResultsProps {
	ratingScore: number
}

const LearnResults: React.FC<LearnResultsProps> = ({ ratingScore }) => {
	const getResultMessage = () => {
		if (ratingScore >= 70) {
			return (
				<>
					<h1>{CONGRATULATIONS}</h1>
					<p>{NEXT_LESSON}</p>
					<ProgressCircle
						value={ratingScore}
						size={120}
						fontSize={'30px'}
						className='progress_status__progress__main__circle'
					/>
				</>
			)
		}
		return (
			<>
				<h1>{FAILURE_MESSAGE}</h1>
				<p>{ENCOURAGING_MESSAGE}</p>
			</>
		)
	}

	const goBackToMenu = () => {
		HistoryService.push(PathConstants.LEARN)
	}

	return (
		<div className='learn-results'>
			<div className='learn_results__content_wrapper'>
				<div className='learn-results-text-wrapper'>
					{getResultMessage()}
				</div>
				<div className='learn-results-button-wrapper'>
					<CapiButton text={BACK_TO_MENU} onClick={() => goBackToMenu()} />
				</div>
			</div>
			<div className='learn_result__capi_wrapper'>
				<CapiLogo className='learn_result__capi' width='200px' />
			</div>
		</div>
	)
}
export default LearnResults
