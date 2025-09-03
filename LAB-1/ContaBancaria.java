class ContaBancaria {

    public String numeroConta;
    private double saldo;

    public ContaBancaria() {
        this.numeroConta = "000-0";
        this.saldo = 0.0;
    }
    public ContaBancaria(String numeroConta, double saldo) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    // Método para exibir saldo
    public void exibirSaldo() {
        System.out.println("Saldo da conta " + this.numeroConta + ": R$" + String.format("%.2f", this.saldo));
    }
}