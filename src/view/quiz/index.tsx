import React from 'react'
import CapiQuestionCard from '../../component/question_card'
import CapiQuestionStatusCircle from '../../component/question_status_circle'
import CapiAnswerButton from '../../component/answer_button'
import './styles.css'
import QuizItem from '../../type/quiz/QuizItem'

interface QuizProps {
	quizItem: QuizItem
}

const Quiz: React.FC<QuizProps> = ({ quizItem }) => {
	return (
		<div className='quiz'>
			<div className='quiz_circles'>
				<CapiQuestionStatusCircle status='correct' />
				<CapiQuestionStatusCircle status='incorrect' />
				<CapiQuestionStatusCircle status='current' />
				<CapiQuestionStatusCircle status='not_answered' />
			</div>
			<div className='quiz_question'>
				<CapiQuestionCard question={quizItem.question} />
			</div>
			<div className='quiz_answers'>
				{quizItem.anwers.map((e, index) => {
					return (
						<CapiAnswerButton
							key={index}
							text={e.text}
							onClick={() => {}}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Quiz
