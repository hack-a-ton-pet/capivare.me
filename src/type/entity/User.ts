import LearnPathProgress from './UserProgress'
import Entity from './Entity'

export default interface User extends Entity {
	cpf: string
	password: string
	pathProgresses: LearnPathProgress[]
}
