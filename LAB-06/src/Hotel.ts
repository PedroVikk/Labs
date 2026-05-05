import Reserva from "./Reserva";

class Hotel {
  private reservas: Reserva[] = [];

  registrarReserva(reserva: Reserva): void {
    const quartoJaReservado = this.reservas.some(
      (r) => r.numeroQuarto === reserva.numeroQuarto
    );

    if (quartoJaReservado) {
      throw new Error(
        `Erro: O quarto ${reserva.numeroQuarto} já possui uma reserva ativa.`
      );
    }

    this.reservas.push(reserva);
    console.log(
      `✓ Reserva registrada com sucesso para ${reserva.nomeHospede} no quarto ${reserva.numeroQuarto}`
    );
  }

  cancelarReserva(numeroQuarto: number): void {
    const indice = this.reservas.findIndex(
      (r) => r.numeroQuarto === numeroQuarto
    );

    if (indice === -1) {
      throw new Error(
        `Erro: Nenhuma reserva encontrada para o quarto ${numeroQuarto}.`
      );
    }

    const reservaCancelada = this.reservas[indice];
    this.reservas.splice(indice, 1);
    console.log(
      `✓ Reserva cancelada com sucesso. Hóspede: ${reservaCancelada.nomeHospede}, Quarto: ${numeroQuarto}`
    );
  }

  consultarStatusQuarto(numeroQuarto: number): string {
    const reserva = this.reservas.find((r) => r.numeroQuarto === numeroQuarto);

    if (!reserva) {
      return `Quarto ${numeroQuarto}: DISPONÍVEL`;
    }

    const dataEntrada = reserva.dataEntrada.toLocaleDateString("pt-BR");
    const dataSaida = reserva.dataSaida.toLocaleDateString("pt-BR");
    return `Quarto ${numeroQuarto}: RESERVADO | Hóspede: ${reserva.nomeHospede} | Entrada: ${dataEntrada} | Saída: ${dataSaida}`;
  }
}

export default Hotel;
