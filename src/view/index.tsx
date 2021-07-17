import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import PathConstants from '../constant/PathConstants'
import HistoryService from '../service/history/HistoryService'
import Login from './login'
import Menu from './menu'
import LearnPath from './learn_path'
import NotFound from './not_found'
import Lesson from './lesson'
import Achievements from './achievements'
import LessonSection from './lesson/lesson_section'

const Main: React.FC = () => {
	return (
		<Router history={HistoryService}>
			<Switch>
				<Route exact path={PathConstants.LOGIN} component={Login} />
				<Route exact path={PathConstants.MENU} component={Menu} />
				<Route path={PathConstants.LEARN} component={LearnPath} />
				<Route exact path={PathConstants.LESSON} component={Lesson} />
				<Route
					path={`${PathConstants.LESSON}/:id`}
					component={LessonSection}
				/>
				<Route exact path={PathConstants.QUIZ} component={() => <></>} />
				<Route path={`${PathConstants.QUIZ}/:id`} component={() => <></>} />
				<Route path={PathConstants.ACHIEVEMENTS} component={Achievements} />
				<Route path={'/'} component={NotFound} />
			</Switch>
		</Router>
	)
}

export default Main
