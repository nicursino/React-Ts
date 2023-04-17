import React from 'react';
import { MegaSena } from '../components/MegaSena';
import { Lotofacil } from '../components/Lotofacil';

export const Home: React.FC = () => {
  return (
    <div>
      <h1>Últimos resultados</h1>
      <MegaSena />
      <Lotofacil />
    </div>
  );
};
