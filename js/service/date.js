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