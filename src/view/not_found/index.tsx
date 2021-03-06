import { Box } from '@material-ui/core'
import React from 'react'
import CapiButton from '../../component/button'
import CapiLogo from '../../component/capi_logo'
import Path from '../../constant/Path'
import { NOT_FOUND, RETURN_TO_MENU } from '../../constant/component/NotFound'
import HistoryService from '../../service/history/HistoryService'
import './styles.css'

const NotFound: React.FC = () => {
	const handleBackButton = () => {
		HistoryService.push(Path.MENU)
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
