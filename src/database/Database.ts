import Dexie from 'dexie'
import Table from '../type/Table'
import User from '../type/User'

const NAME = 'CAPICRACIA'
const VERSION = 1

class Database extends Dexie {
	user: Table<User>

	constructor() {
		super(NAME)

		this.version(VERSION).stores({
			user: generateIndexes('cpf'),
		})

		this.user = this.table('user')
	}
}

const generateIndexes = (...properties: string[]): string => {
	if (properties.length > 0) {
		return `${getDefaultIndex()},${properties.join(',')}`
	}
	return getDefaultIndex()
}

const getDefaultIndex = (): string => {
	return '++id'
}

export default new Database()
