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
	const goToPath = () => {
		props.path ? HistoryService.push(props.path!) : HistoryService.goBack()
	}

	return (
		<CapiIconButton
			aria-label='Voltar à página anterior'
			{...props}
			onClick={props.onClick || goToPath}
			className={`icon_button__go_back ${props.className ?? ''}`}
		>
			<ArrowBackIcon />
		</CapiIconButton>
	)
}

export default GoBackIconButton
