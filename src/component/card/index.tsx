import React from 'react'
import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	makeStyles,
} from '@material-ui/core'
import HistoryService from '../../service/history/HistoryService'
import { menuCardProps } from '../../constant/data/menuCard'
import './styles.css'

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
})

const CapiCard: React.FC<{
	item: menuCardProps
}> = ({ item }) => {
	const handleClick = path => {
		setTimeout(() => HistoryService.push(path), 200)
	}

	const classes = useStyles()

	return (
		<Card
			raised
			onClick={() => handleClick(item.path)}
			className={classes.root + ' capi_card'}
		>
			<CardActionArea>
				<CardMedia
					className={classes.media + ' capi_card__media'}
					image={item.image}
					title={item.title}
				>
					<CardMediaTitle small={item.small}>{item.title}</CardMediaTitle>
				</CardMedia>
				<CardContent>
					<Typography color='textPrimary' component='p'>
						{item.text}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

const CardMediaTitle: React.FC<{ small?: boolean }> = ({ small, children }) => (
	<div className={'capi_card__media__title' + (small ? ' small' : '')}>
		<h2>{children}</h2>
	</div>
)

export default CapiCard
