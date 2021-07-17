import React from 'react'
import CapiIconButton from '..'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import HistoryService from '../../../service/history/HistoryService'
import CapiIconButtonProps from '../props'
import './styles.css'

/**
 * @param color: "default" | "primary" | "secondary"
 * @param onClick: se não tiver volta no history
 */
const GoBackIconButton: React.FC<CapiIconButtonProps> = props => {
	return (
		<CapiIconButton
			className='go_back__icon_button'
			aria-label='Voltar à página anterior'
			onClick={props.onClick || HistoryService.goBack}
			{...props}
		>
			<ArrowBackIcon />
		</CapiIconButton>
	)
}

export default GoBackIconButton
