import Classes.Calculadora;
import Classes.ContaCorrente;
import Classes.Funcionario;
import Classes.Produto;
import Classes.Retangulo;

public class Main {
    public static void main(String[] args) {
        // Teste Produto
        Produto p = new Produto("Mouse", 50.0, 10);
        System.out.println("Valor estoque: " + p.calcularValorEstoque());
        System.out.println("Nova quantidade: " + p.adicionarEstoque(5));

        // Teste Funcionario
        Funcionario f = new Funcionario("Pedro", 20.0, 160);
        System.out.println("Salário mensal: " + f.calcularSalarioMensal());
        System.out.println("Salário ajustado: " + f.ajustarSalario(10));

        // Teste Retangulo
        Retangulo r = new Retangulo(5, 10);
        System.out.println("Área: " + r.calcularArea());
        System.out.println("Nova área: " + r.aumentarTamanho(7, 12));

        // Teste ContaCorrente
        ContaCorrente c = new ContaCorrente(100.0);
        System.out.println("Saldo atual: " + c.verificarSaldo());
        System.out.println("Saldo após depósito: " + c.depositar(50));

        // Teste Calculadora
        Calculadora calc = new Calculadora();
        System.out.println("Soma: " + calc.somar(10, 20));
        System.out.println("Resultado atual: " + calc.obterResultado());
    }
}