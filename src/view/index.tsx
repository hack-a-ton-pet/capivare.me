import React from 'react'
import AuthenticatedRoute from '../component/authenticated_route'
import { Router, Switch, Route } from 'react-router-dom'
import PathConstants from '../constant/PathConstants'
import HistoryService from '../service/history/HistoryService'
import Login from './login'
import Register from './register'
import Menu from './menu'
import LearnPath from './learn_path'
import NotFound from './not_found'
import Lesson from './lesson'
import Achievements from './achievements'
import LessonSection from './lesson/lesson_section'
import LearnAchievements from './achievements/learn_achievements'
import EvaluateAchievements from './achievements/evaluate_achievements'

const Main: React.FC = () => {
	return (
		<Router history={HistoryService}>
			<Switch>
				<Route exact path={PathConstants.LOGIN} component={Login} />
				<Route exact path={PathConstants.REGISTER} component={Register} />
				<AuthenticatedRoute
					exact
					path={PathConstants.MENU}
					component={Menu}
				/>
				<AuthenticatedRoute
					path={PathConstants.LEARN}
					component={LearnPath}
				/>
				<AuthenticatedRoute
					exact
					path={PathConstants.LESSON}
					component={Lesson}
				/>
				<AuthenticatedRoute
					path={`${PathConstants.LESSON}/:id`}
					component={LessonSection}
				/>
				<AuthenticatedRoute
					exact
					path={PathConstants.QUIZ}
					component={() => <></>}
				/>
				<AuthenticatedRoute
					path={`${PathConstants.QUIZ}/:id`}
					component={() => <></>}
				/>
				<AuthenticatedRoute
					exact
					path={PathConstants.ACHIEVEMENTS}
					component={Achievements}
				/>
				<AuthenticatedRoute
					path={PathConstants.LEARN_ACHIEVEMENTS}
					component={LearnAchievements}
				/>
				<AuthenticatedRoute
					path={PathConstants.EVALUATE_ACHIEVEMENTS}
					component={EvaluateAchievements}
				/>
				<Route path={'/'} component={NotFound} />
			</Switch>
		</Router>
	)
}

export default Main
