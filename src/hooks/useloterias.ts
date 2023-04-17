import { useState, useEffect } from 'react';
import axios from 'axios';

const useLoterias = () => {
  const [megasena, setMegasena] = useState(null);
  const [lotofacil, setLotofacil] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUltimosResultados = async () => {
      try {
        const response = await axios.get('https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados');
        const { data } = response;

        const megasenaData = data.filter((item: { nome: any; }) => item.nome === 'MEGA-SENA')[0];
        const lotofacilData = data.filter((item: { nome: any; }) => item.nome === 'LOTOFÁCIL')[0];

        setMegasena(megasenaData);
        setLotofacil(lotofacilData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getUltimosResultados();
  }, []);

  return { megasena, lotofacil, loading };
};

export default useLoterias;
