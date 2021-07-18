import React, { useContext, useEffect, useState } from 'react'
import CapiQuestionCard from '../../component/question_card'
import CapiAnswerButton from '../../component/answer_button'
import QuizItem from '../../type/quiz/QuizItem'
import SwipeableViews from 'react-swipeable-views'
import CapiStepperQuestions from '../../component/stepper_questions'
import { StatusType } from '../../component/question_status_circle'
import { useParams } from 'react-router-dom'
import { authStore } from '../../context/AuthContext'
import LessonService from '../../service/lesson/LessonService'
import './styles.css'

interface QuizParam {
	id: string
}
const Quiz: React.FC = () => {
	const { id } = useParams<QuizParam>()
	const lesson = LessonService.getById(id)
	const { state } = useContext(authStore)
	const user = state.user

	const [itemIndex, setItemIndex] = useState(0)
	const [clickedId, setClickedId] = useState<number>()
	const [correct, setCorrect] = useState<boolean>()

	const [questionStatus, setQuestionStatus] = useState<StatusType[]>([])

	useEffect(() => {
		if (lesson !== undefined) {
			setQuestionStatus([
				'current',
				...new Array(lesson.quiz.items.length - 1).fill('not_answered'),
			])
		}
	}, [])

	const handleChangeIndex = (index: number, items: QuizItem[]) => {
		if (index > -1 && index < items.length) {
			setItemIndex(index)
			questionStatus[index] = 'current'
			setQuestionStatus([...questionStatus])
		}
	}

	const handleClickAnswer = (
		item: QuizItem,
		clickedId: number,
		items: QuizItem[],
	) => {
		setClickedId(clickedId)

		if (item.correctAnswerId === clickedId) {
			setCorrect(true)
			questionStatus[itemIndex] = 'correct'
		} else {
			setCorrect(false)
			questionStatus[itemIndex] = 'incorrect'
		}

		setQuestionStatus([...questionStatus])

		setTimeout(() => {
			handleChangeIndex(itemIndex + 1, items)
			setClickedId(undefined)
		}, 1000)
	}

	const renderAnswers = (item: QuizItem, items: QuizItem[]) =>
		item.anwers.map((a, index) => (
			<CapiAnswerButton
				key={index}
				text={a.text}
				onClick={() => handleClickAnswer(item, a.id, items)}
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
			{lesson && (
				<>
					<div className='quiz_circles'>
						<CapiStepperQuestions questionStatus={questionStatus} />
					</div>
					<SwipeableViews
						disabled={clickedId === undefined}
						index={itemIndex}
						onChangeIndex={index =>
							handleChangeIndex(index, lesson.quiz.items)
						}
					>
						{lesson.quiz.items.map((e, index) => (
							<div className='quiz_block' key={index}>
								<div className='quiz_question'>
									<CapiQuestionCard question={e.question} />
								</div>
								<div className='quiz_answers'>
									{renderAnswers(e, lesson.quiz.items)}
								</div>
							</div>
						))}
					</SwipeableViews>
				</>
			)}
		</div>
	)
}

export default Quiz
