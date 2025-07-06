import Swal from 'sweetalert2';

export function confirmAction(
    title: string,
    text: string,
    confirmButtonText: string
): Promise<boolean> {
    return Swal.fire({
        title,
        text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#22C55E',
        cancelButtonColor: '#EF4444',
        confirmButtonText,
        cancelButtonText: 'Cancelar',
    }).then((result) => result.isConfirmed);
}
