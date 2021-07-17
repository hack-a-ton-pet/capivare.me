import React from 'react'
import menuCards from '../../constant/data/menuCard'
import CapiCard from '../../component/card'
import GoBackIconButton from '../../component/icon_button/go_back'
import './styles.css'

const Menu: React.FC = () => {
	return (
		<div className='menu'>
			<GoBackIconButton />
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
