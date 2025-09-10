package Classes;

public class Retangulo {
    private double largura;
    private double altura;

    public Retangulo() {
        this.largura = 0.0;
        this.altura = 0.0;
    }

    public Retangulo(double largura, double altura) {
        this.largura = largura;
        this.altura = altura;
    }

    public double calcularArea() {
        return largura * altura;
    }

    public double aumentarTamanho(double novaLargura, double novaAltura) {
        this.largura = novaLargura;
        this.altura = novaAltura;
        return calcularArea();
    }
}
