//class DATE del index

export const date = () => {
    const toDay = document.getElementById('toDay'), day = document.getElementById('day');
    const fecha = new Date()
    const year = toDay.innerText = fecha.getFullYear();//Actualizaciones del año en el copy.
    return year
}   
