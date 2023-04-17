import React, { useContext } from 'react';
import { LoteriasContext } from '../../contexts/LoteriasContext';
import '../MegaSena/MegaSena.css';

const MegaSena = () => {
  const { lotteriesData } = useContext(LoteriasContext);
  const { megasena } = lotteriesData;

  return (
    <div className="megasena">
      <div className="megasena-header">
        <img src={process.env.PUBLIC_URL + '/assets/trevo-megasena.png'} alt="Mega-Sena" />
        <h2>MEGA-SENA</h2>
      </div>
      <div className="megasena-content">
        <div className="megasena-numbers">
          {megasena.numbers && megasena.numbers.map((number: number, index: any) => (
            <span key={index}>{number}</span>
          ))}
        </div>
        <div className="megasena-info">
          <p className="megasena-prize">{megasena.prize}</p>
          <p className="megasena-winners">{megasena.winners}</p>
          <p className="megasena-date">{megasena.date}</p>
        </div>
      </div>
    </div>
  );
};

export default MegaSena;
