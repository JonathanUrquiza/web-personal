//class DATE del index

export const date = () => {
    const toDay = document.getElementById('toDay');
    const fecha = new Date()
    const year = toDay.innerText = fecha.getFullYear();//Actualizaciones del año en el copy.
    return year
}   
