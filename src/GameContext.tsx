import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { Character, SocialGroup } from "./types";
import { MotiveCard } from "./types/MotiveCard";

type GameState = {
  socialGroups?: SocialGroup[];
  possibleSupporters?: SocialGroup[];
  history?: SocialGroup[];
  characters?: Character[];
  supporters?: SocialGroup;
  motive?: MotiveCard;
  murderer?: Character;
  personOfInterest?: Character;
  statistics?: { [key: string]: number };
};

export type GameAction =
  | { type: "START"; payload: GameState }
  | { type: "SELECT_SUPPORTERS"; payload: SocialGroup }
  | { type: "FIREHOUSE" }
  | { type: "QUIT" };

interface GameContextType {
  gameState?: GameState;
  dispatch: Dispatch<GameAction>;
}

const initialState: GameState = {};

export const GameContext = createContext<GameContextType | undefined>(
  undefined
);

type GameProviderProps = {
  children?: ReactNode;
};

const gameReducer = (gameState: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case "START":
      return { ...action.payload };
    case "SELECT_SUPPORTERS":
      return { ...gameState, supporters: action.payload };
    case "FIREHOUSE":
      let randomGroup = gameState.socialGroups!.sort(
        () => 0.5 - Math.random()
      )[0];
      let history = [...(gameState.history ?? [])];
      history.push(randomGroup);
      return { ...gameState, history };
    case "QUIT":
      return { ...initialState };
    default:
      throw new Error(`Unhandled action`);
  }
};

const GameContextProvider = ({ children }: GameProviderProps) => {
  const [gameState, dispatch] = useReducer(gameReducer, initialState);

  useEffect(() => {
    const savedGameState = localStorage.getItem("gameState");

    if (savedGameState) {
      console.log("Game state loaded from local storage");
      console.log(savedGameState);
      dispatch({ type: "START", payload: JSON.parse(savedGameState) });
    }
  }, []);

  useEffect(() => {
    if (gameState && gameState.murderer) {
      console.log("Game state saved to local storage");
      localStorage.setItem("gameState", JSON.stringify(gameState));
    }
  }, [gameState]);

  return (
    <GameContext.Provider value={{ gameState, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameContextProvider");
  }
  return context;
};

export default GameContextProvider;
