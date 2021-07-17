import React from 'react'
import Main from './view'
import './App.css'
import './Color.css'
import './Var.css'
import Lesson from './view/lesson'

const App: React.FC = () => {
	return (
		<div className='app'>
			<Lesson />
		</div>
	)
}
export default App
