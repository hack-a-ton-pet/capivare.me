import React from 'react'
import './styles.css'

export interface CapiInputProps {
	onChange: (value: string) => void
	value: string
	label: string
}

const CapiInput: React.FC<CapiInputProps> = ({ label, value, onChange }) => {
	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value)
	}

	return (
		<div className='capi_input'>
			<label id='capi_input__label' className='default_font'>
				{label}
			</label>
			<input
				type='text'
				id='capi_input__field'
				aria-labelledby='capi_input__label'
				onChange={handleOnChange}
				value={value}
				className='capi_input__field default_font'
			/>
		</div>
	)
}

export default CapiInput
