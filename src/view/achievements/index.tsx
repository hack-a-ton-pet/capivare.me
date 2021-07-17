import CapiButton from '../../component/button'
import GoBackIconButton from '../../component/icon_button/go_back'
import Achievement1 from '../../asset/achievements/001.png'
import Achievement2 from '../../asset/achievements/002.png'
import Achievement3 from '../../asset/achievements/003.png'
import Achievement4 from '../../asset/achievements/004.png'
import Achievement5 from '../../asset/achievements/005.png'
import Achievement6 from '../../asset/achievements/006.png'
import './styles.css'

const Achievements = () => {
	return (
		<div className='achievements'>
			<div className='header'>
				<GoBackIconButton color='primary' />
				<h1>Conquistas</h1>
			</div>
			<div className='achievement-category-wrapper'>
				<h2>Aprenda</h2>
				<div className='achievement-wrapper'>
					<img src={Achievement1} />
					<img src={Achievement2} />
					<img src={Achievement3} />
				</div>
				<CapiButton text='Ver mais' onClick={() => {}} />
			</div>
			<div className='achievement-category-wrapper'>
				<h2>Avalie</h2>
				<div className='achievement-wrapper'>
					<img src={Achievement4} />
					<img src={Achievement5} />
					<img src={Achievement6} />
				</div>
				<CapiButton text='Ver mais' onClick={() => {}} />
			</div>
		</div>
	)
}
export default Achievements
