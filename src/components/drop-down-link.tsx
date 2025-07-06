import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import type { LinkSidebarDataModel } from "../models/link-sidebar-data-model.ts";
import { useAppSelector } from "../hooks/store-hook.ts";

interface Props {
    data: LinkSidebarDataModel;
    darkMode: boolean;
    handleRedirect: (path: string) => void;
}

export default function DropDownLink({ data, darkMode, handleRedirect }: Props) {

    const navSelected = useAppSelector((state) => state.navState.navSelected);
    const isActiveLink = navSelected.linkName === data.linkName;

    return (
        <Popover className="relative">
            {data.pathLinkName ? (
                // 🔹 Si tiene pathLinkName → botón simple
                <button
                    className={`
                        inline-flex items-center gap-x-1 text-sm font-semibold transition-colors
                        ${darkMode
                        ? isActiveLink ? 'text-primary' : 'text-text-dark'
                        : isActiveLink ? 'text-accent' : 'text-text'
                    }
                `}
                    onClick={() => handleRedirect(data.pathLinkName!)}
                >
                    <span>{data.linkName}</span>
                </button>
            ) : (
                // 🔹 Si NO tiene pathLinkName → usa Popover
                <PopoverButton
                    className={`
                        inline-flex items-center gap-x-1 text-sm font-semibold transition-colors
                        ${darkMode
                        ? isActiveLink ? 'text-primary' : 'text-text-dark'
                        : isActiveLink ? 'text-accent' : 'text-text'
                    }
                    `}
                >
                    <span>{data.linkName}</span>
                    <ChevronDownIcon aria-hidden="true" className="size-5" />
                </PopoverButton>
            )}

            {/* 🔻 Solo muestra el dropdown si NO hay pathLinkName */}
            {!data.pathLinkName && (
                <PopoverPanel
                    className={`
                        absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4
                        transition data-closed:translate-y-1 data-closed:opacity-0
                        data-enter:duration-200 data-enter:ease-out
                        data-leave:duration-150 data-leave:ease-in
                    `}
                >
                    {({ close }) => (
                        <div
                            className={`
                                w-56 shrink rounded-xl p-4 text-sm font-semibold shadow-lg ring-1
                                ${darkMode
                                ? 'bg-surface-dark text-text-dark ring-border-dark'
                                : 'bg-surface text-text ring-border'}
                            `}
                        >
                            {data.dropDownLinkList.map((item, index) => {
                                const isActiveDrop = navSelected.dropLinkName === item.name;

                                return (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            handleRedirect(item.path);
                                            close(); // ✅ cerrar el Popover
                                        }}
                                        className={`
                                              block p-2 w-full text-left rounded-md transition-colors
                                              ${isActiveDrop
                                            ? darkMode
                                                ? 'bg-background-dark text-primary'
                                                : 'bg-background text-primary'
                                            : 'hover:text-accent'}
                                        `}
                                    >
                                        {item.name}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </PopoverPanel>

            )}
        </Popover>
    );
}
