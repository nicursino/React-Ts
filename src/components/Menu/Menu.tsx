import { BrowserRouter, Link } from "react-router-dom";

function Menu() {
    return (
        <div style={{ padding: 10 }}>
            <Link to="/lotofacil" style={{ marginLeft: 15, color:"#930089", fontWeight: 'bold', marginRight:'5px', fontSize: '20px', textDecorationLine: 'none' }}>
                Lotofácil
            </Link>
            <Link to="/megasena" style={{ marginLeft: 15, color:"#209869", fontWeight: 'bold', marginRight:'5px', fontSize: '20px', textDecorationLine: 'none'  }}>
                Megasena
            </Link>
            <Link to="/quina" style={{ marginLeft: 15, color:"#260085", fontWeight: 'bold', marginRight:'5px', fontSize: '20px', textDecorationLine: 'none'  }}>
                Quina
            </Link>
        </div>
    );
}

export default Menu;
