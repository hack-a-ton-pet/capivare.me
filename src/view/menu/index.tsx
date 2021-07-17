import React from 'react'
import './styles.css'
import menuCards from '../../constant/data/menuCard'
import CapiCard from '../../component/card'

const Menu = () => {
	return (
		<div className='menu'>
			<h4>Menu</h4>
			{menuCards.map((e, index) => {
				return (
					<CapiCard
						key={index}
						image={e.image}
						text={e.text}
						title={e.title}
						small={e.small}
					/>
				)
			})}
		</div>
	)
}

export default Menu
