import { createContext, useEffect, useState } from "react";
import { LoteriaProps, Props } from "../types/Index";
import Loteria from "../services/LoteriasService";

const Contexto = createContext({} as LoteriaProps);

function ContextoProvider({children}:any){
    const [megasena,setMegasena] = useState({} as Props);
    const [lotofacil,setlotofacil] = useState({} as Props);
    const [quina,setquina] = useState({} as Props);

    useEffect(()=>{
        ( async ()=>{
            const resp = await Loteria.get();
            console.log(resp);
            
            setMegasena(resp.megasena);
            setlotofacil(resp.lotofacil);
            setquina(resp.quina);
        } )();
    },[]);

    return (
      <Contexto.Provider value = {{megasena, lotofacil, quina}}>
        {children}
      </Contexto.Provider>
    );
  }

  export { Contexto, ContextoProvider };