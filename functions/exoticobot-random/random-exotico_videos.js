const fs = require('fs')
const path = require('path')

let exovideoData

try {
const exovideoJsonPath = path.join(__dirname, '../multibot_repo/exoticobot-md/exotico-videos.json')
exovideoData = JSON.parse(fs.readFileSync(exovideoJsonPath, 'utf8'))
} catch (error) {
console.log('Error leyendo o parseando el archivo JSON:', error)
exovideoData = null
}

function getRandomExoticoVideos() {
if (!exovideoData) {
console.log('No se pudo leer el archivo JSON.')
return null
}

try {
const randomIndex = Math.floor(Math.random() * exovideoData.length)
return exovideoData[randomIndex]
} catch (error) {
console.log('Ocurrió un problema al seleccionar una imagen.')
return null
}}

module.exports = getRandomExoticoVideos
