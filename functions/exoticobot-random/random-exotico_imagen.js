const fs = require('fs')
const path = require('path')

let exoticomdData

try {
const boysJsonPath = path.join(__dirname, '../multibot_repo/exoticobot-md/exotico-imagen.json')
exoticomdData = JSON.parse(fs.readFileSync(exoticomdJsonPath, 'utf8'))
} catch (error) {
console.log('Error leyendo o parseando el archivo JSON:', error)
exoticomdData = null
}

function getRandomExoticoImagen() {
if (!exoticomdData) {
console.log('No se pudo leer el archivo JSON.')
return null
}

try {
const randomIndex = Math.floor(Math.random() * exoticomdData.length)
return exoticomdData[randomIndex]
} catch (error) {
console.log('Ocurrió un problema al seleccionar una imagen.')
return null
}}

module.exports = getRandomExoticoImagen
  
