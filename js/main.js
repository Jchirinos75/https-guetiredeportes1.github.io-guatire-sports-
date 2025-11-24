// menú móvil
const hamburger = document.getElementById('hamburger');
const nav      = document.getElementById('nav');
hamburger.addEventListener('click',()=> nav.classList.toggle('show'));

// año footer
document.getElementById('year').textContent = new Date().getFullYear();

// datos dummy (reemplazar por llamada fetch a tu CMS)
const torneos = [
  {titulo:"Clausura de Fútbol Sala Guatire 2025",fecha:"15 dic 2025",lugar:"Gimnasio Luis Torcat",img:"img/placeholder-600x400.png"},
  {titulo:"Torneo de Bolas Criollas",fecha:"22 dic 2025",lugar:"Callejón San José",img:"img/placeholder-600x400.png"}
];
const entrevistas = [
  {titulo:"Luis ‘El Pollo’ Ramírez: 20 años defendiendo los colores de Guatire",desc:"Conversamos con el capitán del equipo de fútbol sala que nunca se ha ido.",img:"img/placeholder-600x400.png"},
  {titulo:"Diana Pérez: la primera mujer en ganar el torneo de bolas criollas",desc:"Su historia rompe esquemas en un deporte tradicionalmente masculino.",img:"img/placeholder-600x400.png"}
];
const fotos = Array(8).fill("img/placeholder-600x400.png");

// inyectar tarjetas
function crearTarjeta(item){
  return `
  <div class="card">
    <img src="${item.img}" alt="">
    <div class="card-content">
      <h3>${item.titulo}</h3>
      <p>${item.desc || item.fecha + " - " + item.lugar}</p>
    </div>
  </div>`;
}
document.getElementById('torneos-cards').innerHTML = torneos.map(crearTarjeta).join('');
document.getElementById('entrevistas-cards').innerHTML = entrevistas.map(crearTarjeta).join('');
document.getElementById('gallery').innerHTML = fotos.map(src=>`<img src="${src}" alt="galería">`).join('');
