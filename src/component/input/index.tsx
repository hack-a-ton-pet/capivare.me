import React from 'react'
import './styles.css'

const CapiInput: React.FC = () => {
	return (
		<div className='capi_input'>
			<label className='default_font'>First name:</label>
			<input
				type='text'
				id='capi_input__field'
				className='capi_input__field default_font'
			/>
		</div>
	)
}

export default CapiInput
