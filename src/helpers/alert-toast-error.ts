import toast from "react-hot-toast";

export function alertToastError(message: string) {
    toast.error(message, {
        style: {
            background: '#EF4444', // Rojo
            color: '#F1F5F9',      // Texto blanco
            border: '1px solid #334155',
            padding: '16px',
            borderRadius: '8px',
        },
        iconTheme: {
            primary: '#F1F5F9',    // Color del ícono
            secondary: '#EF4444',  // Fondo del ícono
        },
    });
}