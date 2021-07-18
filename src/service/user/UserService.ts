import UserRepository from '../../repository/UserRepository'
import User from '../../type/entity/User'

class UserService {
	getByCpf = async (cpf: string): Promise<User | undefined> => {
		return UserRepository.getByCpf(cpf)
	}
}

export default new UserService()
