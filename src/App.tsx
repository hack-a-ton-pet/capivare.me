import React from "react"
import "./App.css"
import { Switch, Route, Router, Link } from "react-router-dom"
import PathConstants from "./constant/PathConstants"
import Menu from "./view/menu"
import Login from "./view/login"
import { createBrowserHistory } from "history"

function App() {
	return (
		<div className="App">
			<Router history={createBrowserHistory()}>
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
					<Route exact path={PathConstants.LOGIN}>
						<Login />
					</Route>
					<Route exact path={PathConstants.MENU}>
						<Menu />
					</Route>
					<Route path={PathConstants.LEARN} component={() => <></>} />
					<Route path={PathConstants.QUIZ} component={() => <></>} />
					<Route path={"/"} component={() => <></>} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
