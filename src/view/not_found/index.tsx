import { Box } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import CapiButton from '../../component/button'
import CapiLogo from '../../component/capi_logo'
import PathConstants from '../../constant/PathConstants'
import { NOT_FOUND, RETURN_TO_MENU } from '../../constant/data/NotFound'
import './styles.css'

const NotFound: React.FC = () => {
	const history = useHistory()

	const handleBackButton = () => {
		history.push(PathConstants.MENU)
	}

	return (
		<div className='not_found'>
			<h1 className='default_font'>{NOT_FOUND}</h1>
			<CapiButton text={RETURN_TO_MENU} onClick={handleBackButton} />
			<Box m={6} />
			<CapiLogo className='not_found__logo' width={'280px'} />
		</div>
	)
}

export default NotFound
