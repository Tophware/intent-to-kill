import { Route, Routes } from "react-router";
import { useGameContext } from "./GameContext";
import Firehouse from "./pages/Firehouse";
import History from "./pages/History";
import Home from "./pages/Home";
import MurdererDetails from "./pages/MurdererDetails";
import SelectAction from "./pages/SelectAction";
import SelectKillerSupporters from "./pages/SelectKillerSupporters";

function App() {
  const { gameState: game } = useGameContext();

  return game?.murderer ? (
    <Routes>
      <Route path="/history" element={<History />} />
      <Route path="/firehouse" element={<Firehouse />} />
      <Route path="/select-supporters" element={<SelectKillerSupporters />} />
      <Route path="/murderer-details" element={<MurdererDetails />} />
      <Route path="/" element={<SelectAction />} />
    </Routes>
  ) : (
    <Home />
  );
}

export default App;
