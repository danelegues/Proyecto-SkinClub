// Función para actualizar la posición del marcador
const $marker = document.querySelector('.marker');
const $menuList = document.querySelectorAll('.menu-list li'); 

function setMarkerPosition($li) {
    $marker.style.left = $li.offsetLeft + 'px';
    $marker.style.width = $li.offsetWidth + 'px';
}

document.addEventListener('DOMContentLoaded', () => {
    const $activeItem = document.querySelector('.menu-list .active');
    if ($activeItem) {
        setMarkerPosition($activeItem);
    }
});

$menuList.forEach(($li) => {
    $li.addEventListener('mousemove', () => {
        setMarkerPosition($li);
        document.querySelector('.active')?.classList.remove('active');
        $li.classList.add('active');
    });
});

// Datos de las cajas
const cajasJSON = [
    {id: "caja1", nombre: "Caja Lore", imagenCaja: "../img/CAJA 1_preview_rev_1.png", descripcion: "caja 1."},
    {id: "caja2", nombre: "Caja Lore", imagenCaja: "../img/CAJA2_preview_rev_1.png", descripcion: "caja 2."},
    {id: "caja3", nombre: "Caja Discord", imagenCaja: "../img/CAJA 3_preview_rev_1.png", descripcion: "caja Discord."},
    {id: "caja4", nombre: "Caja 4", imagenCaja: "../img/CAJA 4_preview_rev_1.png", descripcion: "caja 4."},
    {id: "caja5", nombre: "Caja 5", imagenCaja: "../img/descarga (2)-fotor-bg-remover-2024100313255.png", descripcion: "caja 5."},
    {id: "caja6", nombre: "Caja 6", imagenCaja: "../img/descarga (3)-fotor-bg-remover-202410031336.png", descripcion: "caja 6."}
];

// Función para mostrar la información de la caja
function mostrarInfoCaja(cajaId) {
    const caja = cajasJSON.find(caja => caja.id === cajaId);
    if (caja) {
        document.getElementById('popup-titulo').innerText = caja.nombre;
        document.getElementById('popup-descripcion').innerText = caja.descripcion;
        document.getElementById('popup-imagen').src = caja.imagenCaja;
        document.getElementById('popup').style.display = 'flex';
    }
}
function mostrarInfoUser() {
    let userEmail = '';
    let nombreUser = '';
    let descripcion = ''; 

        userEmail = "user@gmail.com"
        nombreUser = 'User3284723';
        descripcion = 'caja 1.';

    // Mostrar el contenido en el pop-up
    document.getElementById('popup-Username').innerText = nombreUser;
    document.getElementById('userEmail').innerText = userEmail;

    document.getElementById('popup2').style.display = 'flex';
}

// Evento para mostrar información de la caja al hacer clic
document.querySelectorAll('.menu-list li').forEach($li => {
    $li.addEventListener('click', () => {
        const cajaId = $li.getAttribute('data-caja-id');  // Asegúrate de agregar el atributo data-caja-id en los elementos de la lista
        mostrarInfoCaja(cajaId);
    });
});

// Función para ocultar el pop-up
function ocultarPopup(event) {
    event.stopPropagation(); 
    document.getElementById('popup').style.display = 'none';
}

function ocultarPopup2(event) {
    event.stopPropagation(); 
    document.getElementById('popup2').style.display = 'none';
}


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        ocultarPopup(event);
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        ocultarPopup2(event);
    }
});
