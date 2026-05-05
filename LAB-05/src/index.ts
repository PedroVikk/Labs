import { Funcionario } from "./Funcionario";
import { Empresa } from "./Empresa";

// Função principal que demonstra o uso do sistema
function main(): void {
  console.log("\n========== SISTEMA DE GERENCIAMENTO DE FUNCIONÁRIOS ==========\n");

  try {
    // Criar uma empresa
    const empresa = new Empresa("Tech Solutions Ltda");
    console.log("✓ Empresa criada com sucesso\n");

    // Criar funcionários
    console.log("--- Criando Funcionários ---");
    const funcionario1 = new Funcionario(1001, "João Silva", "Desenvolvedor", 5000);
    const funcionario2 = new Funcionario(
      1002,
      "Maria Santos",
      "Gerente de Projetos",
      7500
    );
    const funcionario3 = new Funcionario(1003, "Carlos Oliveira", "Analista de TI", 5500);

    // Adicionar funcionários à empresa
    empresa.adicionarFuncionario(funcionario1);
    empresa.adicionarFuncionario(funcionario2);
    empresa.adicionarFuncionario(funcionario3);

    // Exibir resumo da empresa
    empresa.exibirResumo();

    // Listar todos os funcionários
    console.log("--- Listagem de Funcionários ---");
    empresa.listarFuncionarios().forEach((func) => {
      console.log(func.toString());
      console.log("");
    });

    // Consultar um funcionário específico
    console.log("--- Consultando Funcionário ---");
    const funcionarioConsultado = empresa.consultarFuncionario(1002);
    if (funcionarioConsultado) {
      console.log(funcionarioConsultado.toString());
    } else {
      console.log("Funcionário não encontrado");
    }
    console.log("");

    // Atualizar salário
    console.log("--- Atualizando Salário ---");
    empresa.atualizarSalario(1001, 5500);
    console.log("");

    // Exibir resumo atualizado
    empresa.exibirResumo();

    // Listar funcionários após atualização
    console.log("--- Funcionários Após Atualização ---");
    empresa.listarFuncionarios().forEach((func) => {
      console.log(func.toString());
      console.log("");
    });

    // Remover um funcionário
    console.log("--- Removendo Funcionário ---");
    empresa.removerFuncionario(1003);
    console.log("");

    // Exibir resumo final
    empresa.exibirResumo();

    console.log("--- Funcionários Restantes ---");
    empresa.listarFuncionarios().forEach((func) => {
      console.log(func.toString());
      console.log("");
    });

  } catch (erro) {
    // Tratamento de erros
    if (erro instanceof Error) {
      console.error(`✗ Erro: ${erro.message}`);
    } else {
      console.error("✗ Erro desconhecido");
    }
  }

  console.log("\n========== FIM DA EXECUÇÃO ==========\n");
}

// Executar a função principal
main();
