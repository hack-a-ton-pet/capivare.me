import React from 'react'
import { Card } from '@material-ui/core'
import './styles.css'

export interface ContentCardProps {
	title: string
	paragraphs: string[]
}

const ContentCard: React.FC<ContentCardProps> = ({ title, paragraphs }) => {
	return (
		<Card className='content_card'>
			<h1 className='content_card__title default_font'>{title}</h1>
			{paragraphs.map((paragraph, index) => (
				<p key={index} className='default_font'>
					{paragraph}
				</p>
			))}
		</Card>
	)
}

export default ContentCard
