import React, { useContext } from 'react'
import { authStore } from '../../context/AuthContext'
import LogoutIconButton from '../../component/icon_button/logout'
import menuCards from '../../constant/data/menuCard'
import CapiCard from '../../component/card'
import './styles.css'

const Menu: React.FC = () => {
	const { dispatch } = useContext(authStore)
	const handleClick = () => {
	}

	return (
		<div className='menu'>
			{menuCards.map((e, index) => {
				return <CapiCard key={index} item={e} />
			})}
			<div className="logout-wrapper">
				<LogoutIconButton onClick={() => handleClick() />
			</div>
		</div>
	)
}

export default Menu
