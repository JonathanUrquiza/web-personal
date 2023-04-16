/*Desarrolador: Jonathan Javier Urquiza
año: 12-04-2023*/
//class DATE
const toDay = document.getElementById('toDay'), day =document.getElementById('day');
const fecha = new Date()
toDay.innerText = fecha.getFullYear();//Actualizaciones del año en el copy
day.innerText = fecha.toLocaleDateString();


const btnsubmit = document.getElementById('submit')
const input = document.getElementsByTagName('input');
console.log(btnsubmit);


for(let dato of input) {
    console.log(dato);
}





/* 

console.log(fecha);
console.log(fecha.getFullYear());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleString());

function today(toDay) {
    const date = new Date()
    toDay.innerText = date.getFullYear()
    
} */
