import React, { createContext, useState } from "react";
import { allSocialGroups, useGameFunctions } from "./hooks/useGameFunctions";
import { Character, GameAction, MotiveCard, SocialGroup } from "./types";

type GameState = {
  currentAction?: GameAction;
  socialGroups: SocialGroup[];
  possibleSupporters: SocialGroup[];
  supporters?: SocialGroup;
  motive?: MotiveCard;
  history: SocialGroup[];
  characters: Character[];
  selectSupporters: (supporters: SocialGroup) => void;
  initGame: () => void;
  showCharacters: () => void;
  showActionSelection: () => void;
  firehouse: () => void;
  showHistory: () => void;
  showMotive: () => void;
  showPossibleSupporters: () => void;
};

// Define the initial state of the game
const initialState: GameState = {
  socialGroups: [],
  possibleSupporters: [],
  supporters: undefined,
  history: [],
  characters: [],
  selectSupporters: () => {},
  showCharacters: () => {},
  initGame: () => {},
  showActionSelection: () => {},
  firehouse: () => {},
  showMotive: () => {},
  showHistory: () => {},
  showPossibleSupporters: () => {},
};

// Create the GameContext
export const GameContext = createContext(initialState);

type GameProviderProps = {
  children?: React.ReactNode;
};

// Create the GameProvider component
export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const { getCharacters, getSupporters, getMotive } = useGameFunctions();

  const [gameState, setGameState] = useState(initialState);

  const initGame = () => {
    let possibleSupporters = getSupporters(3);
    let socialGroups = allSocialGroups().filter(
      (g) => !possibleSupporters.includes(g)
    );
    let characters = getCharacters(20);
    let motive = getMotive();

    setGameState((prevState) => ({
      ...prevState,
      currentAction: GameAction.ShowCharacters,
      socialGroups,
      possibleSupporters,
      motive,
      characters,
      killerChoice: undefined,
      history: [],
    }));
  };

  const selectSupporters = (supporters: SocialGroup) => {
    if (!gameState.possibleSupporters.includes(supporters)) {
      console.error("Invalid supporter");
    } else if (gameState.supporters) {
      console.error("Supporter already selected");
    } else {
      setGameState((prevState) => ({
        ...prevState,
        supporters,
        currentAction: GameAction.ShowActions,
      }));
    }
  };

  const showMotive = () => {
    setGameState((prevState) => ({
      ...prevState,
      currentAction: GameAction.ShowMotive,
    }));
  };

  const showCharacters = () => {
    setGameState((prevState) => ({
      ...prevState,
      currentAction: GameAction.ShowCharacters,
    }));
  };

  const showActionSelection = () => {
    setGameState((prevState) => ({
      ...prevState,
      currentAction: GameAction.ShowActions,
    }));
  };

  const firehouse = () => {
    let history = gameState.history;
    let randomSocialGroup = gameState.socialGroups.sort(
      () => Math.random() - 0.5
    )[0];
    history.push(randomSocialGroup);
    setGameState((prevState) => ({
      ...prevState,
      currentAction: GameAction.Firehouse,
      history,
    }));
  };

  const showHistory = () => {
    setGameState((prevState) => ({
      ...prevState,
      currentAction: GameAction.ShowHistory,
    }));
  };

  const showPossibleSupporters = () => {
    setGameState((prevState) => ({
      ...prevState,
      currentAction: GameAction.SelectKillerSupporters,
    }));
  };

  return (
    <GameContext.Provider
      value={{
        ...gameState,
        initGame,
        selectSupporters,
        showCharacters,
        showActionSelection,
        firehouse,
        showHistory,
        showMotive,
        showPossibleSupporters,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
