import React, { useContext } from 'react'
import { AuthActionType, authStore } from '../../context/Auth'
import LogoutIconButton from '../../component/icon_button/logout'
import { MENU_CARDS } from '../../constant/mock/MenuCard'
import CapiCard from '../../component/card'
import './styles.css'

const Menu: React.FC = () => {
	const { dispatch } = useContext(authStore)
	const handleClick = () => {
		dispatch({
			type: AuthActionType.LOGOUT,
			data: undefined,
		})
	}

	return (
		<div className='menu'>
			{MENU_CARDS.map((e, index) => {
				return <CapiCard key={index} item={e} />
			})}
			<div className='logout-wrapper'>
				<LogoutIconButton onClick={handleClick} />
			</div>
		</div>
	)
}

export default Menu
