/**
 * Classe Livro
 * Representa um livro no acervo da biblioteca com seus atributos
 */
export class Livro {
  private codigo: number;
  private titulo: string;
  private autor: string;
  private disponivel: boolean;

  /**
   * Construtor da classe Livro
   * @param codigo - Identificador único do livro
   * @param titulo - Título do livro
   * @param autor - Autor do livro
   * @param disponivel - Status de disponibilidade (padrão: true)
   */
  constructor(
    codigo: number,
    titulo: string,
    autor: string,
    disponivel: boolean = true
  ) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = disponivel;
  }

  /**
   * Getter para o código do livro
   */
  public getCodigo(): number {
    return this.codigo;
  }

  /**
   * Getter para o título do livro
   */
  public getTitulo(): string {
    return this.titulo;
  }

  /**
   * Getter para o autor do livro
   */
  public getAutor(): string {
    return this.autor;
  }

  /**
   * Getter para a disponibilidade do livro
   */
  public isDisponivel(): boolean {
    return this.disponivel;
  }

  /**
   * Setter para marcar o livro como indisponível (emprestado)
   */
  public emprestar(): void {
    if (!this.disponivel) {
      throw new Error(
        `O livro "${this.titulo}" já está emprestado.`
      );
    }
    this.disponivel = false;
  }

  /**
   * Setter para marcar o livro como disponível (devolvido)
   */
  public devolver(): void {
    if (this.disponivel) {
      throw new Error(
        `O livro "${this.titulo}" já está disponível.`
      );
    }
    this.disponivel = true;
  }

  /**
   * Retorna informações do livro em formato string
   */
  public toString(): string {
    return `Livro {
      Código: ${this.codigo},
      Título: ${this.titulo},
      Autor: ${this.autor},
      Disponível: ${this.disponivel ? "Sim" : "Não"}
    }`;
  }
}
