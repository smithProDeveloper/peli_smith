import toast from "react-hot-toast";

export function alertToastSuccess(message: string) {
    toast.error(message, {
        style: {
            background: '#22C55E', // Rojo
            color: '#F1F5F9',      // Texto blanco
            border: '1px solid #334155',
            padding: '16px',
            borderRadius: '8px',
        },
        iconTheme: {
            primary: '#F1F5F9',    // Color del ícono
            secondary: '#22C55E',  // Fondo del ícono
        },
    });
}