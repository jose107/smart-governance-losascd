const { validarReserva, calcularEstadoReserva } = require("../src/reservas");

test("Debe validar una reserva correcta", () => {
  const reserva = {
    usuario: "Jose Antonio",
    losa: "Losa Municipal Ate 01",
    fecha: "2026-06-01",
    hora: 18
  };

  expect(validarReserva(reserva)).toBe(true);
});

test("Debe rechazar una reserva incompleta", () => {
  const reserva = {
    usuario: "Jose Antonio",
    losa: "",
    fecha: "2026-06-01",
    hora: 18
  };

  expect(validarReserva(reserva)).toBe(false);
});

test("Debe rechazar una reserva fuera del horario permitido", () => {
  const reserva = {
    usuario: "Jose Antonio",
    losa: "Losa Municipal Ate 01",
    fecha: "2026-06-01",
    hora: 23
  };

  expect(validarReserva(reserva)).toBe(false);
});

test("Debe mostrar el estado disponible", () => {
  expect(calcularEstadoReserva(true)).toBe("Disponible");
});