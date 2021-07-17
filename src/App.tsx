import React from 'react'
import Main from './view'
import './App.css'
import './Color.css'
import './Var.css'
import CapiQuestionCard from './component/question_card'
import QuestionStatusCircle from './component/question_status_circle'
import QuestionStatusConstants from './constant/QuestionStatusConstants'

const App: React.FC = () => {
	return (
		<div className='app'>
			<QuestionStatusCircle status={QuestionStatusConstants.CORRECT} />
		</div>
	)
}

export default App
