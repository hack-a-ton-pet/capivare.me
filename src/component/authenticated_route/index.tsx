import React, { useContext, useEffect } from 'react'
import { Route } from 'react-router'
import { authStore } from '../../context/AuthContext'
import PathConstants from '../../constant/PathConstants'
import HistoryService from '../../service/history/HistoryService'

interface PrivateRouteProps {
	path: string
	exact?: boolean
	component: React.ComponentType<any>
}

const AuthenticatedRoute: React.FC<PrivateRouteProps> = props => {
	const auth = useContext(authStore)

	useEffect(() => {
		if (!auth.state.isAuthenticated) {
			HistoryService.push(PathConstants.LOGIN)
		}
	})

	return <Route {...props} />
}

export default AuthenticatedRoute
