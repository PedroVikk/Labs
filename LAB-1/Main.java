public class Main {
    public static void main(String[] args) {
        // Exercício 1 e 2
        System.out.println("--- Exercício 1 e 2 ---");
        Carro carro1 = new Carro("Honda", "Civic", 2023, 140000.00);
        carro1.exibirDetalhes();
        System.out.println();

        // Exercício 3
        System.out.println("--- Exercício 3 ---");
        Livro livro1 = new Livro("A Arte da Guerra", "", 35.50, 272);
        livro1.detalhesDoLivro();
        System.out.println();

        // Exercício 4
        System.out.println("--- Exercício 4 ---");
        Aluno aluno1 = new Aluno("Maria Oliveira", 21, "20220101", "Engenharia de Software");
        aluno1.exibirInformacoes();
        System.out.println();

        // Exercício 5
        System.out.println("--- Exercício 5 ---");
        ContaBancaria conta1 = new ContaBancaria("12345-6",
         5000.75);
        Cliente cliente1 = new Cliente("João Silva", "123.456.789-00");
        conta1.exibirSaldo();
        cliente1.exibirDadosCliente();
    }

}
