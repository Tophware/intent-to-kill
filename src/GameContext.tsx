import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import useUtils from "./hooks/useUtils";
import { Character, Motive, SocialGroup } from "./types";

const LOCAL_STORAGE_KEY = "gameState";

export type GameState = {
  socialGroups?: SocialGroup[];
  possibleSupporters?: SocialGroup[];
  history?: SocialGroup[];
  characters?: Character[];
  supporters?: SocialGroup;
  motive?: Motive;
  motives?: Motive[];
  murderer?: Character;
  detective?: Character;
  personOfInterest?: Character;
  statistics?: { [key: string]: number };
};

export type GameAction =
  | { type: "START"; payload: GameState }
  | { type: "SELECT_SUPPORTERS"; payload: SocialGroup }
  | { type: "FIREHOUSE" }
  | { type: "MOVE_CIVILIANS" }
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
  const { randomSort } = useUtils();
  switch (action.type) {
    case "START":
      return { ...action.payload };
    case "SELECT_SUPPORTERS":
      return { ...gameState, supporters: action.payload };
    case "MOVE_CIVILIANS":
      let civilians = gameState.socialGroups!.sort(randomSort).slice(0, 2);
      let newHistory = [...(gameState.history ?? [])];
      newHistory.push(...civilians);
      return { ...gameState, history: newHistory };
    case "FIREHOUSE":
      let randomGroup = gameState.socialGroups!.sort(randomSort)[0];
      let history = [...(gameState.history ?? [])];
      history.push(randomGroup);
      return { ...gameState, history };
    case "QUIT":
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      return { ...initialState };
    default:
      throw new Error(`Unhandled action`);
  }
};

const GameContextProvider = ({ children }: GameProviderProps) => {
  const [gameState, dispatch] = useReducer(gameReducer, initialState);

  useEffect(() => {
    const savedGameState = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (savedGameState) {
      dispatch({ type: "START", payload: JSON.parse(savedGameState) });
    }
  }, []);

  useEffect(() => {
    if (gameState && gameState.murderer) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(gameState));
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
