class Livro {
    public String titulo;
    private String autor;
    protected double preco;
    int paginas; 
    
    // Construtor com parâmetros
    public Livro(String titulo, String autor, double preco, int paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
        this.paginas = paginas;
    }

    // Método para exibir detalhes
    public void detalhesDoLivro() {
        System.out.println("--- Detalhes do Livro ---");
        System.out.println("Título: " + this.titulo);
        System.out.println("Autor: " + this.autor);
        System.out.println("Preço: R$" + String.format("%.2f", this.preco));
        System.out.println("Páginas: " + this.paginas);
    }
}