const $marker = document.querySelector('.marker');
const $menuList = document.querySelectorAll('.menu-list li'); 

// Función para actualizar la posición del marcador
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

// Mostrar información de la caja al hacer clic
function mostrarInfoCaja(caja) {
    let imagenCaja = '';
    let titulo = '';
    let descripcion = ''; 

    if (caja === 'caja1') {
        imagenCaja = '../img/CAJA 1_preview_rev_1.png'; 
        titulo = 'Caja Lore';
        descripcion = 'caja 1.';
    } else if (caja === 'caja2') {
        imagenCaja = '../img/CAJA2_preview_rev_1.png'; 
        titulo = 'Caja Lore';
        descripcion = 'caja 2.';
    } else if (caja === 'caja3') {
        imagenCaja = '../img/CAJA 3_preview_rev_1.png'; 
        titulo = 'Caja Discord';
        descripcion = 'caja Discord.';
    } else if (caja === 'caja4') {
        imagenCaja = '../img/CAJA 4_preview_rev_1.png'; 
        titulo = 'Caja 4';
        descripcion = 'caja 4.';
    } else if (caja === 'caja5') {
        imagenCaja = '../img/descarga (2)-fotor-bg-remover-2024100313255.png'; 
        titulo = 'Caja 5';
        descripcion = 'caja 5.';
    } else if (caja === 'caja6') {
        imagenCaja = '../img/descarga (3)-fotor-bg-remover-202410031336.png'; 
        titulo = 'Caja 6';
        descripcion = 'caja 6.';
    }

    // Mostrar el contenido en el pop-up
    document.getElementById('popup-titulo').innerText = titulo;
    document.getElementById('popup-descripcion').innerText = descripcion;
    document.getElementById('popup-imagen').src = imagenCaja; 
    document.getElementById('popup').style.display = 'flex';
}

// Función para ocultar el pop-up
function ocultarPopup(event) {
    event.stopPropagation(); 
    document.getElementById('popup').style.display = 'none';
}

// Cerrar el pop-up al presionar "Escape"
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        ocultarPopup(event);
    }
});
