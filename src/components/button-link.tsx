import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    children: ReactNode;
    darkMode: boolean;
    to: string;
}

export default function ButtonLink({ children, darkMode, to }: Props) {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(to)}
            className={`
                text-sm font-medium transition-colors
                ${darkMode ? 'text-text-dark' : 'text-text'}
                hover:underline hover:text-accent
                focus:outline-none
          `}
        >
            {children}
        </button>
    );
}
