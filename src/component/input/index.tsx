import React from 'react'
import './styles.css'

export interface CapiInputProps {
	onChange: (value: string) => void
	value: string
	label: string
	password?: boolean
	number?: boolean
	uniqueKey?: string
}

const CapiInput: React.FC<CapiInputProps> = ({
	label,
	value,
	onChange,
	password,
	number,
	uniqueKey,
}) => {
	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value)
	}

	return (
		<div className='capi_input'>
			<label
				id={`capi_input__label__${uniqueKey ?? ''}`}
				className='default_font'
			>
				{label}
			</label>
			<input
				type={password ? 'password' : number ? 'number' : 'text'}
				id={`capi_input__field__${uniqueKey ?? ''}`}
				aria-labelledby={`capi_input__label__${uniqueKey ?? ''}`}
				onChange={handleOnChange}
				value={value}
				className='capi_input__field default_font'
			/>
		</div>
	)
}

export default CapiInput
