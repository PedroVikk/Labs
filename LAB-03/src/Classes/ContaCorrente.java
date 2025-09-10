package Classes;

public class ContaCorrente {
    private double saldo;

    public ContaCorrente() {
        this.saldo = 0.0;
    }

    public ContaCorrente(double saldoInicial) {
        this.saldo = saldoInicial;
    }

    public double verificarSaldo() {
        return saldo;
    }

    public double depositar(double valor) {
        this.saldo += valor;
        return this.saldo;
    }
}
