import React, { useState } from 'react'
import CapiQuestionCard from '../../component/question_card'
import CapiAnswerButton from '../../component/answer_button'
import QuizItem from '../../type/quiz/QuizItem'
import StatePowerLessons from '../../constant/data/learnPath'
import SwipeableViews from 'react-swipeable-views'
import CapiStepperQuestions from '../../component/stepper_questions'
import { StatusType } from '../../component/question_status_circle'
import './styles.css'

const Quiz: React.FC = () => {
	const [itemIndex, setItemIndex] = useState(0)
	const [clickedId, setClickedId] = useState<number>()
	const [correct, setCorrect] = useState<boolean>()

	const items = StatePowerLessons[0].lessons[0].quiz.items

	const [questionStatus, setQuestionStatus] = useState<StatusType[]>([
		'current',
		...new Array(items.length - 1).fill('not_answered'),
	])

	const handleChangeIndex = (index: number) => {
		if (index > -1 && index < items.length) {
			setItemIndex(index)
			questionStatus[index] = 'current'
			setQuestionStatus([...questionStatus])
		}
	}

	const handleClickAnswer = (item: QuizItem, clickedId: number) => {
		setClickedId(clickedId)

		if (item.correctAnswerId === clickedId) {
			// ganha pontinhos
			setCorrect(true)
			questionStatus[itemIndex] = 'correct'
		} else {
			setCorrect(false)
			questionStatus[itemIndex] = 'incorrect'
		}

		setQuestionStatus([...questionStatus])

		setTimeout(() => {
			handleChangeIndex(itemIndex + 1)
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
				<CapiStepperQuestions questionStatus={questionStatus} />
			</div>
			<SwipeableViews
				disabled={clickedId === undefined}
				index={itemIndex}
				onChangeIndex={handleChangeIndex}
			>
				{items.map((e, index) => (
					<div className='quiz_block' key={index}>
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
