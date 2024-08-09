const fs = require('fs')
const path = require('path')

let exoticData

try {
const exoticJsonPath = path.join(__dirname, '../multibot_repo/exoticobot-md/exotico-imgs.json')
exoticData = JSON.parse(fs.readFileSync(exoticoJsonPath, 'utf8'))
} catch (error) {
console.log('Error leyendo o parseando el archivo JSON:', error)
exoticData = null
}

function getRandomExoticoImgs() {
if (!exoticData) {
console.log('No se pudo leer el archivo JSON.')
return null
}

try {
const randomIndex = Math.floor(Math.random() * exoticData.length)
return exoticData[randomIndex]
} catch (error) {
console.log('Ocurrió un problema al seleccionar una imagen.')
return null
}}

module.exports = getRandomExoticoImgs
