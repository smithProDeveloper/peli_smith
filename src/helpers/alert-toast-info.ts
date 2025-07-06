import toast from "react-hot-toast";

export function alertToastInfo(message: string) {
    toast.error(message, {
        style: {
            background: '#3B82F6', // Rojo
            color: '#F1F5F9',      // Texto blanco
            border: '1px solid #2563EB',
            padding: '16px',
            borderRadius: '8px',
        },
        iconTheme: {
            primary: '#F1F5F9',    // Color del ícono
            secondary: '#3B82F6',  // Fondo del ícono
        },
    });
}