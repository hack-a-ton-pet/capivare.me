import CapiButton from '../../component/button'
import Path from '../../constant/Path'
import HistoryService from '../../service/history/HistoryService'
import Capybara from '../../asset/capi.png'
import {
	BACK_TO_MENU,
	CONGRATULATIONS,
	CONGRATULATIONS_MESSAGE,
	FAIL,
	FAIL_MESSAGE,
} from '../../constant/data/ReviewResults'
import LearnService from '../../service/user/LearnService'
import './styles.css'

interface ReviewResultsProps {
	ratingScore: number
}

const ReviewResults: React.FC<ReviewResultsProps> = ({ ratingScore }) => {
	const getResultMessage = () => {
		if (LearnService.isScoreHigherThanMin(ratingScore)) {
			return (
				<>
					<h1>{CONGRATULATIONS}</h1>
					<p>{CONGRATULATIONS_MESSAGE(ratingScore.toString())}</p>
				</>
			)
		}
		return (
			<>
				<h1>{FAIL}</h1>
				<p>{FAIL_MESSAGE}</p>
			</>
		)
	}

	const goBackToMenu = () => {
		HistoryService.push(Path.LEARN)
	}

	return (
		<div className='review-results'>
			<div className='review-results-text-wrapper'>{getResultMessage()}</div>
			<div className='review-results-button-wrapper'>
				<CapiButton text={BACK_TO_MENU} onClick={() => goBackToMenu()} />
			</div>
			<img src={Capybara} className='capi-img' />
		</div>
	)
}
export default ReviewResults
