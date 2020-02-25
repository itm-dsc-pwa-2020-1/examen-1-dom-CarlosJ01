function estilo(tema) {
    var listaClases = document.querySelector('body').classList;
    switch (tema) {
        case 'Claro':
            listaClases.remove('Oscuro');
            listaClases.add('Claro');
            break;
        case 'Oscuro':
            listaClases.remove('Claro');
            listaClases.add('Oscuro');
            break;
        default:
            break;
    }
}