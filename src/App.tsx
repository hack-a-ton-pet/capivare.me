import React from 'react'
import Main from './view'
import './App.css'
import './Color.css'
import './Var.css'
import CapiQuestionCard from './component/question_card'

const App: React.FC = () => {
	return (
		<div className='app'>
			<CapiQuestionCard />
		</div>
	)
}

export default App
