import { Box } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import CapiButton from '../../component/button'
import CapiLogo from '../../component/capi_logo'
import GoBackIconButton from '../../component/icon_button/go_back'
import CapiInput from '../../component/input'
import Path from '../../constant/Path'
import { AuthActionType, authStore } from '../../context/Auth'
import RegisterService from '../../service/auth/RegisterService'
import HistoryService from '../../service/history/HistoryService'
import CpfService from '../../service/user/CpfService'
import {
	CONFIRM_PASSWORD,
	CONFIRM_PASSWORD_KEY,
	CPF,
	PASSWORD,
	REGISTER,
} from '../../constant/component/Register'
import './styles.css'

const Register: React.FC = () => {
	const { dispatch } = useContext(authStore)

	const [cpf, setCpf] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [error, setError] = useState<string | undefined>()

	const handleRegister = async () => {
		const result = await RegisterService.register(
			cpf,
			password,
			confirmPassword,
		)
		if (result.hasError) {
			setError(result.errors[0])
		} else {
			dispatch({
				type: AuthActionType.LOGIN,
				data: result.content!!,
			})
			HistoryService.push(Path.MENU)
		}
	}

	const handleChangeCpf = (value: string) => {
		if (CpfService.isValidLength(value)) setCpf(value)
	}

	const handleChangePassword = (value: string) => {
		setPassword(value)
	}

	const handleChangeConfirmPassword = (value: string) => {
		setConfirmPassword(value)
	}

	return (
		<div className='register'>
			<div className='register__return_wrapper'>
				<GoBackIconButton />
			</div>
			<CapiLogo width='100px' />
			<h1>Capivare.me</h1>
			<form className='register__form'>
				<CapiInput
					onChange={handleChangeCpf}
					value={cpf}
					label={CPF}
					number
				/>
				<Box m={1} />
				<CapiInput
					onChange={handleChangePassword}
					value={password}
					label={PASSWORD}
					uniqueKey={PASSWORD}
					password
				/>
				<Box m={1} />
				<CapiInput
					onChange={handleChangeConfirmPassword}
					value={confirmPassword}
					label={CONFIRM_PASSWORD}
					uniqueKey={CONFIRM_PASSWORD_KEY}
					password
				/>
				<Box m={2} />
				<CapiButton onClick={handleRegister} text={REGISTER} submit />
			</form>
			{error && <p className='register__error_text default_font'>{error}</p>}
		</div>
	)
}

export default Register
