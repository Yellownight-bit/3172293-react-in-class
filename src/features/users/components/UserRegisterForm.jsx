// UserRegisterForm  componente para registrar un usuario

import { useState, useEffect } from "react"
import { Input, Select, Checkbox, Button} from "@/shared";
import { getDocumentTypes } from "@/services/selectService";

export default function UserRegisterForm (){

    const [formData, setFormData] = useState({
        userName: "",
        userEmail: "",
        userPhone: "",
        userDocumentType: "",
        userDocumentNumber: "",
        userPassword: "",
        userImage: [],

        //Flags booleanos
        isStaff: false,
        isActive: true,
        isSuperUser: false,
    });

    const handleChange = (e) => {
        // Se obtiene el nombre del campo y su valor
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            //Se copian todos los valores anteriores del estado
            ...prev,

            //Se actualiza unicamente lo que cambio
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
    //Evita que el formulario recargue la página
    e.preventDefault();

    //Validamos los datos del formulario contra el esquema Zod
    //safeParse No lanza excepción, retorna un objeto controlado
    const result = userSchema. safeParse(formData);

    //Verificar en consola si el esquema esta funcionando correctamente
    //console.log(result)

    //Si la validación falla
    if(!result.sucess) {
        //Objeto donde almacenaremos los errores por campo
        const fieldErrors = {};

        //Recorremos cada error generado por Zod
        result.error.issues.forEach((issue) => {
            //issue.path[0] corresponde al nombre del campo
            //issue.message contiene el mensaje de error definido en el schema
            fieldErrors[issue.path[0]] = issue.message;
        });

        //Actualiza,ps eñ estado de errorees para mostratlos en la UI
        setErrors(fieldErrors);

        //Cortamos la ejecución: NO se envia nada al backend

        return;
    }

    //Si la validación pasa, limpiamos errores previos
    setErrors({});
    }

    const [documentTypes, setDocumentTypes] = useState([])

     useEffect(() => {
        getDocumentTypes().then(setDocumentTypes);
      },[])

    return(
        <div>
            <Input
            label="Nombre"
            type="text"
            placeholder="Ingresa su nombre"
            htmlFor= "user-name"
            />
            <Input
            label="Correo"
            type="email"
            placeholder="Escribe tu correo electronico"
            htmlFor= "user-email"
            />
            <Input
            label="Teléfono"
            type="tel"
            placeholder="Escribe tu número de teléfono"
            htmlFor= "user-phone"
            />
            <Select
              label= "Tipos de documento"
              name="userDocumentTypes"
              htmlFor="userDocumentTypes"
              options={documentTypes}
            />
            <Input
            label="Documento"
            type="text"
            placeholder="Escribe tu número de documento"
            htmlFor= "user-document-number"
            />
            <Input
            label="Contraseña"
            type="password"
            placeholder="Escribe tu contraseña"
            htmlFor= "user-password"
            />

            {/* checkbox */}
            <Checkbox
                id="isSuperUser"
                name="isSuperUser"
                label="Es super usuario"
                checked={formData.isSuperUser}
                onChange={handleChange}
            />
            <Checkbox
                id="isStaff"
                name="isStaff"
                label="Es staff"
                checked={formData.isStaff}
                onChange={handleChange}
            />
            <Checkbox
                id="isActive"
                name="isActive"
                label="Esta activo"
                checked={formData.isActive}
                onChange={handleChange}
            />

            {/*Actions*/}
            <div className="flex gap-6 items-center" >

               <Button
                variant= "secondary"
                size= "sm"
                type= "button"
                onClick={() => console.log("Se oprimio el cancelar")}
              
              >Cancelar
              </Button>

              <Button
                variant= "primary"
                size= "md"
                type= "sumbit"
                onClick={() => console.log("Se oprimio el submit")}
              
              >Guardar
              </Button>
            </div>
        </div>
    )
}