import { useContext } from "react";
import { GameContext } from "./GameContext";
import Firehouse from "./pages/Firehouse";
import History from "./pages/History";
import Home from "./pages/Home";
import SelectAction from "./pages/SelectAction";
import SelectKillerSupporters from "./pages/SelectKillerSupporters";
import ShowCharacters from "./pages/ShowCharacters";
import ShowMotive from "./pages/ShowMotive";
import { GameAction } from "./types";

function App() {
  const game = useContext(GameContext);

  let pageToDisplay;

  switch (game.currentAction) {
    case GameAction.SelectKillerSupporters:
      pageToDisplay = <SelectKillerSupporters />;
      break;
    case GameAction.ShowMotive:
      pageToDisplay = <ShowMotive />;
      break;
    case GameAction.ShowCharacters:
      pageToDisplay = <ShowCharacters />;
      break;
    case GameAction.ShowActions:
      pageToDisplay = <SelectAction />;
      break;
    case GameAction.Firehouse:
      pageToDisplay = <Firehouse />;
      break;
    case GameAction.ShowHistory:
      pageToDisplay = <History />;
      break;
    default:
      pageToDisplay = <Home />;
  }

  return pageToDisplay;
}

export default App;
