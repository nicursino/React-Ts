import React from 'react';
import  MegaSena  from '../components/MegaSena/MegaSena';
import  Lotofacil  from '../components/Lotofacil/Lotofacil';

export const Home: React.FC = () => {
  return (
    <div>
      <h1>Últimos resultados</h1>
      <MegaSena />
      <Lotofacil />
    </div>
  );
};
