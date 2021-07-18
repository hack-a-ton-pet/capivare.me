import CapiButton from '../../component/button'
import PathConstants from '../../constant/PathConstants'
import HistoryService from '../../service/history/HistoryService'
import Capybara from '../../asset/capi.png'
import './styles.css'

interface ReviewResultsProps {
	ratingScore: number
}

const ReviewResults: React.FC<ReviewResultsProps> = ({ ratingScore }) => {
	const getResultMessage = () => {
		if (ratingScore >= 70) {
			return (
				<>
					<h1>Parabéns!</h1>
					<p>
						Você acertou {ratingScore} das questões. Pode ficar orgulhoso!
					</p>
				</>
			)
		}
		return (
			<>
				<h1>Ops!</h1>
				<p>Parece que precisamos praticar mais um pouco</p>
			</>
		)
	}

	const goBackToMenu = () => {
		HistoryService.push(PathConstants.LEARN)
	}

	return (
		<div className='review-results'>
			<div className='review-results-text-wrapper'>{getResultMessage()}</div>
			<div className='review-results-button-wrapper'>
				<CapiButton
					text='Voltar para o menu'
					onClick={() => goBackToMenu()}
				/>
			</div>
			<img src={Capybara} className='capi-img' />
		</div>
	)
}
export default ReviewResults
