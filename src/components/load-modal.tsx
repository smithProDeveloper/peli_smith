import useTheme from "../hooks/use-theme";

export default function LoadModal() {
    const { darkMode } = useTheme();

    return (
        <div className={`
              fixed inset-0 z-50 flex flex-col items-center justify-center
              bg-background dark:bg-background-dark
            `}
        >
            <div className={`
                flex items-center justify-center rounded-full w-64 p-2`}
            >
                <img
                    src={darkMode ? "/logo-theme-dark.png" : "/logo-theme-light.png"}
                    alt="img-load"
                    className="object-contain object-center"
                />
            </div>

            <div className="">
                <p className={`
                        text-base font-semibold
                        ${darkMode ? "text-text-dark" : "text-text"}
                    `}
                >
                    Loading...
                </p>
            </div>
        </div>
    );
}
