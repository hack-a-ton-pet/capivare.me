import { Box } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import CapiButton from '../../component/button'
import CapiLogo from '../../component/capi_logo'
import CapiInput from '../../component/input'
import LoginService from '../../service/auth/LoginService'
import PathConstants from '../../constant/PathConstants'
import { AuthActionType, authStore } from '../../context/AuthContext'
import CpfService from '../../service/user/CpfService'
import './styles.css'

const RegisterHere: React.FC<{
	onRegister: () => void
}> = ({ onRegister }) => {
	return (
		<button
			className='login__register_here default_font'
			onClick={onRegister}
		>
			&nbsp;Cadastre-se aqui.
		</button>
	)
}

const Login: React.FC = () => {
	const history = useHistory()
	const { dispatch } = useContext(authStore)

	const [password, setPassword] = useState('')
	const [cpf, setCpf] = useState('')
	const [error, setError] = useState<string | undefined>()

	const handleLogin = async () => {
		const result = await LoginService.login(cpf, password)
		if (result.hasError) {
			setError(result.errors[0])
		} else {
			dispatch({
				type: AuthActionType.LOGIN,
				data: result.content!!,
			})
			history.push(PathConstants.MENU)
		}
	}

	const handleRegister = async () => {
		history.push(PathConstants.REGISTER)
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
					label='cpf'
					number
				/>
				<Box m={1} />
				<CapiInput
					onChange={handleChangePassword}
					value={password}
					label='senha'
					password
				/>
				<Box m={2} />
				<CapiButton onClick={handleLogin} text='Entrar' submit />
			</form>
			<p className='login__without_account default_font'>
				Não tem cadastro?
				<RegisterHere onRegister={handleRegister} />
			</p>
			{error && <p className='login__error_text default_font'>{error}</p>}
		</div>
	)
}

export default Login
