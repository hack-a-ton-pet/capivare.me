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
import Quiz from './quiz'

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
					path={`${PathConstants.LESSON_MENU}/:id`}
					component={Lesson}
				/>
				<AuthenticatedRoute
					path={`${PathConstants.LESSON}/:id`}
					component={LessonSection}
				/>
				<AuthenticatedRoute
					path={PathConstants.QUIZ}
					component={Quiz}
				/>
				<AuthenticatedRoute
					path={`${PathConstants.QUIZ}/:id`}
					component={() => <></>}
				/>
                <AuthenticatedRoute
					path={PathConstants.ACHIEVEMENTS}
					component={Achievements}
				/>
				<Route path={'/'} component={NotFound} />
			</Switch>
		</Router>
	)
}

export default Main
