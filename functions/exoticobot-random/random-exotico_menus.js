const fs = require('fs')
const path = require('path')

let exoticoData

try {
const exoticoJsonPath = path.join(__dirname, '../multibot_repo/exoticobot-md/exotico-menus.json')
exoticoData = JSON.parse(fs.readFileSync(exoticoJsonPath, 'utf8'))
} catch (error) {
console.log('Error leyendo o parseando el archivo JSON:', error)
exoticoData = null
}

function getRandomExoticoMenus() {
if (!exoticoData) {
console.log('No se pudo leer el archivo JSON.')
return null
}

try {
const randomIndex = Math.floor(Math.random() * exoticoData.length)
return exoticoData[randomIndex]
} catch (error) {
console.log('Ocurrió un problema al seleccionar una imagen.')
return null
}}

module.exports = getRandomExoticoMenus
