import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo o Título */}
                <h1 className="text-lg font-bold">Encuesta de Navidad</h1>

                {/* Botón Hamburguesa para móviles */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="block md:hidden text-white focus:outline-none"
                >
                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Enlaces de Navegación */}
                <div
                    className={`${
                        isOpen ? 'block' : 'hidden'
                    } md:flex space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0`}
                >
                    <Link to="/" className="block px-4 py-2 md:inline hover:bg-gray-700 rounded">
                        Inicio
                    </Link>
                    <Link to="/privacy" className="block px-4 py-2 md:inline hover:bg-gray-700 rounded">
                        Política de Privacidad
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
