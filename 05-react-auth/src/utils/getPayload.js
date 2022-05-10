export default function (token) {
  // Obtener el token del LocalStorage del navegador
  // const token = window.localStorage.getItem('token')

  if (token) {
    // Extraer el payload del Token
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzMzMzc1ZmIzNjU2MDAxNzZkN2NjZSIsInJvbGUiOiJDVVNUT01FUiIsImV4cCI6MTY1MTgwMzQ0NCwiaWF0IjoxNjUxNzE3MDQ0fQ.aT6Kb30St9lD5Vyivdeo0XgEHbSMjaHluUrUPmxxS3Y
    // eslint-disable-next-line no-unused-vars
    const [header, payload, signature] = token.split('.')

    // Blindar el payload al reemplazar caracteres basura que a veces se meten
    const base64 = payload.replace('-', '+').replace('_', '/')

    // atob convierte Base64 a String
    // JSON.parse convierte de String en JSON a Objeto de JavaScript
    const payloadObject = JSON.parse(window.atob(base64))
    return payloadObject
  } else {
    return null
  }
}
