import React from 'react'
import Main from './view'
import { AuthProvider } from './context/AuthContext'
import './App.css'
import './Color.css'
import './Var.css'

const App: React.FC = () => {
	return (
		<div className='app'>
			<AuthProvider>
				<Main />
			</AuthProvider>
		</div>
	)
}
export default App
