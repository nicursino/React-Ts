import { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";

function Menu() {
    const [cinzaState, setCinza] = useState('');
    useEffect(()=>{
        const path = window.location.pathname;
        if (path === "/lotofacil"){
            setCinza(path)
        }
        if (path === "/megasena"){
            setCinza(path)
        }
        if (path === "/quina"){
            setCinza(path)
        }
    } )
    
    return (
        <div style={{ padding: 10 }}>
            <Link to="/lotofacil" id={cinzaState === "/lotofacil" ? "menu":"menuLF"} style={{ marginLeft: 15, fontWeight: 'bold', marginRight:'5px', fontSize: '20px', textDecorationLine: 'none' }}>
                Lotofácil
            </Link>
            <Link to="/megasena" id={cinzaState === "/megasena" ? "menu":"menuMG"} style={{ marginLeft: 15, fontWeight: 'bold', marginRight:'5px', fontSize: '20px', textDecorationLine: 'none'  }}>
                Megasena
            </Link>
            <Link to="/quina" id={cinzaState === "/quina" ? "menu":"menuQN"} style={{ marginLeft: 15, fontWeight: 'bold', marginRight:'5px', fontSize: '20px', textDecorationLine: 'none'  }}>
                Quina
            </Link>
        </div>
    );
}

export default Menu;
