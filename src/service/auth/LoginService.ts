import sha256 from 'sha256'
import AsyncResult from '../../type/AsyncResult'
import User from '../../type/entity/User'
import UserService from '../user/UserService'

class LoginService {
	login = async (
		cpf: string,
		password: string,
	): Promise<AsyncResult<User>> => {
		const user = await UserService.findUser(cpf)

		if (this.isValidUserInput(user, password)) {
			return this.loginResult(user!!)
		}

		return this.invalidLoginResult()
	}

	private isValidUserInput = (
		user: User | undefined,
		password: string,
	): boolean => {
		const userExists = user !== undefined
		if (userExists) {
			return this.isValidUserPassword(user!!, password)
		}

		return false
	}

	private loginResult = (user: User): AsyncResult<User> => {
		return {
			content: user,
			errors: [],
			hasError: false,
		}
	}

	private invalidLoginResult = (): AsyncResult<User> => {
		return {
			content: undefined,
			errors: ['Login inválido.'],
			hasError: true,
		}
	}

	private isValidUserPassword = (user: User, password: string): boolean => {
		const hashPassword = sha256(password)
		return user.password === hashPassword
	}
}

export default new LoginService()
