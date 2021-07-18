import GoBackIconButton from '../../../component/icon_button/go_back'
import Achievement1 from '../../../asset/achievements/001.png'
import Achievement4 from '../../../asset/achievements/004.png'
import Achievement5 from '../../../asset/achievements/005.png'
import Achievement6 from '../../../asset/achievements/006.png'
import {
	ADVANCED,
	ADVANCED_DESC,
	BEGGINER_DESC,
	BEGINNER,
	EVALUATE,
	EXPERIENTE,
	EXPERIENTE_DESC,
	FAST_TRIGGER,
	FAST_TRIGGER_DESC,
	MEDAL_ALT,
} from '../../../constant/component/EvaluateAchievements'
import './styles.css'

const EvaluateAchievements = () => {
	return (
		<div className='evaluate-achievements'>
			<div className='header'>
				<GoBackIconButton color='primary' />
				<h1>{EVALUATE}</h1>
			</div>
			<div className='evaluate-achievements-wrapper'>
				<div className='achievement-item'>
					<img src={Achievement4} alt={MEDAL_ALT} />
					<div className='achievement-text-wrapper'>
						<h2>{BEGINNER}</h2>
						<p>{BEGGINER_DESC}</p>
					</div>
				</div>
				<div className='achievement-item'>
					<img
						className='not-obtained'
						src={Achievement5}
						alt={MEDAL_ALT}
					/>
					<div className='achievement-text-wrapper'>
						<h2>{EXPERIENTE}</h2>
						<p>{EXPERIENTE_DESC}</p>
					</div>
				</div>
				<div className='achievement-item'>
					<img
						className='not-obtained'
						src={Achievement6}
						alt={MEDAL_ALT}
					/>
					<div className='achievement-text-wrapper'>
						<h2>{ADVANCED}</h2>
						<p>{ADVANCED_DESC}</p>
					</div>
				</div>
				<div className='achievement-item'>
					<img
						className='not-obtained'
						src={Achievement1}
						alt={MEDAL_ALT}
					/>
					<div className='achievement-text-wrapper'>
						<h2>{FAST_TRIGGER}</h2>
						<p>{FAST_TRIGGER_DESC}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EvaluateAchievements
