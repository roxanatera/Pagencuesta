import React, { useState } from 'react';


interface FormData {
  name: string;
  age: number;
  preference: string;
}

interface SurveyFormProps {
  setResponses: React.Dispatch<React.SetStateAction<FormData[]>>; // Añadir el tipo de setResponses
}

const SurveyForm: React.FC<SurveyFormProps> = ({ setResponses }) => { // Recibir setResponses como prop
  const [formData, setFormData] = useState<FormData>({ name: '', age: 0, preference: 'A' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResponses(prev => [...prev, formData]); // Usar setResponses para actualizar el estado de HomePage
    setFormData({ name: '', age: 0, preference: 'A' }); // Resetear los campos del formulario
  };

  return (
    <div className="p-5 max-w-lg mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Encuesta de Navidad</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold text-gray-700">Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Edad:</label>
          <input
            type="number"
            name="age"
            value={formData.age || ''}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">¿Qué es lo que más disfrutas de la Navidad?</label>
          <select
            name="preference"
            value={formData.preference}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          >
            <option value="A">Las comidas y cenas especiales</option>
            <option value="B">Las reuniones con la familia y amigos</option>
            <option value="C">La decoración y el ambiente navideño</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 mb-8"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default SurveyForm;
