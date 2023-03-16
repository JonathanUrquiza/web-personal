const dinamico = document.getElementById('dinamico');
const btnver = document.getElementById('btnver');
let servicios = [
    {
        nombre: "Plan básico",
        tipo: "web estático",
        id: 1,
        precio: 34200,
        pormo: "promo 1",
        tiempo: 15,
        cantidad: 3

    },
    {
        nombre: "Plan medio",
        tipo: "web estático",
        id: 2,
        precio: 45600,
        pormo: "promo 2",
        tiempo: 25,
        cantidad: 6

    },
    {
        nombre: "Plan básico",
        tipo: "web dinámico",
        id: 3,
        precio: 34200,
        pormo: "promo 3",
        tiempo: 20,
        cantidad: 3

    },
    {
        nombre: "Plan medio",
        tipo: "web dinámico",
        id: 4,
        precio: 53200,
        pormo: "promo 4",
        tiempo: 25,
        cantidad: 6

    },

]
let basico = servicios[0];
let medio = servicios[1];
///////////funciones//////////////////
function guardarStorage(servicio) {
    return localStorage.setItem('serviCart', JSON.stringify(servicio))
  }

  function crearElemento(elemento) {

   
      let html;
      const { nombre, tipo, precio, tiempo, cantidad } = elemento;
      html =
        `<div class="my-3 p-3">
         <h2>${nombre}</h2>
         <p calass="lead">${tipo}</p> 
         <a class="btn btn-outline-secondary" href="#">${precio}</a>       
         <p><span>${tiempo} Días</span></p>
         <ul class="list-unstyled text-small">
             <li>${cantidad} pestañas</li>
             <li>Diseño de presentación</li>
             <li>Contactos</li>
             <li>Conexion a resdes sociales</li>
             <li>Web responsive</li>
             <li>whatsapp web</li>
             <li>carrousel de fotos y videos</li>
             <li>Google maps</li>
           </ul>
           </div>
           <div class="web bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
                `;
      dinamico.innerHTML += html
  }

  btnver.addEventListener('click', (e) => {
    e.preventDefault();
    dinamico.innerHTML="";
    crearElemento(basico);
    crearElemento(medio)
  })
  
  /* 
medioEstatico = document.getElementById('medioEstatico'),
basicoDinamico = document.getElementById('basicoDinamico'),
medioDinamico = document.getElementById('medioDinamico'),
precio = document.querySelectorAll('span#precio');


console.log(basicoEstatico);
console.log(medioEstatico);
console.log(basicoDinamico);
console.log(medioDinamico);
console.log(precio);

const mDinamico = medioDinamico.innerText;

 */