import React from "react"
import "./styles.css"
import { makeStyles } from "@material-ui/core/styles"
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core"

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
})

const Menu = () => {
	const classes = useStyles()

	return (
		<div className="menu">
			<h4>Menu</h4>
			{[1, 2, 3].map((e, index) => {
				return (
					<Card raised className={classes.root + " card"} key={index}>
						<CardActionArea>
							<CardMedia
								className={classes.media + " card__media"}
								image="julgue.png"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography color="textPrimary" component="p">
									Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across
									all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				)
			})}
		</div>
	)
}

export default Menu
