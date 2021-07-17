import Repository from './Repository'
import Database from '../database/Database'
import User from '../type/entity/User'

class UserRepository extends Repository<User> {
	constructor() {
		super(Database.user)
	}

	getByCpf = async (cpf: string): Promise<User | undefined> => {
		return this.table.where('cpf').equals(cpf).first()
	}
}

export default new UserRepository()
