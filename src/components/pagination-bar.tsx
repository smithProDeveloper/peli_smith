interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    darkMode: boolean;
}

export default function PaginationBar({ currentPage, totalPages, onPageChange, darkMode }: Props) {

    const canGoBack = currentPage > 1;
    const canGoNext = currentPage < totalPages;

    const buttonClass = `
        px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200
        border border-border
        ${darkMode
        ? 'bg-background-dark text-gray-300 hover:bg-surface-dark'
        : 'bg-background text-gray-700 hover:bg-surface'}
        disabled:opacity-40 disabled:cursor-not-allowed
    `;

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 py-4">
            {/* Página actual */}
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Página {currentPage} de {totalPages}
            </span>

            {/* Botones */}
            <div className="flex gap-2">
                <button
                    onClick={() => canGoBack && onPageChange(currentPage - 1)}
                    disabled={!canGoBack}
                    className={buttonClass}
                >
                    Anterior
                </button>
                <button
                    onClick={() => canGoNext && onPageChange(currentPage + 1)}
                    disabled={!canGoNext}
                    className={buttonClass}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
}
