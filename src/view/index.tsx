import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import PathConstants from '../constant/PathConstants'
import HistoryService from '../service/history/HistoryService'
import Login from './login'
import Menu from './menu'
import LearnPath from './learn_path'
import NotFound from './not_found'
import Lesson from './lesson'
import LessonSection from './lesson/lesson_section'

const Main: React.FC = () => {
	return (
		<Router history={HistoryService}>
			{/* <nav>
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
						<Link to={PathConstants.LESSON}>LESSON</Link>
					</li>
					<li>
						<Link to={`${PathConstants.LESSON}/1`}>LESSON 1</Link>
					</li>
					<li>
						<Link to={PathConstants.QUIZ}>QUIZ</Link>
					</li>
				</ul>
			</nav> */}
			<Switch>
				<Route exact path={PathConstants.LOGIN} component={Login} />
				<Route exact path={PathConstants.MENU} component={Menu} />
				<Route path={PathConstants.LEARN} component={LearnPath} />
				<Route exact path={PathConstants.LESSON} component={Lesson} />
				<Route
					path={`${PathConstants.LESSON}/:id`}
					component={LessonSection}
				/>
				<Route path={`${PathConstants.QUIZ}/:id`} component={() => <></>} />
				<Route path={'/'} component={NotFound} />
			</Switch>
		</Router>
	)
}

export default Main
