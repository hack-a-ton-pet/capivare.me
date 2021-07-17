import React from 'react'
import Main from './view'
import './App.css'
import './Color.css'
import './Var.css'
import CapiLogo from './component/capi_logo'

const App: React.FC = () => {
	return (
		<div className='app'>
			<CapiLogo />
		</div>
	)
}

export default App
