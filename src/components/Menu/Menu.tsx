import { BrowserRouter, Link } from "react-router-dom";

function Menu() {
    return (
        <div style={{ padding: 10 }}>
            <Link to="/lotofacil" style={{ marginLeft: 15, color:"#930089" }}>
                Lotofácil
            </Link>
            <Link to="/megasena" style={{ marginLeft: 15, color:"#209869" }}>
                Megasena
            </Link>
            <Link to="/quina" style={{ marginLeft: 15, color:"#260085" }}>
                Quina
            </Link>
        </div>
    );
}

export default Menu;
