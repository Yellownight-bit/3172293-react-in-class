// URL base del endpoint de usuarios en el backend
// En desarrollo apunta al servidor Express local
// En produccion deberia provenir de variables de entorno
// const API_URL = "http://localhost:4000/api/users";

//Funcion para crear un usuario en el backend 
import { API_URL } from "@/features/config"
// recibe un objeto con lo datos del usuario
const  USERS_URL = `${API_URL}/users`
// Retorna la respuesta JSON del servidor
export async function createUser(userData) {
    // Obtenemos el JWT almacenado en sessionStorage
    const token = sessionStorage.getItem("token");
    // Realizamos la peticion HTTP usando fetch 
    const response = await fetch(USERS_URL,{
        // Metodo HTTP segun convencion REST
        method: "POST",
        // Cabeceras de la peticion 
        // Indicamos que enviamos JSON y añadimos el token de autorización
        headers: {
            "Content-Type" :  "application/json",
            "Authorization": `Bearer ${token}`,
        },
        // Convertimos el objeto userData a JSON
        body: JSON.stringify(userData),
    });
    // Verificamos si la respuesta NO fue exitosa (status!= 2xx)
    if (!response.ok){
    // Leemos el cuerpo de la respuesta error
        const error = await response.json();
        // Lanzamos una excepcion con el mensaje de error 
        // Esto permite que el componente que llama maneje el error con try/catch
        throw new Error (error.error || "Error al crear el usuario")
    }
        // Si la petición fue exitosa, retornamos la respuesta parseada como json
        return response.json();
}

// Funcion para consultar todos los usuarios del backend
export async function getAllUsers() {
    // Obtenemos el JWT almacenado en sessionStorage
    const token = sessionStorage.getItem("token");

    // Realizamos la peticion HTTP
    const response = await fetch(USERS_URL, {
        // Metodo HTTP para consultar usuarios
        method: "GET",
        // Cabeceras de la peticion
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });

    // Verificamos si la respuesta NO fue exitosa
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Error al consultar los usuarios");
    }

    // Retornamos los usuarios en formato JSON
    return response.json();
}