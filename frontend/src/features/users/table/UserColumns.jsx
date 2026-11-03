// src/features/users//tabl/userColumns.jsx

// Componente reutilizable que muestra un switch para activar o desactivar estados
import { StatusSwitch } from "@/shared";

// Componente que contiene los botones de acciones (editar y eliminar) para cada usuario
import UserRowActions from "../components/UserRowActions";

// Definición de las columnas de la tabla de usuarios
// Este arreglo suele usarse en librerías de tablas como TanStack Table
export const UserColumns = [

  // Columna ID
  {
    accessorKey: "id",
    header: "Id",
  },

  // Columna Nombre
  {
    accessorKey: "user_name",
    header: "Nombre",
  },

  // Columna Email
  {
    accessorKey: "user_email",
    header: "Email",
  },

  // Columna Dirección
  {
    accessorKey: "user_phone",
    header: "Phone",
  },

  // Columna Estado (activo / inactivo)
  {
    accessorKey: "is_active",
    header: "Estado",

    // Render personalizado de la celda
    // Permite mostrar un componente en lugar de solo texto
    cell: ({ row }) => {

      // Se obtiene el objeto completo del usuario de la fila
      const user = row.original;

      // Función que se ejecuta cuando cambia el switch
      const handleChange = (value) => {

        // value representa el nuevo estado del switch (true o false)
        console.log("Actualizar estado usuario:", user.id, value);

        // Aquí normalmente se llamaría una API para actualizar el estado
        // updateUserStatus(user.id, value)
      };

      return (
        // Componente reutilizable para mostrar el switch
        <StatusSwitch
          checked={user.is_active}
          onChange={handleChange}
        />
      );
    },
  },

  // Columna de acciones (editar / eliminar)
  {
    id: "actions",

    // Renderiza el componente de acciones pasando el usuario completo
    cell: ({ row }) => <UserRowActions user={row.original} />,
  },
];