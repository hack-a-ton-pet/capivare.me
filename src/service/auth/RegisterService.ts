import sha256 from 'sha256'
import UserRepository from '../../repository/UserRepository'
import AsyncResult from '../../type/AsyncResult'
import User from '../../type/entity/User'
import UserService from '../user/UserService'
import CpfService from '../user/CpfService'

class RegisterService {
	register = async (
		cpf: string,
		password: string,
		confirmPassword,
	): Promise<AsyncResult<User>> => {
		if (this.isInvalidConfirmPassword(password, confirmPassword))
			return this.invalidConfirmPasswordResult()

		if (CpfService.isInvalidCpf(cpf)) return this.invalidCpfResult()

		if (await this.userAlreadyExists(cpf))
			return this.userAlreadExistsResult()

		return this.saveUser(cpf, password)
	}

	private isInvalidConfirmPassword = (
		password: string,
		confirmPassword: string,
	) => {
		return password !== confirmPassword
	}

	private saveUser = async (
		cpf: string,
		password: string,
	): Promise<AsyncResult<User>> => {
		const user = await UserRepository.save({
			cpf: cpf,
			password: sha256(password),
			pathProgresses: [],
		})

		return this.successResult(user)
	}

	private successResult = (user: User): AsyncResult<User> => {
		return {
			content: user,
			errors: [],
			hasError: false,
		}
	}

	private userAlreadExistsResult = (): AsyncResult<User> => {
		return {
			content: undefined,
			errors: ['Cpf já cadastrado.'],
			hasError: true,
		}
	}

	private invalidCpfResult = (): AsyncResult<User> => {
		return {
			content: undefined,
			errors: ['Cpf inválido.'],
			hasError: true,
		}
	}

	private invalidConfirmPasswordResult = (): AsyncResult<User> => {
		return {
			content: undefined,
			errors: ['Confirmação de senha inválida.'],
			hasError: true,
		}
	}

	private userAlreadyExists = async (cpf: string): Promise<boolean> => {
		const user = await UserService.getByCpf(cpf)
		return user !== undefined
	}
}

export default new RegisterService()
