import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/bg-1.png";
import { Input } from "@/shared";
import { Button } from "@/shared";
import DeleteCounter2 from "../components/DeleteCounter2";
import EffectDemo from "../components/EffectDemo";

export default function AuthLayout() {
  return (
    <>
      <div
        className="min-h-screen w-full"
        style={{
          backgroundImage: `url(${authBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="mx-auto">
          <Input
            label="Nombre"
            type="text"
            placeholder="Escribe tu nombre"
            htmlFor= "user-name"
            variant ="primary"
            size ="lg"
            />
          <Input
            label="Correo"
            type="email"
            placeholder="Escribe tu correo"
            htmlFor= "user-email"
            />
          <Input
            label="Telefono"
            type="tel"
            placeholder="Escribe tu número de telefono"
            htmlFor= "user-phone"
            />
          <Input
            label="Borrar tipo de documento"
            type="text"
            placeholder="Escribe tu nombre"
            htmlFor= "name"
            />
          <Input
            label="Documento"
            type="text"
            placeholder="Escribe tu número de documento"
            htmlFor= "user-document-number"
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
            </div>{/* actions */}

            {/*Implementacion del estado useState*/}

          <div className="mt-10">
            <h1>Ejemplo sin useState</h1>
            <DeleteCounter2/>

          </div>

            <h1>Hola que tal</h1>

            <EffectDemo/>
          <Outlet />
        </main>
      </div>
    </>
  );
}