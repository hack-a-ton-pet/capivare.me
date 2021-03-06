import React from 'react'
import { Card } from '@material-ui/core'
import { splitStringByNewLine } from '../../util/StringUtils'
import './styles.css'

export interface ContentCardProps {
	title: string
	text: string
}

const ContentCard: React.FC<ContentCardProps> = ({ title, text }) => {
	return (
		<Card className='content_card'>
			<h2 className='content_card__title default_font'>{title}</h2>
			{splitStringByNewLine(text).map((paragraph, index) => (
				<p key={index} className='default_font'>
					{paragraph}
				</p>
			))}
		</Card>
	)
}

export default ContentCard
