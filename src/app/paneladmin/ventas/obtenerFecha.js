export const obtenerFecha = (localDate) => {
    const date = new Date(localDate);
    const dia = date.getUTCDate();
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    const mes = meses[date.getUTCMonth()];
    const año = date.getUTCFullYear();
    return `${dia} de ${mes} de ${año}`;
}
