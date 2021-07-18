import GoBackIconButton from '../../../component/icon_button/go_back'
import Achievement1 from '../../../asset/achievements/001.png'
import Achievement4 from '../../../asset/achievements/004.png'
import Achievement5 from '../../../asset/achievements/005.png'
import Achievement6 from '../../../asset/achievements/006.png'
import './styles.css'

const EvaluateAchievements = () => {
    return (
        <div className='evaluate-achievements'>
            <div className='header'>
                <GoBackIconButton color='primary' />
                <h1>Avalie</h1>
            </div>
            <div className="evaluate-achievements-wrapper">
                <div className="achievement-item">
                    <img src={Achievement4} alt="ilustração de medalha" />
                    <div className="achievement-text-wrapper">
                        <h2>Iniciante</h2>
                        <p>Recebida ao avaliar dez vezes</p>
                    </div>
                </div>
                <div className="achievement-item">
                    <img className='not-obtained' src={Achievement5} alt="ilustração de medalha" />
                    <div className="achievement-text-wrapper">
                        <h2>Intermediário</h2>
                        <p>Recebida ao avaliar 25 vezes</p>
                    </div>
                </div>
                <div className="achievement-item">
                    <img className='not-obtained' src={Achievement6} alt="ilustração de medalha" />
                    <div className="achievement-text-wrapper">
                        <h2>Avançado</h2>
                        <p>Recebida ao avaliar 50 vezes</p>
                    </div>
                </div>
                <div className="achievement-item">
                    <img className='not-obtained' src={Achievement1} alt="ilustração de medalha" />
                    <div className="achievement-text-wrapper">
                        <h2>Gatilho Rápido</h2>
                        <p>Recebida ao avaliar dez metas no mesmo dia em que foram postadas</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EvaluateAchievements