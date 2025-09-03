class Carro {
    public String marca;
    protected String modelo;
    int ano; 
    private double preco;
    // Exercício 1: Construtor sem parâmetros
    public Carro() {
        this.marca = "Não informada";
        this.modelo = "Não informado";
        this.ano = 0;
        this.preco = 0.0;
    }

    // Exercício 2: Construtor com parâmetros
    public Carro(String marca, String modelo, int ano, double preco) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.preco = preco;
    }

    // Método para exibir detalhes
    public void exibirDetalhes() {
        System.out.println("--- Detalhes do Carro ---");
        System.out.println("Marca: " + this.marca);
        System.out.println("Modelo: " + this.modelo);
        System.out.println("Ano: " + this.ano);
        System.out.println("Preço: R$" + String.format("%.2f", this.preco));
    }
}