import { Livro } from "./Livro";

/**
 * Classe Biblioteca
 * Gerencia o acervo de livros da biblioteca, com operações de empréstimo e consulta
 */
export class Biblioteca {
  private acervo: Livro[] = [];

  /**
   * Adiciona um livro ao acervo da biblioteca
   * @param livro - Livro a ser adicionado
   * @throws Error se o livro já existe no acervo
   */
  public adicionarLivro(livro: Livro): void {
    const livroExistente = this.acervo.find(
      (l) => l.getCodigo() === livro.getCodigo()
    );

    if (livroExistente) {
      throw new Error(
        `Um livro com o código ${livro.getCodigo()} já existe no acervo.`
      );
    }

    this.acervo.push(livro);
    console.log(`[OK] Livro "${livro.getTitulo()}" adicionado com sucesso.`);
  }

  /**
   * Registra o empréstimo de um livro
   * @param codigo - Código do livro a ser emprestado
   * @throws Error se o livro não for encontrado ou não estiver disponível
   */
  public registrarEmprestimo(codigo: number): void {
    const livro = this.encontrarLivro(codigo);

    if (!livro) {
      throw new Error(`Livro com código ${codigo} não encontrado no acervo.`);
    }

    try {
      livro.emprestar();
      console.log(
        `[OK] Emprestimo registrado: "${livro.getTitulo()}" por ${livro.getAutor()}`
      );
    } catch (erro) {
      if (erro instanceof Error) {
        throw new Error(erro.message);
      }
      throw erro;
    }
  }

  /**
   * Registra a devolução de um livro emprestado
   * @param codigo - Código do livro a ser devolvido
   * @throws Error se o livro não for encontrado ou já estiver disponível
   */
  public registrarDevolucao(codigo: number): void {
    const livro = this.encontrarLivro(codigo);

    if (!livro) {
      throw new Error(`Livro com código ${codigo} não encontrado no acervo.`);
    }

    try {
      livro.devolver();
      console.log(
        `[OK] Devolucao registrada: "${livro.getTitulo()}" por ${livro.getAutor()}`
      );
    } catch (erro) {
      if (erro instanceof Error) {
        throw new Error(erro.message);
      }
      throw erro;
    }
  }

  /**
   * Consulta a disponibilidade de um livro
   * @param codigo - Código do livro a ser consultado
   * @returns true se o livro está disponível, false caso contrário
   * @throws Error se o livro não for encontrado
   */
  public consultarDisponibilidade(codigo: number): boolean {
    const livro = this.encontrarLivro(codigo);

    if (!livro) {
      throw new Error(`Livro com código ${codigo} não encontrado no acervo.`);
    }

    return livro.isDisponivel();
  }

  /**
   * Encontra um livro no acervo pelo código
   * @param codigo - Código do livro
   * @returns O livro encontrado ou undefined
   */
  private encontrarLivro(codigo: number): Livro | undefined {
    return this.acervo.find((l) => l.getCodigo() === codigo);
  }

  /**
   * Lista todos os livros do acervo
   */
  public listarAcervo(): void {
    if (this.acervo.length === 0) {
      console.log("O acervo está vazio.");
      return;
    }

    console.log("\n=== ACERVO DA BIBLIOTECA ===");
    this.acervo.forEach((livro, index) => {
      console.log(`\n${index + 1}. ${livro.getTitulo()}`);
      console.log(`   Autor: ${livro.getAutor()}`);
      console.log(`   Código: ${livro.getCodigo()}`);
      console.log(
        `   Status: ${livro.isDisponivel() ? "Disponível" : "Emprestado"}`
      );
    });
    console.log("\n============================\n");
  }

  /**
   * Retorna o total de livros no acervo
   */
  public getTotalLivros(): number {
    return this.acervo.length;
  }

  /**
   * Retorna o total de livros disponíveis
   */
  public getTotalDisponivel(): number {
    return this.acervo.filter((l) => l.isDisponivel()).length;
  }

  /**
   * Retorna o total de livros emprestados
   */
  public getTotalEmprestados(): number {
    return this.acervo.filter((l) => !l.isDisponivel()).length;
  }
}
