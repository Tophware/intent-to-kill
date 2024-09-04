import { Route, Routes } from "react-router";
import { useGameContext } from "./GameContext";
import Characters from "./pages/Characters";
import Firehouse from "./pages/Firehouse";
import History from "./pages/History";
import Home from "./pages/Home";
import Motives from "./pages/Motives";
import MoveCivilians from "./pages/MoveCivilians";
import MurdererDetails from "./pages/MurdererDetails";
import SelectAction from "./pages/SelectAction";
import SelectKillerSupporters from "./pages/SelectKillerSupporters";
import Statistics from "./pages/Statistics";
import Warning from "./pages/Warning";

function App() {
  const { gameState: game } = useGameContext();

  return game?.murderer ? (
    <Routes>
      <Route path="/warning/:p" element={<Warning />} />
      <Route path="/motives" element={<Motives />} />
      <Route path="/move-civilians" element={<MoveCivilians />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/characters" element={<Characters />} />
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
