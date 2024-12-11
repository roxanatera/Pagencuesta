import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-700 text-white p-4 mt-8">
            <div className="container mx-auto text-center">
                <p>Todos los derechos reservados © {new Date().getFullYear()}</p>
                <p>Para más información sobre las cookies y cómo las utilizamos, por favor <Link to="/privacy" className="text-blue-300">lee nuestra política de privacidad.</Link></p>
            </div>
        </footer>
    );
};

export default Footer;
