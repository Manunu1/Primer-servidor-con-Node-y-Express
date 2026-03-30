function getDate () 
{
    const hora = new Date();

    const horas = hora.getHours();
    const minutos = hora.getMinutes();
    const segundos = hora.getSeconds();

    return `${horas}: ${minutos}: ${segundos}`
}

function FechaCompleta () 
{
    const hoy = new Date();
    return hoy.toLocaleString('es-AR');
}

export default {getDate, FechaCompleta};