import React, { useContext, useEffect, useState } from 'react'
import CapiQuestionCard from '../../component/question_card'
import CapiAnswerButton from '../../component/answer_button'
import QuizItem from '../../type/quiz/QuizItem'
import SwipeableViews from 'react-swipeable-views'
import CapiStepperQuestions from '../../component/stepper_questions'
import { StatusType } from '../../component/question_status_circle'
import { useParams } from 'react-router-dom'
import { authStore } from '../../context/Auth'
import LessonService from '../../service/lesson/LessonService'
import LearnService from '../../service/user/LearnService'
import Lesson from '../../type/quiz/Lesson'
import LearnResults from './learn_results'
import './styles.css'
import User from '../../type/entity/User'

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
	const [isFinished, setIsFinished] = useState<boolean>(false)
	const [ratingScore, setRatingScore] = useState(0)

	const [questionStatus, setQuestionStatus] = useState<StatusType[]>([])

	useEffect(() => {
		if (lesson !== undefined) {
			setQuestionStatus([
				'current',
				...new Array(lesson.quiz.items.length - 1).fill('not_answered'),
			])
		}
	}, [lesson])

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
		lesson: Lesson,
		user: User,
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
			const isFinished = itemIndex === lesson.quiz.items.length - 1
			if (isFinished) {
				const score = Math.floor(
					(questionStatus.filter(status => status === 'correct').length /
						questionStatus.length) *
						100,
				)
				LearnService.saveLesson(user, lesson, score)
				setRatingScore(score)
				setIsFinished(true)
			}

			handleChangeIndex(itemIndex + 1, lesson.quiz.items)
			setClickedId(undefined)
		}, 1000)
	}

	const renderAnswers = (item: QuizItem, lesson: Lesson, user: User) =>
		item.anwers.map((a, index) => (
			<CapiAnswerButton
				key={index}
				text={a.text}
				onClick={() => handleClickAnswer(item, a.id, lesson, user)}
				status={
					a.id === clickedId
						? correct
							? 'correct'
							: 'incorrect'
						: undefined
				}
			/>
		))

	const renderSwippableView = (lesson: Lesson, user: User) => {
		return (
			<SwipeableViews
				disabled={clickedId === undefined}
				index={itemIndex}
				onChangeIndex={index => handleChangeIndex(index, lesson.quiz.items)}
			>
				{lesson.quiz.items.map((e, index) => (
					<div className='quiz_block' key={index}>
						<div className='quiz_question'>
							<CapiQuestionCard question={e.question} />
						</div>
						<div className='quiz_answers'>
							{renderAnswers(e, lesson, user)}
						</div>
					</div>
				))}
			</SwipeableViews>
		)
	}

	const renderLearnResult = (lesson: Lesson) => {
		return <LearnResults ratingScore={ratingScore} />
	}

	return (
		<div className='quiz'>
			{lesson && user && (
				<>
					<div className='quiz_circles'>
						<CapiStepperQuestions questionStatus={questionStatus} />
					</div>
					{isFinished
						? renderLearnResult(lesson)
						: renderSwippableView(lesson, user)}
				</>
			)}
		</div>
	)
}

export default Quiz
