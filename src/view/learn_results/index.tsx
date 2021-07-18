import CapiButton from '../../component/button'
import PathConstants from '../../constant/PathConstants'
import HistoryService from '../../service/history/HistoryService'
import ProgressCircle from '../../component/progress/progress_circle'
import Capybara from '../../asset/capi.png'
import './styles.css'

const LearnResults = () => {
	const rating_score = 80
	const getResultMessage = () => {
		if (rating_score >= 70) {
			return (
				<>
					<h1>Parabéns!</h1>
					<p>Fez um ótimo trabalho! Vamos para a próxima lição?</p>
					<ProgressCircle
						value={rating_score}
						size={120}
						fontSize={'30px'}
						className='progress_status__progress__main__circle'
					/>
				</>
			)
		}
		return (
			<>
				<h1>Poxa! Não foi dessa vez!</h1>
				<p>Mas não desanime! Continue estudando!</p>
			</>
		)
	}

	const goBackToMenu = () => {
		HistoryService.push(PathConstants.LEARN)
	}

	return (
		<div className='learn-results'>
			<div className='learn-results-text-wrapper'>{getResultMessage()}</div>
			<div className='learn-results-button-wrapper'>
				<CapiButton
					text='Voltar para o menu'
					onClick={() => goBackToMenu()}
				/>
			</div>
			<img src={Capybara} className='capi-img' />
		</div>
	)
}
export default LearnResults
