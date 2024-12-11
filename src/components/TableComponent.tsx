import React from 'react';

interface FormData {
  name: string;
  age: number;
  preference: string;
}

interface TableComponentProps {
  data: FormData[];
}

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
  return (
    <div className="mt-8">
      <table className="min-w-full divide-y divide-gray-200 shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edad</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preferencia</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.age}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.preference}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
