//class DATE del index

export const date = () => {
    const toDay = document.getElementById('toDay');
    const fecha = new Date()
    const year = toDay.innerText = fecha.getFullYear();//Actualizaciones del año en el copy.
    return year
}   
export const reloj = () => {
    setInterval(() => {
        let clock = document.getElementsByClassName('clock')[0];
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        hour < 10? hour = `0${hour}`: `${hour}`
        second < 10? second = `0${second}`: `${second}`
        minute < 10? minute = `0${minute}`: `${minute}`

        clock.innerHTML = `${hour} : ${minute} : ${second}`
    }, 1000);
}
export const dayDate = () => {
    let dateDay = new Date();
    let week = dateDay.getUTCDay()
    return week
}

export const weekDay = (params) => {
    let day = document.getElementsByClassName('day')[0];
    const weekDAys = {
        0:'Domingo',
        1:'Lunes',
        2:'Martes',
        3:'Miércoles',
        4:'Jueves',
        5:'Viernes',
        6:'Sábado'
    }
    if (params === 0) {
        return day.innerHTML= `${weekDAys[0]}`
    } else if (params === 1) {
        return day.innerHTML= `${weekDAys[1]}`
    } else if (params === 2) {
        return day.innerHTML= `${weekDAys[2]}`
    } else if (params === 3) {
        return day.innerHTML= `${weekDAys[3]}`
    } else if (params === 4) {
        return day.innerHTML= `${weekDAys[4]}`
    }   else if (params === 5) {
        return day.innerHTML= `${weekDAys[5]}`
    } else if (params === 6) {
        return day.innerHTML= `${weekDAys[6]}`
    }
}

export const obtenerUbicacion = () => {
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(mostrarUbicacion);
    } else {
        alert("Geolocalización no es soportada por este navegador.");
    }
}

const mostrarUbicacion = (posicion) =>{
    var latitud = posicion.coords.latitude;
    var longitud = posicion.coords.longitude;
    let city = document.getElementsByClassName('city')[0];

    // Realizar una solicitud a OpenStreetMap Nominatim API para obtener información de ubicación inversa
    var url = "https://nominatim.openstreetmap.org/reverse?format=json&lat=" + latitud + "&lon=" + longitud;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Extraer la información de la ciudad de la respuesta JSON
            var ciudad = data.address.city || data.address.town || data.address.village || data.address.hamlet;
            // Mostrar la ciudad en un mensaje
            city.innerHTML = ciudad
        })
        .catch(error => {
            console.error('Error al obtener la ubicación:', error);
            alert("Error al obtener la ubicación.");
        });
}
