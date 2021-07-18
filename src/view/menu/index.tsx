import React from 'react'
import menuCards from '../../constant/data/menuCard'
import CapiCard from '../../component/card'
import './styles.css'

const Menu: React.FC = () => {
	return (
		<div className='menu'>
			{menuCards.map((e, index) => {
				return <CapiCard key={index} item={e} />
			})}
		</div>
	)
}

export default Menu
