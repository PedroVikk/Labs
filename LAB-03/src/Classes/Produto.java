package Classes;

public class Produto {
    private String nome;
    private double preco;
    private int quantidade;

    public Produto() {
        this.nome = "Indefinido";
        this.preco = 0.0;
        this.quantidade = 0;
    }

    public Produto(String nome, double preco, int quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public double calcularValorEstoque() {
        return preco * quantidade;
    }

    public int adicionarEstoque(int qtd) {
        this.quantidade += qtd;
        return this.quantidade;
    }
}
