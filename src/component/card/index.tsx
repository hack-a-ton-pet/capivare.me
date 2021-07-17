import React from 'react'
import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	makeStyles,
} from '@material-ui/core'
import PathConstants from '../../constant/PathConstants'
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

const CapiCard: React.FC<menuCardProps> = ({ image, text, title, small }) => {
	const handleClick = () => {
		setTimeout(() => HistoryService.replace(PathConstants.LEARN), 200)
	}

	const classes = useStyles()

	return (
		<Card
			raised
			onClick={handleClick}
			className={classes.root + ' capi_card'}
		>
			<CardActionArea>
				<CardMedia
					className={classes.media + ' capi_card__media'}
					image={image}
					title={title}
				>
					<CardMediaTitle small={small}>{title}</CardMediaTitle>
				</CardMedia>
				<CardContent>
					<Typography color='textPrimary' component='p'>
						{text}
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
