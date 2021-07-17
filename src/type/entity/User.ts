import LearnPathProgress from './UserProgress'

export default interface User {
	cpf: string
	password: string
	pathProgresses: LearnPathProgress[]
}
