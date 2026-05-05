// Classe que representa um funcionário da empresa
export class Funcionario {
  private matricula: number;
  private nome: string;
  private cargo: string;
  private salario: number;

  /**
   * Construtor da classe Funcionario
   * @param matricula - Número único que identifica o funcionário
   * @param nome - Nome completo do funcionário
   * @param cargo - Cargo/posição do funcionário na empresa
   * @param salario - Salário mensal do funcionário em reais
   */
  constructor(
    matricula: number,
    nome: string,
    cargo: string,
    salario: number
  ) {
    // Validação de entrada
    if (matricula <= 0) {
      throw new Error("Matrícula deve ser um número positivo");
    }
    if (nome.trim().length === 0) {
      throw new Error("Nome não pode estar vazio");
    }
    if (cargo.trim().length === 0) {
      throw new Error("Cargo não pode estar vazio");
    }
    if (salario <= 0) {
      throw new Error("Salário deve ser um número positivo");
    }

    this.matricula = matricula;
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }

  // Getter para matrícula (apenas leitura)
  getMatricula(): number {
    return this.matricula;
  }

  // Getter para nome
  getNome(): string {
    return this.nome;
  }

  // Getter para cargo
  getCargo(): string {
    return this.cargo;
  }

  // Getter para salário
  getSalario(): number {
    return this.salario;
  }

  /**
   * Atualiza o salário do funcionário
   * @param novoSalario - Novo valor do salário
   */
  setSalario(novoSalario: number): void {
    if (novoSalario <= 0) {
      throw new Error("Novo salário deve ser um número positivo");
    }
    this.salario = novoSalario;
  }

  /**
   * Retorna as informações do funcionário em formato de texto
   */
  toString(): string {
    return (
      `Funcionário:\n` +
      `  Matrícula: ${this.matricula}\n` +
      `  Nome: ${this.nome}\n` +
      `  Cargo: ${this.cargo}\n` +
      `  Salário: R$ ${this.salario.toFixed(2)}`
    );
  }
}
