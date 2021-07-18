import { Box } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import CapiButton from '../../component/button'
import CapiLogo from '../../component/capi_logo'
import CapiInput from '../../component/input'
import LoginService from '../../service/auth/LoginService'
import Path from '../../constant/Path'
import { AuthActionType, authStore } from '../../context/Auth'
import CpfService from '../../service/user/CpfService'
import HistoryService from '../../service/history/HistoryService'
import {
	CPF,
	GO_TO_REGISTER,
	GUESS,
	LOGIN,
	PASSWORD,
	REGISTER,
} from '../../constant/component/Login'
import './styles.css'

const RegisterHere: React.FC<{
	onRegister: () => void
}> = ({ onRegister }) => {
	return (
		<button
			className='login__register_here default_font'
			onClick={onRegister}
		>
			&nbsp;{GO_TO_REGISTER}
		</button>
	)
}

const Login: React.FC = () => {
	const { dispatch } = useContext(authStore)

	const [password, setPassword] = useState('')
	const [cpf, setCpf] = useState('')
	const [error, setError] = useState<string | undefined>()

	const handleGuest = async () => {
		const result = await LoginService.guest()
		if (!result.hasError) {
			dispatch({
				type: AuthActionType.LOGIN,
				data: result.content!!,
			})
			HistoryService.push(Path.MENU)
		}
	}

	const handleLogin = async () => {
		const result = await LoginService.login(cpf, password)
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

	const handleRegister = async () => {
		HistoryService.push(Path.REGISTER)
	}

	const handleChangePassword = (value: string) => {
		setPassword(value)
	}

	const handleChangeCpf = (value: string) => {
		if (CpfService.isValidLength(value)) setCpf(value)
	}

	return (
		<div className='login'>
			<CapiLogo width='150px' />
			<h1>Capivare.me</h1>
			<form className='login__form'>
				<CapiInput
					onChange={handleChangeCpf}
					value={cpf}
					uniqueKey={CPF}
					label={CPF}
					number
				/>
				<Box m={1} />
				<CapiInput
					onChange={handleChangePassword}
					value={password}
					uniqueKey={PASSWORD}
					label={PASSWORD}
					password
				/>
				<Box m={2} />
				<CapiButton onClick={handleLogin} text={LOGIN} submit />
				<Box m={2} />
				<CapiButton onClick={handleGuest} text={GUESS} />
			</form>
			<Box m={1} />
			<p className='login__without_account default_font'>
				{REGISTER}
				<RegisterHere onRegister={handleRegister} />
			</p>
			{error && <p className='login__error_text default_font'>{error}</p>}
		</div>
	)
}

export default Login
