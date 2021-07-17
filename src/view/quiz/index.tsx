import React, { useState } from 'react'
import CapiQuestionCard from '../../component/question_card'
import CapiQuestionStatusCircle from '../../component/question_status_circle'
import CapiAnswerButton from '../../component/answer_button'
import './styles.css'
import QuizItem, { Answer } from '../../type/quiz/QuizItem'
import StatePowerLessons from '../../constant/data/LearnPath'
import SwipeableViews from 'react-swipeable-views'

const Quiz: React.FC = () => {
	const [index, setIndex] = useState(0)
	const [clickedId, setClickedId] = useState<number>()
	const [correct, setCorrect] = useState<boolean>()

	const items = StatePowerLessons[0].lessons[0].quiz.items

	const handleChangeIndex = (index: number) => {
		if (index > -1 && index < items.length) setIndex(index)
	}

	const incrementIndex = (inc: number) => {
		handleChangeIndex(index + inc)
	}

	const handleClickAnswer = (item: QuizItem, clickedId: number) => {
		setClickedId(clickedId)

		if (item.correctAnswerId === clickedId) {
			// ganha pontinhos
			setCorrect(true)
		} else setCorrect(false)

		setTimeout(() => {
			incrementIndex(1)
			setClickedId(undefined)
		}, 1000)
	}

	const renderAnswers = (item: QuizItem) =>
		item.anwers.map((a, index) => (
			<CapiAnswerButton
				key={index}
				text={a.text}
				onClick={() => handleClickAnswer(item, a.id)}
				status={
					a.id === clickedId
						? correct
							? 'correct'
							: 'incorrect'
						: undefined
				}
			/>
		))

	return (
		<div className='quiz'>
			<div className='quiz_circles'>
				<CapiQuestionStatusCircle status='correct' />
				<CapiQuestionStatusCircle status='incorrect' />
				<CapiQuestionStatusCircle status='current' />
				<CapiQuestionStatusCircle status='not_answered' />
			</div>
			<SwipeableViews
				disabled={clickedId === undefined}
				index={index}
				onChangeIndex={handleChangeIndex}
			>
				{items.map(e => (
					<div className='quiz_block'>
						<div className='quiz_question'>
							<CapiQuestionCard question={e.question} />
						</div>
						<div className='quiz_answers'>{renderAnswers(e)}</div>
					</div>
				))}
			</SwipeableViews>
		</div>
	)
}

export default Quiz
