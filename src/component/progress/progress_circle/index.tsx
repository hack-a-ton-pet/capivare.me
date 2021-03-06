import React from 'react'
import CircularProgress, {
	CircularProgressProps,
} from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import './styles.css'

const CapiCircularProgress = (
	props: CircularProgressProps & {
		value: number
		fontSize?: string
	},
) => {
	return (
		<Box
			position='relative'
			display='inline-flex'
			className='capi_circular_progress'
		>
			<CircularProgress variant='determinate' {...props} color='inherit' />
			<Box
				top={0}
				left={0}
				bottom={0}
				right={0}
				position='absolute'
				display='flex'
				alignItems='center'
				justifyContent='center'
			>
				<Typography
					variant='caption'
					component='div'
					color='textSecondary'
					style={{
						fontSize: props.fontSize,
					}}
				>{`${Math.round(props.value)}%`}</Typography>
			</Box>
		</Box>
	)
}
export default CapiCircularProgress
