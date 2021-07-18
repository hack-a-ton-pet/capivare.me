import React from 'react'
import AuthenticatedRoute from '../component/authenticated_route'
import { Router, Switch, Route } from 'react-router-dom'
import Path from '../constant/Path'
import HistoryService from '../service/history/HistoryService'
import Login from './login'
import Register from './register'
import Menu from './menu'
import LearnPath from './learn_path'
import NotFound from './not_found'
import Lesson from './lesson'
import Achievements from './achievements'
import LessonSection from './lesson/lesson_section'
import Quiz from './quiz'
import LearnAchievements from './achievements/learn_achievements'
import EvaluateAchievements from './achievements/evaluate_achievements'

const Main: React.FC = () => {
	return (
		<Router history={HistoryService}>
			<Switch>
				<Route exact path={Path.LOGIN} component={Login} />
				<Route exact path={Path.REGISTER} component={Register} />
				<AuthenticatedRoute exact path={Path.MENU} component={Menu} />
				<AuthenticatedRoute path={Path.LEARN} component={LearnPath} />
				<AuthenticatedRoute
					exact
					path={`${Path.LESSON_MENU}/:id`}
					component={Lesson}
				/>
				<AuthenticatedRoute
					path={`${Path.LESSON}/:id`}
					component={LessonSection}
				/>
				<AuthenticatedRoute path={`${Path.QUIZ}/:id`} component={Quiz} />
				<AuthenticatedRoute
					path={`${Path.QUIZ}/:id`}
					component={() => <></>}
				/>
				<AuthenticatedRoute
					exact
					path={Path.ACHIEVEMENTS}
					component={Achievements}
				/>
				<AuthenticatedRoute
					path={Path.LEARN_ACHIEVEMENTS}
					component={LearnAchievements}
				/>
				<AuthenticatedRoute
					path={Path.EVALUATE_ACHIEVEMENTS}
					component={EvaluateAchievements}
				/>
				<Route path={'/'} component={NotFound} />
			</Switch>
		</Router>
	)
}

export default Main
