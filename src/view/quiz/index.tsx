import React from 'react'
import CapiQuestionCard from '../../component/question_card'
import CapiQuestionStatusCircle from '../../component/question_status_circle'
import CapiAnswerButton from '../../component/answer_button'
import './styles.css'

const Quiz: React.FC = () => {
	return (
		<div className='quiz'>
			<div className='quiz_circles'>
				<CapiQuestionStatusCircle status='correct' />
				<CapiQuestionStatusCircle status='incorrect' />
				<CapiQuestionStatusCircle status='current' />
				<CapiQuestionStatusCircle status='not_answered' />
			</div>
			<div className='quiz_question'>
				<CapiQuestionCard question='Qual destes é um dos objetivos da Separação dos Poderes?' />
			</div>
			<div className='quiz_answers'>
				<CapiAnswerButton
					text='Evitar a centralização das responsabilidades em um única pessoa, ou grupo de pessoas'
					onClick={() => {}}
				/>
				<CapiAnswerButton
					text='Garantir que os poderes fiquem concentrados em um pequeno grupo de pessoas'
					onClick={() => {}}
				/>
				<CapiAnswerButton
					text='Facilitar a organização dos políticos em cada construção governamental'
					onClick={() => {}}
				/>
				<CapiAnswerButton
					text='Os poderes não são separados atualmente'
					onClick={() => {}}
				/>
			</div>
		</div>
	)
}

export default Quiz
