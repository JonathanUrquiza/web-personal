//class DATE
const toDay = document.getElementById('toDay'), day = document.getElementById('day');
const fecha = new Date()
const productos = document.getElementById('productos')
const btnEstaticos = document.getElementById('btnEstaticos');
const btnDinamicos = document.getElementById('btnDinamicos');
const contenido = document.getElementById('contenido');
toDay.innerText = fecha.getFullYear();//Actualizaciones del año en el copy
//Recopilación de datos del formulario.
/* const form = document.querySelectorAll('input'); */

//siempre que allamos acceddido al nodo
contenido.innerHTML = "<h1>Desarrollo web</h1>";//interpreta la etiqueta
contenido.className = "contenido";//agrega la clase

fetch('./data/data.json')
    .then(res => res.json())
    .then(datos => {
        console.log(datos);

        btnEstaticos.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("estáticos");
            contenido.innerHTML="";
            crearHtml(datos);
        })
    })



fetch('./data/data2.json')
    .then(res => res.json())
    .then(datos2 => {
        console.log(datos2);

        btnDinamicos.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("Dinámicos");
            contenido.innerHTML="";
            crearHtml(datos2);
        })
    })



function crearHtml(array) {
    for (const item of array) {

        let card = "";
        //destructuring
        const { nombre, tipo, precio,id, tiempo, cantidad } = item;
        card =
            `
            
            <article class=" me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden card">
            <div class="my-3 py-3" id="medioEstatico">
              <h2 class="display-5" id="planMedio">${nombre}</h2>
              <p class="lead" id="tipoEstatico">${tipo}</p>
              <a class="btn btn-outline-secondary btnBuy" id="2" href="#">${precio}</a>
              <p class="lead"><span>único pago</span></p>
              <p class="lead"><span>${tiempo}</span></p>
              <ul class="list-unstyled text-small">
                <li>${cantidad} pestañas</li>
                <li>Diseño de presentación</li>
                <li>Contactos</li>
                <li>Conexion a resdes sociales</li>
                <li>Web responsive</li>
                <li>whatsapp web</li>
                <li>Galeria de fotos y videos</li>
                <li>Google maps</li>
              </ul>
              
            </div>
            <div class="web bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
            </div>
          </article>
    
              `;
        contenido.innerHTML += card;
        
        const arrayBotones = document.querySelectorAll(".btnAdd");
        
        arrayBotones.forEach((btnAdd) => {
            btnAdd.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('click');
                console.log(item);
                
                
                
                //guaradarElemento(local);//quizas entre llaves y puntos, desparramando
                //concatenar arrays
            })
        })
        
    }
}