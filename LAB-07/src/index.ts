import { Tarefa } from './Tarefa';
import { GestorTarefas } from './GestorTarefas';

// Função principal que executa o sistema de gestão de tarefas
function main(): void {
  console.log('==== SISTEMA DE GESTÃO DE TAREFAS ====\n');

  // Cria uma instância do gestor de tarefas
  const gestor = new GestorTarefas();

  // Cria 3 tarefas de exemplo
  const tarefa1 = new Tarefa(1, 'Implementar autenticação', 'em progresso', 'Website');
  const tarefa2 = new Tarefa(2, 'Corrigir bug de login', 'concluída', 'Website');
  const tarefa3 = new Tarefa(3, 'Documentar API', 'pendente', 'Backend');
  const tarefa4 = new Tarefa(4, 'Criar dashboard de analytics', 'em progresso', 'Dashboard');
  const tarefa5 = new Tarefa(5, 'Testes unitários', 'pendente', 'Backend');

  // Adiciona as tarefas ao gestor
  console.log('1. ADICIONANDO TAREFAS AO SISTEMA:\n');
  try {
    gestor.adicionarTarefa(tarefa1);
    console.log('✓ Tarefa 1 adicionada');
    gestor.adicionarTarefa(tarefa2);
    console.log('✓ Tarefa 2 adicionada');
    gestor.adicionarTarefa(tarefa3);
    console.log('✓ Tarefa 3 adicionada');
    gestor.adicionarTarefa(tarefa4);
    console.log('✓ Tarefa 4 adicionada');
    gestor.adicionarTarefa(tarefa5);
    console.log('✓ Tarefa 5 adicionada');
    console.log(`\nTotal de tarefas: ${gestor.getTotalTarefas()}\n`);
  } catch (erro) {
    console.error(`Erro ao adicionar tarefa: ${erro}`);
  }

  // Exibe todas as tarefas
  console.log('2. LISTANDO TODAS AS TAREFAS:\n');
  const todasTarefas = gestor.obterTodasTarefas();
  todasTarefas.forEach((tarefa) => {
    console.log(`   ${tarefa.toString()}`);
  });

  // Atualiza o status de uma tarefa
  console.log('\n3. ATUALIZANDO STATUS DA TAREFA:\n');
  try {
    console.log('Atualizando Tarefa ID 1 para status "concluída"...');
    gestor.atualizarStatus(1, 'concluída');
    console.log('✓ Status atualizado com sucesso');
  } catch (erro) {
    console.error(`Erro ao atualizar status: ${erro}`);
  }

  // Consulta tarefas por projeto
  console.log('\n4. CONSULTANDO TAREFAS POR PROJETO:\n');

  const projetosParaConsultar = ['Website', 'Backend', 'Dashboard'];

  projetosParaConsultar.forEach((projeto) => {
    try {
      console.log(`   Tarefas do projeto "${projeto}":`);
      const tarefasProjeto = gestor.consultarTarefasPorProjeto(projeto);

      if (tarefasProjeto.length === 0) {
        console.log(`   - Nenhuma tarefa encontrada para o projeto "${projeto}"`);
      } else {
        tarefasProjeto.forEach((tarefa) => {
          console.log(`   - ${tarefa.toString()}`);
        });
      }
      console.log();
    } catch (erro) {
      console.error(`Erro ao consultar tarefas: ${erro}`);
    }
  });

  // Demonstra tratamento de erros
  console.log('5. DEMONSTRANDO TRATAMENTO DE ERROS:\n');

  // Tenta adicionar tarefa duplicada
  try {
    console.log('Tentando adicionar tarefa com ID duplicado...');
    const tarefaDuplicada = new Tarefa(1, 'Descrição', 'pendente', 'Projeto');
    gestor.adicionarTarefa(tarefaDuplicada);
  } catch (erro) {
    console.log(`   ✗ Erro capturado: ${erro}\n`);
  }

  // Tenta atualizar tarefa inexistente
  try {
    console.log('Tentando atualizar tarefa que não existe (ID 999)...');
    gestor.atualizarStatus(999, 'concluída');
  } catch (erro) {
    console.log(`   ✗ Erro capturado: ${erro}\n`);
  }

  // Tenta consultar projeto vazio
  try {
    console.log('Tentando consultar projeto com string vazia...');
    gestor.consultarTarefasPorProjeto('');
  } catch (erro) {
    console.log(`   ✗ Erro capturado: ${erro}\n`);
  }

  // Resumo final
  console.log('6. RESUMO FINAL:\n');
  console.log(`Total de tarefas no sistema: ${gestor.getTotalTarefas()}`);
  console.log('\n==== FIM DO PROGRAMA ====');
}

// Executa a função principal
main();
