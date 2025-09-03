class Cliente {

    protected String nome;
    String cpf; 

    // Construtor sem parâmetros
    public Cliente() {
        this.nome = "Nome não informado";
        this.cpf = "000.000.000-00";
    }

    // Construtor com parâmetros
    public Cliente(String nome, String cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    // Método para exibir dados
    public void exibirDadosCliente() {
        System.out.println("Nome do cliente: " + this.nome);
        System.out.println("CPF: " + this.cpf);
    }
}