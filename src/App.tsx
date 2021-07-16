
import React from "react"
import "./App.css"
import { Switch, Route, Router, Link } from "react-router-dom"
import PathConstants from "./constant/PathConstants"
import Menu from "./view/menu"
import Login from "./view/login"
import HistoryService from "./service/history/HistoryService"

function App() {
	return (
		<div className='App'>
			<Router history={HistoryService}>
				<nav>
					<ul>
						<li>
							<Link to={PathConstants.LOGIN}>LOGIN</Link>
						</li>
						<li>
							<Link to={PathConstants.MENU}>MENU</Link>
						</li>
						<li>
							<Link to={PathConstants.LEARN}>LEARN</Link>
						</li>
						<li>
							<Link to={PathConstants.QUIZ}>QUIZ</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route exact path={PathConstants.LOGIN} component={Login} />
					<Route exact path={PathConstants.MENU} component={Menu} />
					<Route path={PathConstants.LEARN} component={() => <></>} />
					<Route
						path={`${PathConstants.LESSON}`}
						component={() => <></>}
					/>
					<Route
						path={`${PathConstants.LESSON}/:id`}
						component={() => <></>}
					/>
					<Route
						path={`${PathConstants.QUIZ}/:id`}
						component={() => <></>}
					/>
					<Route path={'/'} component={() => <></>} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
