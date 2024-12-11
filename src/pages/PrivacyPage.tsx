import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Política de Privacidad</h1>
      <p className="mb-2">
        Tu privacidad es importante para nosotros. Es política de Encuesta de Navidad respetar tu privacidad
        respecto a cualquier información que podamos recopilar mientras operamos nuestro sitio web.
      </p>
      <h2 className="text-xl font-semibold mt-4">Información que recopilamos</h2>
      <p>
        Al utilizar nuestra encuesta, es posible que te pidamos que nos proporciones cierta información
        identificable personalmente que puede incluir, pero no se limita a, tu nombre y edad.
      </p>
      <h2 className="text-xl font-semibold mt-4">Uso de la información</h2>
      <p>
        Utilizamos la información recopilada principalmente para proporcionar y mejorar el servicio.
        No compartimos información identificable personalmente con terceros, excepto cuando es necesario
        para proporcionar el servicio.
      </p>
      <h2 className="text-xl font-semibold mt-4">Seguridad</h2>
      <p>
        La seguridad de tu información personal es importante para nosotros, pero recuerda que ningún método
        de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Mientras nos
        esforzamos por usar medios comercialmente aceptables para proteger tu información personal,
        no podemos garantizar su seguridad absoluta.
      </p>
      <h2 className="text-xl font-semibold mt-4">Tus derechos</h2>
      <p>
        Tienes derecho a solicitar que te mostremos cualquier información personal que tengamos sobre ti,
        a rectificar cualquier error en esa información, y a solicitar su eliminación, siempre que no
        estemos obligados por ley a conservarla.
      </p>
      <h2 className="text-xl font-semibold mt-4">Cambios en esta política de privacidad</h2>
      <p>
        Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos de cualquier cambio
        publicando la nueva Política de Privacidad en esta página. Se te aconseja revisar esta Política de Privacidad
        periódicamente para cualquier cambio.
      </p>
      <h2 className="text-xl font-semibold mt-4">Contacto</h2>
      <p>
        Si tienes preguntas sobre cómo gestionamos tus datos personales, puedes contactarnos a través de nuestro sitio.
      </p>
    </div>
  );
};

export default PrivacyPage;
