import { Biblioteca } from "./Biblioteca";
import { Livro } from "./Livro";

/**
 * Função principal que demonstra o funcionamento do sistema de gerenciamento de biblioteca
 */
function main(): void {
  console.log("===================================================");
  console.log("   SISTEMA DE GERENCIAMENTO DE BIBLIOTECA");
  console.log("===================================================\n");

  try {
    // Criar instância da biblioteca
    const biblioteca = new Biblioteca();

    // Criar livros
    console.log("Criando livros...\n");
    const livro1 = new Livro(
      1,
      "Clean Code",
      "Robert C. Martin"
    );
    const livro2 = new Livro(
      2,
      "Design Patterns",
      "Gang of Four"
    );
    const livro3 = new Livro(
      3,
      "The Pragmatic Programmer",
      "David Thomas & Andrew Hunt"
    );

    // Adicionar livros ao acervo
    console.log("Adicionando livros ao acervo...\n");
    biblioteca.adicionarLivro(livro1);
    biblioteca.adicionarLivro(livro2);
    biblioteca.adicionarLivro(livro3);

    // Exibir acervo
    biblioteca.listarAcervo();

    // Exibir estatísticas iniciais
    console.log("ESTATISTICAS:");
    console.log(`   Total de livros: ${biblioteca.getTotalLivros()}`);
    console.log(`   Livros disponíveis: ${biblioteca.getTotalDisponivel()}`);
    console.log(`   Livros emprestados: ${biblioteca.getTotalEmprestados()}\n`);

    // Consultar disponibilidade de um livro
    console.log("CONSULTANDO DISPONIBILIDADE:");
    const codigoConsulta = 1;
    const disponivel = biblioteca.consultarDisponibilidade(codigoConsulta);
    console.log(
      `   Livro codigo ${codigoConsulta}: ${disponivel ? "Disponivel" : "Emprestado"}\n`
    );

    // Registrar empréstimo
    console.log("REALIZANDO EMPRESTIMO:");
    biblioteca.registrarEmprestimo(1);
    console.log();

    // Exibir acervo após empréstimo
    biblioteca.listarAcervo();

    // Exibir estatísticas após empréstimo
    console.log("ESTATISTICAS APOS EMPRESTIMO:");
    console.log(`   Total de livros: ${biblioteca.getTotalLivros()}`);
    console.log(`   Livros disponíveis: ${biblioteca.getTotalDisponivel()}`);
    console.log(`   Livros emprestados: ${biblioteca.getTotalEmprestados()}\n`);

    // Tentar emprestar o mesmo livro novamente (deve gerar erro)
    console.log("TESTE DE ERRO - Tentando emprestar livro ja emprestado:");
    try {
      biblioteca.registrarEmprestimo(1);
    } catch (erro) {
      if (erro instanceof Error) {
        console.log(`   Erro capturado: ${erro.message}\n`);
      }
    }

    // Registrar devolução
    console.log("REGISTRANDO DEVOLUCAO:");
    biblioteca.registrarDevolucao(1);
    console.log();

    // Exibir acervo final
    biblioteca.listarAcervo();

    // Teste com livro inexistente
    console.log("TESTE DE ERRO - Consultando livro inexistente:");
    try {
      biblioteca.consultarDisponibilidade(999);
    } catch (erro) {
      if (erro instanceof Error) {
        console.log(`   Erro capturado: ${erro.message}\n`);
      }
    }

    // Teste com código duplicado
    console.log("TESTE DE ERRO - Adicionando livro com codigo duplicado:");
    try {
      const livroRepetido = new Livro(1, "Outro Livro", "Outro Autor");
      biblioteca.adicionarLivro(livroRepetido);
    } catch (erro) {
      if (erro instanceof Error) {
        console.log(`   Erro capturado: ${erro.message}\n`);
      }
    }

    // Exibir estatísticas finais
    console.log("ESTATISTICAS FINAIS:");
    console.log(`   Total de livros: ${biblioteca.getTotalLivros()}`);
    console.log(`   Livros disponíveis: ${biblioteca.getTotalDisponivel()}`);
    console.log(`   Livros emprestados: ${biblioteca.getTotalEmprestados()}\n`);

    console.log("===================================================");
    console.log("   FIM DO PROGRAMA");
    console.log("===================================================");
  } catch (erro) {
    console.error("Erro inesperado:", erro);
    process.exit(1);
  }
}

// Executar a função principal
main();
