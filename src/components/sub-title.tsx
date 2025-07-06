import type {ReactNode} from "react";

interface Props {
    children: ReactNode;
    darkMode: boolean;
}

export default function SubTitle({children, darkMode}: Props) {

    return (
        <h2
            className={`
                font-outfit font-semibold
                text-xl sm:text-2xl md:text-3xl lg:text-4xl
                ${darkMode ? 'text-white' : 'text-gray-900'}
                transition-colors duration-300
            `}
        >
            {children}
        </h2>

    );
}