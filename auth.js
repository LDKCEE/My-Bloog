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
    console.log(datos)
    //aceder a los datos
    const usuario = datos.usuario;
    const contraseña = datos.contraseña;
    //aqui  puodems utilixar las variables usuario y contraseña
    console.log(usuario, contraseña)
})
.catch(error => {
    console.error('hubo un problema con la operacion fetch.', error)
})
//difinir un objeto con usuario y su clave
const user = { 'frontend@gmai.com': '1234', };
//Verificar se el usuario ya esta autenticado(verificado)
if (localStorage.getItem('estaAutenticado') === 'true') { window.location.href = 'blog.html' };
//manejar los  parametros de la URL para autentacion 
const queryParametros = new URLSearchParams(window.location.search);
const email = queryParametros.get('email');
const password = queryParametros.get('password');
//SI hay valores de correo y contraseña en el URL
if (email && password) {
    if (user[email] && user[email] === password) {
        localStorage.setItem('estaAutenticado', 'true');
        window.location.href = 'blog.html';
    } else {
        localStorage.removeItem('estaAutenticado');
        alert('Por favor vuelve a intentarlo de nuevo')
        window.location.href = 'login.html';
    }
}
