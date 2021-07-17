import React from 'react'
import Main from './view'
import './App.css'
import './Color.css'
import './Var.css'
import Lesson from './view/lesson'
import Quiz from './view/quiz'

const App: React.FC = () => {
	return (
		<div className='app'>
			<Quiz />
		</div>
	)
}
export default App
