class CpfService {
	isValidLength = (cpf: string): boolean => {
		return cpf.length <= 11
	}

	isInvalidCpf = (cpf: string): boolean => {
		return cpf.length !== 11
	}
}

export default new CpfService()
