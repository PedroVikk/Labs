import Reserva from "./Reserva";
import Hotel from "./Hotel";

const hotel = new Hotel();

console.log("=== SISTEMA DE RESERVAS DE HOTEL ===\n");

// Criar e registrar reservas
const reserva1 = new Reserva(101, "João Silva", new Date(2026, 4, 10), new Date(2026, 4, 15));
const reserva2 = new Reserva(
  205,
  "Maria Santos",
  new Date(2026, 4, 12),
  new Date(2026, 4, 18)
);
const reserva3 = new Reserva(
  308,
  "Pedro Oliveira",
  new Date(2026, 5, 1),
  new Date(2026, 5, 5)
);

console.log("--- Registrando Reservas ---");
try {
  hotel.registrarReserva(reserva1);
  hotel.registrarReserva(reserva2);
  hotel.registrarReserva(reserva3);
} catch (erro) {
  if (erro instanceof Error) {
    console.log(erro.message);
  }
}

console.log("\n--- Consultando Status dos Quartos ---");
console.log(hotel.consultarStatusQuarto(101));
console.log(hotel.consultarStatusQuarto(205));
console.log(hotel.consultarStatusQuarto(308));
console.log(hotel.consultarStatusQuarto(402)); // Quarto sem reserva

console.log("\n--- Tentando registrar reserva duplicada ---");
try {
  const reservaDuplicada = new Reserva(101, "Ana Costa", new Date(2026, 4, 20), new Date(2026, 4, 25));
  hotel.registrarReserva(reservaDuplicada);
} catch (erro) {
  if (erro instanceof Error) {
    console.log(erro.message);
  }
}

console.log("\n--- Cancelando uma Reserva ---");
try {
  hotel.cancelarReserva(205);
} catch (erro) {
  if (erro instanceof Error) {
    console.log(erro.message);
  }
}

console.log("\n--- Status após cancelamento ---");
console.log(hotel.consultarStatusQuarto(205)); // Agora deve estar disponível

console.log("\n--- Tentando cancelar reserva inexistente ---");
try {
  hotel.cancelarReserva(999);
} catch (erro) {
  if (erro instanceof Error) {
    console.log(erro.message);
  }
}

console.log("\n--- Status Final dos Quartos ---");
console.log(hotel.consultarStatusQuarto(101));
console.log(hotel.consultarStatusQuarto(205));
console.log(hotel.consultarStatusQuarto(308));
console.log(hotel.consultarStatusQuarto(402));
