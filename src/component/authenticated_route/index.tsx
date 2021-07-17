import React, { useContext, useEffect } from 'react'
import { Route, useHistory } from 'react-router'
import { authStore } from '../../context/AuthContext'
import PathConstants from '../../constant/PathConstants'

interface PrivateRouteProps {
	path: string
	exact?: boolean
	component: React.ComponentType<any>
}

const AuthenticatedRoute: React.FC<PrivateRouteProps> = props => {
	const history = useHistory()
	const auth = useContext(authStore)

	useEffect(() => {
		if (!auth.state.isAuthenticated) {
			history.push(PathConstants.LOGIN)
		}
	})

	return <Route {...props} />
}

export default AuthenticatedRoute
