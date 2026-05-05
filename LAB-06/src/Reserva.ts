class Reserva {
  public numeroQuarto: number;
  public nomeHospede: string;
  public dataEntrada: Date;
  public dataSaida: Date;

  constructor(
    numeroQuarto: number,
    nomeHospede: string,
    dataEntrada: Date,
    dataSaida: Date
  ) {
    this.numeroQuarto = numeroQuarto;
    this.nomeHospede = nomeHospede;
    this.dataEntrada = dataEntrada;
    this.dataSaida = dataSaida;
  }
}

export default Reserva;
