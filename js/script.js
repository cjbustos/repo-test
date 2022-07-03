var title = 'Javascript for Dummies'
document.write('<h1>' + title + '</h1>')

/*          Clase 5          */

function notificarUsuarios(m) {
    const media = ['mail', 'whatsapp', 'instagram']
    function porQueMedio(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log('El medio es: ' + arr[i])
        }
    }
    if (typeof m == 'string') {
        media.push(m)
        porQueMedio(media)
    } else {
        const newMedia = [...m, ...media]
        porQueMedio(newMedia)
    }
}

let array = ['telegram', 'twitter', 'facebook']
notificarUsuarios('twitch')

function addFunction(f) {
    return f()
}

function hello() {
    return 'Hello!'
}

function bye() {
    return 'Bye!'
}

console.log(addFunction(hello))

const self = {
    name: 'Carlos',
    surname: 'Bustos',
    completeNameAndSurname() {
        return this.name + ' ' + this.surname;
    }
}

/*          Clase 6       */

const peliculas = [
    { titulo: "Batman Begins", puntuacion: "90" },
    { titulo: "The Dark Knight", puntuacion: "95" },
    { titulo: "The Dark Kinght Rises", puntuacion: "90" }]

// La función map hace una copia del array original
const titulos = peliculas.map(function (pelicula) {
    return pelicula.titulo + " - " + pelicula.puntuacion + "/100"
})

console.log(peliculas.map((p) => p.titulo + " - " + p.puntuacion + "/100"))
console.log(peliculas.filter((g) => g.puntuacion > 90))

// La función "every" devuelve un valor de verdad al comparar todos los elementos del array
console.log(peliculas.every((p) => p.titulo.length === 5))

// la función "reduce" devuelve un valor
console.log([3, 4, 5, 6, 7, 8].reduce((total, valor) => { return total + valor }))

// Ejemplo con "for of"
arrayScore = [9, 9, 5, 7, 8]
let total = 0
for (let valor of arrayScore) {
    total += valor
}
console.log(total / arrayScore.length)

arrayScore = [9, 9, 5, 7, 8]
const lowerScore = arrayScore.reduce((min, score) => score < min ? score : min)

console.log(lowerScore)

const [first, second, third] = arrayScore

console.log('The first element: ' + first, 'The second element: ' + second, 'The third element: ' + third)

// Se hizo este ejemplo para evaluar qué sucede al no ingresar valor por parámetro
function saludar(nombre = 'sin nombre') {
    return 'Hola ' + nombre
}

console.log(saludar('Carlos'))

// Ejemplos utilizando "Spread Operator"
console.log(Math.max(...arrayScore))

//Se copia el contenido del array
const newArrayOfScores = [...arrayScore, 10]

console.log(newArrayOfScores)

const lastFilm = [{ titulo: "Guason", puntuacion: "99" }]

const updateFilms = [...peliculas, ...lastFilm]

console.log('Merge arrays: ' + updateFilms)
console.log(updateFilms.map((p) => p.titulo + " - " + p.puntuacion + "/100"))

const login = {
    user: 'Carlos',
    password: '1234'
}
// Ejemplos con utilizando "Destructuring Object"
const { user, password } = login

console.log('El usuario es: ' + user, 'La password es: ' + password)

/*          Clase 7       */
/* DOM -> a través del DOM interactuamos con la web */
console.log(document.getElementById('title'))

const mainTitle = document.getElementById('title')

const allLinks = document.getElementsByTagName('p')

console.log(allLinks)

mainTitle.innerText = 'New title'

const aLinks = document.querySelectorAll('a')

for (let link of aLinks) {
    link.innerText = 'linkWithChanges'
    link.style.textDecorationColor = 'crimson'
}

//querySelector nos permite seleccionar un elemento del DOM
let firstLink = document.querySelector('a')
firstLink.innerText = 'the first link of document'
firstLink.style.color = 'red'
firstLink.style.textDecorationColor = 'blue'

const allHref = document.getElementsByTagName('a')
for (let a of allHref) {
    a.href = 'http://www.google.com'
}

console.log(firstLink.getAttribute('href'))
firstLink.setAttribute('href', 'http://www.clarin.com.ar')

const btn = document.querySelector('#b1')

btn.onclick = function () {
    console.log('Click me!')
}

btn.addEventListener('click', foo)
btn.addEventListener('mouseenter', other)

function foo() {
    console.log('foo function...')
}

function other() {
    console.log('other foo function...')
}

/*          Clase 8       */
//CALL STACK Y ASINCRONIA EN JS
const multiplicar = (x, y) => x * y

const cuadrado = (x) => multiplicar(x, x)

const trianguloCorrecto = (a, b, c) => {
    return cuadrado(a) + cuadrado(b) === cuadrado(c)
}

trianguloCorrecto(3, 4, 5)

console.log('Comienza a ejecutar:')
//JS es Single Thead pero podría delegar en el Browser para trabajar en forma simultánea
setTimeout(() => {
    console.log('Ejecutando...')
}, 3000)

console.log('Termina de ejecutar:')

