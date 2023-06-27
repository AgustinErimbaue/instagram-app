import Usuario from "../data/Usuario"

const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    resolve(Usuario)
  })
}

export default pedirDatos