import { ContextoProvider } from "./contexts/LoteriasContext";
import Principal from "./pages/Home";

function App() {
  return <ContextoProvider><Principal /></ContextoProvider> 
}

export default App;
