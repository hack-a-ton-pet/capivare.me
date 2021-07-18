import CapiButton from '../../../component/button'
import Path from '../../../constant/Path'
import HistoryService from '../../../service/history/HistoryService'
import ProgressCircle from '../../../component/progress/progress_circle'
import Capybara from '../../../asset/capi.png'
import {
	CONGRATULATIONS,
	FAIL_MESSAGE,
	GO_BACK_TO_MENU,
	GO_TO_NEXT_LESSON,
	KEEP_STUDING,
} from '../../../constant/data/LearnResults'
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
					<p>{GO_TO_NEXT_LESSON}</p>
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
				<h1>{FAIL_MESSAGE}</h1>
				<p>{KEEP_STUDING}</p>
			</>
		)
	}

	const goBackToMenu = () => {
		HistoryService.push(Path.LEARN)
	}

	return (
		<div className='learn-results'>
			<div className='learn-results-text-wrapper'>{getResultMessage()}</div>
			<div className='learn-results-button-wrapper'>
				<CapiButton text={GO_BACK_TO_MENU} onClick={() => goBackToMenu()} />
			</div>
			<img
				alt='Capivara, simbolo do aplicativo'
				src={Capybara}
				className='capi-img'
			/>
		</div>
	)
}
export default LearnResults
