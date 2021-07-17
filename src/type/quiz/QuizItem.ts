export interface Answer {
	id: number
	text: string
}

export default interface QuizItem {
	question: string
	correctAnswerId: number
	anwers: Answer[]
}
