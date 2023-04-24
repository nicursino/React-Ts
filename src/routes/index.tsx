import { BrowserRouter } from "react-router-dom";
import {Route, Routes} from "react-router";
import MegaSena from "../pages/MegaSena";
import Principal from "../pages/Home";
import Lotofacil from "../components/Lotofacil/Lotofacil";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/megasena" element={<MegaSena />} />
                <Route path="/lotofacil" element={<Lotofacil />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas