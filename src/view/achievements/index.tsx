import CapiButton from '../../component/button'
import GoBackIconButton from '../../component/icon_button/go_back'
import Achievement1 from '../../asset/achievements/001.png'
import Achievement2 from '../../asset/achievements/002.png'
import Achievement3 from '../../asset/achievements/003.png'
import Achievement4 from '../../asset/achievements/004.png'
import Achievement5 from '../../asset/achievements/005.png'
import Achievement6 from '../../asset/achievements/006.png'
import HistoryService from '../../service/history/HistoryService'
import Path from '../../constant/Path'
import { MEDAL_DESC, SEE_MORE } from '../../constant/data/Achievements'
import './styles.css'

const Achievements = () => {
	const handleClick = path => {
		setTimeout(() => HistoryService.push(path), 200)
	}

	return (
		<div className='achievements'>
			<div className='header'>
				<GoBackIconButton color='primary' />
				<h1>Conquistas</h1>
			</div>
			<div className='achievement-category-wrapper'>
				<h2>Aprenda</h2>
				<div className='achievement-wrapper'>
					<img src={Achievement1} alt={MEDAL_DESC} />
					<img
						className='not-obtained'
						src={Achievement2}
						alt={MEDAL_DESC}
					/>
					<img
						className='not-obtained'
						src={Achievement3}
						alt={MEDAL_DESC}
					/>
				</div>
				<div className='achievement-button-wrapper'>
					<CapiButton
						text={SEE_MORE}
						onClick={() => {
							handleClick(Path.LEARN_ACHIEVEMENTS)
						}}
					/>
				</div>
			</div>
			<div className='achievement-category-wrapper'>
				<h2>Avalie</h2>
				<div className='achievement-wrapper'>
					<img src={Achievement4} alt={MEDAL_DESC} />
					<img
						className='not-obtained'
						src={Achievement5}
						alt={MEDAL_DESC}
					/>
					<img
						className='not-obtained'
						src={Achievement6}
						alt={MEDAL_DESC}
					/>
				</div>
				<div className='achievement-button-wrapper'>
					<CapiButton
						text={SEE_MORE}
						onClick={() => {
							handleClick(Path.EVALUATE_ACHIEVEMENTS)
						}}
					/>
				</div>
			</div>
		</div>
	)
}
export default Achievements
