import { ContextoProvider } from "./contexts/LoteriasContext";
import Rotas from "./routes";

function App() {
  return ( 
          <ContextoProvider>
            <Rotas />
          </ContextoProvider>
  ); 
}

export default App;
