import React from 'react'
import ProgressCircle from '../progress/progress_circle'
import './styles.css'

const ProgressStatusSubItem: React.FC<{
	title: string
	value: number
	id: string
}> = ({ title, value, id }) => {
	return (
		<div className='progress_status__progress__sub__item'>
			<div>
				<ProgressCircle
					id={id}
					value={value}
					size={40}
					fontSize={'10px'}
					className='progress_status__progress__main__circle'
				/>
			</div>
			<h4 className='progress_status__progress__sub__item__subtitle'>
				{title}
			</h4>
		</div>
	)
}

export interface ProgressStatusProps {
	generalProgress: number
	constitutionProgress: number
	lawProgress: number
	separationOfPowers: number
}

const ProgressStatus: React.FC<ProgressStatusProps> = ({
	generalProgress,
	constitutionProgress,
	lawProgress,
	separationOfPowers,
}) => {
	return (
		<div className='progress_status default_font'>
			<h2 className='progress_status__title'>Seu Progresso</h2>
			<div className='progress_status__progress'>
				<div className='progress_status__progress__main'>
					<ProgressCircle
						value={generalProgress}
						size={120}
						fontSize={'30px'}
						className='progress_status__progress__main__circle'
					/>
					<h3 className='progress_status__subtitle'>PROCESSO GERAL</h3>
				</div>
				<div className='progress_status__progress__sub'>
					<ProgressStatusSubItem
						title='Tripartição de poderes'
						value={separationOfPowers}
						id={'lesson-1'}
					/>
					<ProgressStatusSubItem
						title='Constituição Federal'
						value={constitutionProgress}
						id={'lesson-2'}
					/>
					<ProgressStatusSubItem
						title='Leis'
						value={lawProgress}
						id={'lesson-3'}
					/>
				</div>
			</div>
		</div>
	)
}

export default ProgressStatus
