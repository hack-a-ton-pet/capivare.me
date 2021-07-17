import './styles.css'
import menuCards from '../../constant/data/menuCard'
import CapiCard from '../../component/card'

const Menu = () => {
	return (
		<div className='menu'>
			{menuCards.map((e, index) => {
				return <CapiCard key={index} item={e} />
			})}
		</div>
	)
}

export default Menu
