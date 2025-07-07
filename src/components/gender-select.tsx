import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import type { GenderModel } from '../models/genderModel.ts';

interface Props {
    movieGenders: GenderModel[];
    darkMode: boolean;
    setGender: (id: number) => void;
}

export default function GenderSelect({ movieGenders, darkMode, setGender }: Props) {

    const [selectedGender, setSelectedGender] = useState<GenderModel | null>(null);

    // Inicializa el género cuando movieGenders esté disponible
    useEffect(() => {
        if (movieGenders.length > 0 && !selectedGender) {
            setSelectedGender(movieGenders[0]);
        }
    }, [movieGenders, selectedGender]);

    // Evita renderizar si no hay datos aún
    if (!selectedGender) return null;

    return (
        <div className="w-full mt-2">
            <Listbox
                value={selectedGender}
                onChange={(gender) => {
                    setSelectedGender(gender);
                    setGender(gender.id);
                }}
            >
                <div className="relative">
                    {/* Botón principal */}
                    <Listbox.Button
                        className={`
                            w-full cursor-pointer rounded-md border px-3 py-2 text-left text-sm transition-colors
                            ${darkMode
                            ? 'bg-background-dark text-text-dark border-border-dark'
                            : 'bg-background text-text border-border'}
                            focus:outline-none focus:ring-2 focus:ring-border-dark
                        `}
                    >
                        <span>{selectedGender.name}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                    </Listbox.Button>

                    {/* Opciones */}
                    <Listbox.Options
                        className={`
                            absolute mt-1 max-h-60 w-full overflow-auto rounded-md border py-1 text-sm shadow-lg 
                            ring-1 ring-black/10 z-10
                            ${darkMode
                            ? 'bg-surface-dark text-text-dark border-border-dark'
                            : 'bg-surface text-text border-border'}
                            custom-scrollbar
                        `}
                    >
                        {movieGenders.map((gender) => (
                            <Listbox.Option
                                key={gender.id}
                                value={gender}
                                className={({ active, selected }) => `
                                    relative cursor-pointer select-none px-4 py-2
                                    ${active ? 'bg-accent/20 text-accent' : ''}
                                    ${selected ? 'font-semibold' : ''}
                                `}
                            >
                                {({ selected }) => (
                                    <>
                                        <span>{gender.name}</span>
                                        {selected && (
                                            <span className="absolute inset-y-0 right-3 flex items-center">
                                                <CheckIcon className="h-4 w-4 text-accent" />
                                            </span>
                                        )}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
        </div>
    );
}
