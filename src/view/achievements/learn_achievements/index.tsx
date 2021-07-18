import GoBackIconButton from '../../../component/icon_button/go_back'
import Achievement1 from '../../../asset/achievements/001.png'
import Achievement2 from '../../../asset/achievements/002.png'
import Achievement3 from '../../../asset/achievements/003.png'
import Achievement4 from '../../../asset/achievements/004.png'
import {
	GOOD_STUDENT,
	GOOD_STUDENT_DESC,
	LEARN,
	MEDAL_ALT,
	PATH_1,
	PATH_1_DESC,
	PATH_2,
	PATH_2_DESC,
	PATH_3,
	PATH_3_DESC,
} from '../../../constant/data/LearnAchievements'
import './styles.css'

const LearnAchievements = () => {
	return (
		<div className='learn-achievements'>
			<div className='header'>
				<GoBackIconButton color='primary' />
				<h1>{LEARN}</h1>
			</div>
			<div className='learn-achievements-wrapper'>
				<div className='achievement-item'>
					<img src={Achievement1} alt='ilustração de medalha' />
					<div className='achievement-text-wrapper'>
						<h2>{PATH_1}</h2>
						<p>{PATH_1_DESC}</p>
					</div>
				</div>
				<div className='achievement-item'>
					<img
						className='not-obtained'
						src={Achievement2}
						alt={MEDAL_ALT}
					/>
					<div className='achievement-text-wrapper'>
						<h2>{PATH_2}</h2>
						<p>{PATH_2_DESC}</p>
					</div>
				</div>
				<div className='achievement-item'>
					<img
						className='not-obtained'
						src={Achievement3}
						alt={MEDAL_ALT}
					/>
					<div className='achievement-text-wrapper'>
						<h2>{PATH_3}</h2>
						<p>{PATH_3_DESC}</p>
					</div>
				</div>
				<div className='achievement-item'>
					<img
						className='not-obtained'
						src={Achievement4}
						alt={MEDAL_ALT}
					/>
					<div className='achievement-text-wrapper'>
						<h2>{GOOD_STUDENT}</h2>
						<p>{GOOD_STUDENT_DESC}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LearnAchievements
