import { Tarefa } from './Tarefa';

// Classe responsável por gerenciar as tarefas do sistema
export class GestorTarefas {
  private tarefas: Tarefa[] = [];

  // Adiciona uma nova tarefa ao sistema
  public adicionarTarefa(tarefa: Tarefa): void {
    if (!tarefa) {
      throw new Error('Tarefa não pode ser nula');
    }

    // Verifica se já existe uma tarefa com o mesmo ID
    if (this.tarefas.some((t) => t.getId() === tarefa.getId())) {
      throw new Error(`Tarefa com ID ${tarefa.getId()} já existe`);
    }

    this.tarefas.push(tarefa);
  }

  // Atualiza o status de uma tarefa específica pelo ID
  public atualizarStatus(id: number, novoStatus: string): void {
    const tarefa = this.tarefas.find((t) => t.getId() === id);

    if (!tarefa) {
      throw new Error(`Tarefa com ID ${id} não encontrada`);
    }

    if (!novoStatus || novoStatus.trim() === '') {
      throw new Error('Status não pode estar vazio');
    }

    tarefa.setStatus(novoStatus);
  }

  // Consulta todas as tarefas de um projeto específico
  public consultarTarefasPorProjeto(projeto: string): Tarefa[] {
    if (!projeto || projeto.trim() === '') {
      throw new Error('Projeto não pode estar vazio');
    }

    const tarefasFiltradas = this.tarefas.filter((t) => t.getProjeto().toLowerCase() === projeto.toLowerCase());

    return tarefasFiltradas;
  }

  // Retorna todas as tarefas do sistema
  public obterTodasTarefas(): Tarefa[] {
    return [...this.tarefas];
  }

  // Retorna o número total de tarefas
  public getTotalTarefas(): number {
    return this.tarefas.length;
  }

  // Remove uma tarefa pelo ID
  public removerTarefa(id: number): void {
    const indice = this.tarefas.findIndex((t) => t.getId() === id);

    if (indice === -1) {
      throw new Error(`Tarefa com ID ${id} não encontrada`);
    }

    this.tarefas.splice(indice, 1);
  }
}
