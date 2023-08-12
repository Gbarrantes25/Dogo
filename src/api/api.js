// Importando librería axios
import axios from "axios"

// Creando conexión con el sevidor local
export const api = axios.create({
    baseURL: "http://localhost:8000"
})

// Vamos a buscar datos de una función asíncrona
export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
}