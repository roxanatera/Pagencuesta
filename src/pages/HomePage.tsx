import React, { useState } from 'react';
import SurveyForm from '../components/SurveyForm';
import TableComponent from '../components/TableComponent';
import {ChartComponent} from '../components/ChartComponent';

interface FormData {
  name: string;
  age: number;
  preference: string;
}

const HomePage: React.FC = () => {
  const [responses, setResponses] = useState<FormData[]>([]);

  return (
    <div className="homepage">
      <SurveyForm setResponses={setResponses} />
      <div className="mt-10 p-4">
      <ChartComponent data={responses} />
      </div>

      <TableComponent data={responses} />
    </div>
  );
};

export default HomePage;
