import { BrowserRouter } from "react-router-dom";
import {Route, Routes} from "react-router";
import MegaSena from "../pages/MegaSena";
/*import Principal from "../pages/Home";*/
import Lotofacil from "../pages/LotoFacil";
import Quina from "../pages/Quina";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Principal />} /> */}
                <Route path="/megasena" element={<MegaSena />} />
                <Route path="/lotofacil" element={<Lotofacil />} />
                <Route path="/quina" element={<Quina />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas