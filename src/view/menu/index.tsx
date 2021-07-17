import React from 'react'
import './styles.css'
import menuCards from '../../constant/data/menuCard'
import CapiCard from '../../component/card'
import GoBackIconButton from '../../component/icon_button/go_back'

const Menu = () => {
	return (
		<div className='menu'>
			<GoBackIconButton />
			<h4>Menu</h4>
			{menuCards.map((e, index) => {
				return <CapiCard key={index} item={e} />
			})}
		</div>
	)
}

export default Menu
