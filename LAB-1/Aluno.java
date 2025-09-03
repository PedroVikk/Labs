class Aluno {
    protected String nome;
    private int idade;
    public String matricula;
    String curso; 

    // Construtor sem parâmetros
    public Aluno() {
        this.nome = "Nome não informado";
        this.idade = 0;
        this.matricula = "000000";
        this.curso = "Curso não informado";
    }

    // Construtor com parâmetros
    public Aluno(String nome, int idade, String matricula, String curso) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
        this.curso = curso;
    }

    // Método para exibir informações
    public void exibirInformacoes() {
        System.out.println("--- Informações do Aluno ---");
        System.out.println("Nome: " + this.nome);
        System.out.println("Idade: " + this.idade);
        System.out.println("Matrícula: " + this.matricula);
        System.out.println("Curso: " + this.curso);
    }
}