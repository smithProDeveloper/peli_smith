import {Popover, PopoverButton, PopoverPanel} from '@headlessui/react';
import {ChevronUpIcon, ChevronDownIcon} from '@heroicons/react/20/solid';
import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer
            className="bg-surface dark:bg-surface-dark text-sm py-4 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center shadow-inner">
            {/* Créditos */}
            <div className="text-center md:text-left mb-2 md:mb-0">
                Datos proporcionados por{' '}
                <a
                    href="https://www.themoviedb.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline"
                >
                    TMDB
                </a>
            </div>

            {/* Redes sociales - Desktop */}
            <div className="hidden md:flex gap-4">
                <a href="#" className="hover:text-accent"><FaFacebook size={18}/></a>
                <a href="#" className="hover:text-accent"><FaInstagram size={18}/></a>
                <a href="#" className="hover:text-accent"><FaLinkedin size={18}/></a>
                <a href="#" className="hover:text-accent"><FaGithub size={18}/></a>
            </div>

            {/* Redes sociales - Mobile */}
            <div className="md:hidden">
                <Popover className="relative">
                    {({open}) => (
                        <>
                            <PopoverButton
                                className="flex items-center gap-1 text-sm font-semibold text-text dark:text-text-dark"
                            >
                                <span>Redes sociales</span>
                                {open ? (
                                    <ChevronUpIcon className="w-5 h-5"/>
                                ) : (
                                    <ChevronDownIcon className="w-5 h-5"/>
                                )}
                            </PopoverButton>

                            <PopoverPanel
                                className={`
                                    absolute bottom-10 right-0 z-10 mb-2 w-48 rounded-xl p-4 
                                    text-sm font-semibold shadow-lg ring-1
                                      ${open
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-2'}
                                     transition-all duration-200 ease-out
                                     ${open
                                    ? 'pointer-events-auto'
                                    : 'pointer-events-none'}
                                     ${'bg-surface dark:bg-surface-dark text-text dark:text-text-dark ring-border dark:ring-border-dark'}
                                `}
                            >
                                <div className="flex justify-between">
                                    <a href="#" className="hover:text-accent"><FaFacebook size={18}/></a>
                                    <a href="#" className="hover:text-accent"><FaInstagram size={18}/></a>
                                    <a href="#" className="hover:text-accent"><FaLinkedin size={18}/></a>
                                    <a href="#" className="hover:text-accent"><FaGithub size={18}/></a>
                                </div>
                            </PopoverPanel>
                        </>
                    )}
                </Popover>
            </div>
        </footer>
    );
}
