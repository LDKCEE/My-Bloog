//manejar los  parametros de la URL para autentacion 
const queryParametros = new URLSearchParams(window.location.search);
const email = queryParametros.get('email');
const password = queryParametros.get('password');

console.log(`email:${email}`);
console.log(`contraseña:${password}`);

//Verificar se el usuario ya esta autenticado(verificado)
if (localStorage.getItem('estaAutenticado') === 'true') { window.location.href = 'blog.html' };


// ruta al archivo JSON
const rutaJSON = 'user.json';
//finction para leer el archivom JSON
fetch(rutaJSON)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al carga el archivo JSON');
        }
        return response.json();
    })
    .then(datos => {
        console.log(datos);
        //Verificamos si el usaurio y la contraseña existen en los datos del JSON
        const usuarioEncontrado = datos.find(usuario => usuario.usuario === email && usuario.contraseña === password);

        if (usuarioEncontrado) {
                localStorage.setItem('estaAutenticado', 'true');
            alert(`Usuario ${email} HAS SIDO RECONOCIDO.`);
            window.location.href = 'blog.html';

        } else {
            localStorage.removeItem('estaAutenticado');
            alert(`Usuario ${email} NO ENCONTARDO.`);
            window.location.href = 'login.html';
        }


    })

    .catch(error => {
        console.error('hubo un problema con la operacion fetch.', error);
    });



