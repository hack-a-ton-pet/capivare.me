import Dexie from 'dexie'
import Table from '../type/Table'

const NAME = 'CAPICRACIA'
const VERSION = 1

class Database extends Dexie {
	constructor() {
		super(NAME)

		this.version(VERSION).stores({})
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
