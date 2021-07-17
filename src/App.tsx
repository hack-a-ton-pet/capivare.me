import React from 'react'
import Main from './view'
import ProgressStatus from './component/progress_status'
import './App.css'
import './Color.css'
import './Var.css'

const App: React.FC = () => {
	return (
		<div className='app'>
			<ProgressStatus
				constitutionProgress={100}
				generalProgress={100}
				lawProgress={100}
				separationOfPowers={100}
			/>
		</div>
	)
}

export default App
