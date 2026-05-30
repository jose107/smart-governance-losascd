function validarReserva(reserva) {
  if (!reserva.usuario || !reserva.losa || !reserva.fecha || !reserva.hora) {
    return false;
  }

  if (reserva.hora < 8 || reserva.hora > 22) {
    return false;
  }

  return true;
}

function calcularEstadoReserva(disponible) {
  return disponible ? "Disponible" : "No disponible";
}

console.log("Sistema de reservas municipales iniciado correctamente.");

module.exports = {
  validarReserva,
  calcularEstadoReserva
};