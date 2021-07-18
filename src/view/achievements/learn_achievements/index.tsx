import GoBackIconButton from '../../../component/icon_button/go_back'
import Achievement1 from '../../../asset/achievements/001.png'
import Achievement2 from '../../../asset/achievements/002.png'
import Achievement3 from '../../../asset/achievements/003.png'
import Achievement4 from '../../../asset/achievements/004.png'
import './styles.css'

const LearnAchievements = () => {
    return (
        <div className='learn-achievements'>
            <div className='header'>
                <GoBackIconButton color='primary' />
                <h1>Aprenda</h1>
            </div>
            <div className="learn-achievements-wrapper">
                <div className="achievement-item">
                    <img src={Achievement1} alt="ilustração de medalha" />
                    <div className="achievement-text-wrapper">
                        <h2>Caminho 1</h2>
                        <p>Recebida ao completar o caminho de aprendizado 1</p>
                    </div>
                </div>
                <div className="achievement-item">
                    <img className='not-obtained' src={Achievement2} alt="ilustração de medalha" />
                    <div className="achievement-text-wrapper">
                        <h2>Caminho 2</h2>
                        <p>Recebida ao completar o caminho de aprendizado 2</p>
                    </div>
                </div>
                <div className="achievement-item">
                    <img className='not-obtained' src={Achievement3} alt="ilustração de medalha" />
                    <div className="achievement-text-wrapper">
                        <h2>Caminho 3</h2>
                        <p>Recebida ao completar o caminho de aprendizado 3</p>
                    </div>
                </div>
                <div className="achievement-item">
                    <img className='not-obtained' src={Achievement4} alt="ilustração de medalha" />
                    <div className="achievement-text-wrapper">
                        <h2>Estudioso</h2>
                        <p>Recebida ao completar três caminhos de aprenzidado</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearnAchievements