const dinamico = document.getElementById('dinamico');

function pedirServicios(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(arr)
    }, 2500);
  });
}


let productos= [];


const renderServiciosEstatico = (arr) => {
  let html;
  dinamico.innerHTML="";
  for (const item of arr) {
    const {nombre, tipo, precio, tiempo, cantidad} = item;
    html=`
    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" id="estatico">
    <div class="my-3 py-3">
      <h2 class="display-5">${nombre}</h2>
      <p class="lead">${tipo}</p>
      <a class="btn btn-outline-secondary" href="#">$34200</a>
      <p><span>único pago de ${precio}</span></p>
      <p><span>${tiempo}</span></p>
      <ul class="list-unstyled text-small">
      <li>${cantidad}</li>
      <li>Diseño de presentación</li>
      <li>Contactos</li>
      <li>Conexion a resdes sociales</li>
      <li>Web responsive</li>
      <li>whatsapp web</li>
    </ul>
      </div>
      <div class="web bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
        </div>
    `;
    dinamico.innerHTML+= html;

  }
}

/* pedirServicios(servicios)
.then((res)=> {
  productos = res;
  renderServiciosEstatico(productos)
});
 */
fetch('../data/data.json')
.then((response)=>response.json())
.then((data)=>{
  
  console.log(data);
   data.forEach(post => {
    const li = document.createElement('li');
    li.className='card';
    li.innerHTML=`
    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" id="estatico">
    <div class="my-3 py-3">
      <h2 class="display-5">${post.nombre}</h2>
      <p class="lead">${post.tipo}</p>
      <a class="btn btn-outline-secondary" href="#">$34200</a>
      <p><span>único pago de ${post.precio}</span></p>
      <p><span>${post.tiempo}</span></p>
      <ul class="list-unstyled text-small">
      <li>${post.cantidad}</li>
      <li>Diseño de presentación</li>
      <li>Contactos</li>
      <li>Conexion a resdes sociales</li>
      <li>Web responsive</li>
      <li>whatsapp web</li>
    </ul>
      </div>
      <div class="web bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
        </div>`;
    dinamico.appendChild(li)
  });

})
