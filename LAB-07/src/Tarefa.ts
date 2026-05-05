// Classe que representa uma tarefa no sistema de gestão
export class Tarefa {
  private id: number;
  private descricao: string;
  private status: string;
  private projeto: string;

  // Construtor que inicializa todos os campos da tarefa
  constructor(id: number, descricao: string, status: string, projeto: string) {
    this.id = id;
    this.descricao = descricao;
    this.status = status;
    this.projeto = projeto;
  }

  // Getters para acessar os atributos privados
  public getId(): number {
    return this.id;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public getStatus(): string {
    return this.status;
  }

  public getProjeto(): string {
    return this.projeto;
  }

  // Setter para atualizar o status da tarefa
  public setStatus(novoStatus: string): void {
    if (!novoStatus || novoStatus.trim() === '') {
      throw new Error('Status não pode estar vazio');
    }
    this.status = novoStatus;
  }

  // Método para retornar as informações da tarefa como string
  public toString(): string {
    return `ID: ${this.id} | Descrição: ${this.descricao} | Status: ${this.status} | Projeto: ${this.projeto}`;
  }
}
