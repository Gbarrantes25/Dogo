// Importando librería axios
import axios from "axios"

// Creando conexión con el sevidor local
export const api = axios.create({
    baseURL: "https://db-plum.vercel.app/"
})

// Vamos a buscar datos de una función asíncrona
export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
}
