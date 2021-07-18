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
import User from '../../type/entity/User'
import { suspend } from '../../util/AsyncUtils'
import { IN_DEVELOPMENT } from '../../constant/component/Quiz'
import HistoryService from '../../service/history/HistoryService'
import Path from '../../constant/Path'
import './styles.css'

interface QuizParam {
	id?: string
}
const Quiz: React.FC = () => {
	const { id } = useParams<QuizParam>()
	const lesson = id ? LessonService.getById(id) : undefined
	const { state } = useContext(authStore)
	const user = state.user

	const [itemIndex, setItemIndex] = useState(0)
	const [clickedId, setClickedId] = useState<number>()
	const [correct, setCorrect] = useState<boolean>()
	const [isFinished, setIsFinished] = useState<boolean>(false)
	const [ratingScore, setRatingScore] = useState(0)
	const [isBlocked, setIsBlocked] = useState(false)

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
		if (isBlocked) return
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
		if (isBlocked) return

		setClickedId(clickedId)

		if (item.correctAnswerId === clickedId) {
			setCorrect(true)
			questionStatus[itemIndex] = 'correct'
		} else {
			setCorrect(false)
			questionStatus[itemIndex] = 'incorrect'
		}

		setQuestionStatus([...questionStatus])

		checkResults(user, lesson)
	}

	const checkResults = async (user: User, lesson: Lesson) => {
		setIsBlocked(true)

		await suspend(1000)

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
		setIsBlocked(false)
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

	const renderLessonContent = (lesson: Lesson, user: User) => {
		return (
			<div className='quiz_content'>
				<div className='quiz_circles'>
					<CapiStepperQuestions questionStatus={questionStatus} />
				</div>
				{lesson ? (
					<SwipeableViews
						disabled={clickedId === undefined}
						index={itemIndex}
						onChangeIndex={index =>
							handleChangeIndex(index, lesson.quiz.items)
						}
					>
						{renderQuiz(lesson, user)}
					</SwipeableViews>
				) : (
					renderInDevelopment()
				)}
			</div>
		)
	}

	const renderInDevelopment = () => {
		setTimeout(() => HistoryService.push(Path.LEARN), 1000)
		return <h1>{IN_DEVELOPMENT}</h1>
	}

	const renderQuiz = (lesson: Lesson, user: User) => {
		return lesson.quiz.items.map((e, index) => (
			<div className='quiz_block' key={index}>
				<div className='quiz_question'>
					<CapiQuestionCard question={e.question} />
				</div>
				<div className='quiz_answers'>{renderAnswers(e, lesson, user)}</div>
			</div>
		))
	}

	const renderLearnResult = () => {
		return <LearnResults ratingScore={ratingScore} />
	}

	return (
		<div className='quiz'>
			{lesson
				? user && (
						<>
							{isFinished
								? renderLearnResult()
								: renderLessonContent(lesson, user)}
						</>
				  )
				: renderInDevelopment()}
		</div>
	)
}

export default Quiz
