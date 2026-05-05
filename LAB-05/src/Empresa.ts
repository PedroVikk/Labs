import { Funcionario } from "./Funcionario";

// Classe que gerencia funcionários da empresa
export class Empresa {
  private funcionarios: Funcionario[] = [];
  private nome: string;

  /**
   * Construtor da classe Empresa
   * @param nome - Nome da empresa
   */
  constructor(nome: string) {
    if (nome.trim().length === 0) {
      throw new Error("Nome da empresa não pode estar vazio");
    }
    this.nome = nome;
  }

  /**
   * Adiciona um novo funcionário à empresa
   * @param funcionario - Objeto Funcionario a ser adicionado
   * @throws Erro se já existe funcionário com a mesma matrícula
   */
  adicionarFuncionario(funcionario: Funcionario): void {
    // Valida se já existe funcionário com a mesma matrícula
    const funcionarioExistente = this.funcionarios.find(
      (f) => f.getMatricula() === funcionario.getMatricula()
    );

    if (funcionarioExistente) {
      throw new Error(
        `Já existe funcionário com a matrícula ${funcionario.getMatricula()}`
      );
    }

    this.funcionarios.push(funcionario);
    console.log(
      `✓ Funcionário ${funcionario.getNome()} adicionado com sucesso`
    );
  }

  /**
   * Atualiza o salário de um funcionário pelo número de matrícula
   * @param matricula - Número de matrícula do funcionário
   * @param novoSalario - Novo valor do salário
   * @throws Erro se o funcionário não for encontrado
   */
  atualizarSalario(matricula: number, novoSalario: number): void {
    const funcionario = this.consultarFuncionario(matricula);

    if (!funcionario) {
      throw new Error(
        `Funcionário com matrícula ${matricula} não encontrado`
      );
    }

    const salarioAnterior = funcionario.getSalario();
    funcionario.setSalario(novoSalario);

    console.log(
      `✓ Salário de ${funcionario.getNome()} atualizado de R$ ${salarioAnterior.toFixed(2)} para R$ ${novoSalario.toFixed(2)}`
    );
  }

  /**
   * Consulta um funcionário pelo número de matrícula
   * @param matricula - Número de matrícula do funcionário
   * @returns Objeto Funcionario se encontrado, undefined caso contrário
   */
  consultarFuncionario(matricula: number): Funcionario | undefined {
    return this.funcionarios.find((f) => f.getMatricula() === matricula);
  }

  /**
   * Retorna todos os funcionários da empresa
   */
  listarFuncionarios(): Funcionario[] {
    return this.funcionarios;
  }

  /**
   * Retorna a quantidade total de funcionários
   */
  getTotalFuncionarios(): number {
    return this.funcionarios.length;
  }

  /**
   * Calcula a folha de pagamento total mensal
   */
  calcularFolhaPagamento(): number {
    return this.funcionarios.reduce(
      (total, funcionario) => total + funcionario.getSalario(),
      0
    );
  }

  /**
   * Remove um funcionário pelo número de matrícula
   * @param matricula - Número de matrícula do funcionário
   * @throws Erro se o funcionário não for encontrado
   */
  removerFuncionario(matricula: number): void {
    const indice = this.funcionarios.findIndex(
      (f) => f.getMatricula() === matricula
    );

    if (indice === -1) {
      throw new Error(
        `Funcionário com matrícula ${matricula} não encontrado`
      );
    }

    const nomeFuncionario = this.funcionarios[indice].getNome();
    this.funcionarios.splice(indice, 1);
    console.log(`✓ Funcionário ${nomeFuncionario} removido com sucesso`);
  }

  /**
   * Exibe informações gerais da empresa
   */
  exibirResumo(): void {
    console.log(`\n${"=".repeat(50)}`);
    console.log(`Empresa: ${this.nome}`);
    console.log(`Total de Funcionários: ${this.getTotalFuncionarios()}`);
    console.log(
      `Folha de Pagamento: R$ ${this.calcularFolhaPagamento().toFixed(2)}`
    );
    console.log(`${"=".repeat(50)}\n`);
  }
}
