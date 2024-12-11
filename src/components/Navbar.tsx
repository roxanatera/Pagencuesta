import React from 'react';
import { Link } from 'react-router-dom';  // Asegúrate de tener react-router-dom instalado

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg font-bold">Encuesta de Navidad</h1>
                <div>
                    <Link to="/" className="px-4">Inicio</Link>
                    <Link to="/privacy" className="px-4">Política de Privacidad</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
