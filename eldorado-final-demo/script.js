const bookingSubmit = document.querySelector("#bookingSubmit");
const arrival = document.querySelector("#arrival");
const departure = document.querySelector("#departure");
const guests = document.querySelector("#guests");
const roomType = document.querySelector("#roomType");

const buildBookingMessage = () => {
  const parts = [
    "Hola Hotel Eldorado, quiero consultar disponibilidad.",
    `Entrada: ${arrival.value || "a confirmar"}`,
    `Salida: ${departure.value || "a confirmar"}`,
    `Huespedes: ${guests.value}`,
    `Habitacion: ${roomType.value}`,
  ];

  return `https://api.whatsapp.com/send?phone=59898414641&text=${encodeURIComponent(parts.join("\n"))}`;
};

bookingSubmit.addEventListener("click", () => {
  bookingSubmit.href = buildBookingMessage();
});
