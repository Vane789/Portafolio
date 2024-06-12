// Lógica para descargar archivo CV

function descargarArchivo(event) {
    event.preventDefault();
    const a = document.createElement('a');
    a.href = './docs/CV-HojaDeVida-AnllyCardona.pdf';
    a.download = 'CV-HojaDeVida-AnllyCardona.pdf';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-download')) {
        descargarArchivo(event);
    }
});
