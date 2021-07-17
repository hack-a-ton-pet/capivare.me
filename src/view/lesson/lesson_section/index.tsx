import React from 'react'
import './styles.css'
import { useParams } from 'react-router-dom'

const LessonSection: React.FC = () => {
	const { id } = useParams<{ id: string }>()

	return <div className='lesson_section'></div>
}

export default LessonSection
