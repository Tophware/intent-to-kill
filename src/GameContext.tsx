import React, { createContext, useState } from "react";
import { allSocialGroups, useGameFunctions } from "./hooks/useGameFunctions";
import { useMotives } from "./hooks/useMotives";
import { Character, GameAction, SocialGroup } from "./types";
import { MotiveCard } from "./types/MotiveCard";

const WARNING_MURDERER = "The following screen is for the Murderer only!";
const WARNING_DETECTIVE = "The following screen is for the Detective only!";

type GameState = {
  currentAction?: GameAction;
  socialGroups: SocialGroup[];
  possibleSupporters: SocialGroup[];
  supporters?: SocialGroup;
  motive?: MotiveCard;
  history: SocialGroup[];
  characters: Character[];
  murderer?: Character;
  personOfInterest?: Character;
  showWarning: boolean;
  warningMessage?: string;
  selectSupporters: (supporters: SocialGroup) => void;
  initGame: () => void;
  quit: () => void;
  showCharacters: () => void;
  showActionSelection: () => void;
  firehouse: () => void;
  showHistory: () => void;
  showMotive: () => void;
  showPossibleSupporters: () => void;
  dismissWarning: () => void;
};

// Define the initial state of the game
const initialState: GameState = {
  socialGroups: [],
  possibleSupporters: [],
  supporters: undefined,
  history: [],
  characters: [],
  murderer: undefined,
  personOfInterest: undefined,
  showWarning: false,
  warningMessage: WARNING_MURDERER,
  selectSupporters: () => {},
  showCharacters: () => {},
  initGame: () => {},
  showActionSelection: () => {},
  firehouse: () => {},
  showMotive: () => {},
  showHistory: () => {},
  showPossibleSupporters: () => {},
  dismissWarning: () => {},
  quit: () => {},
};

// Create the GameContext
export const GameContext = createContext(initialState);

type GameProviderProps = {
  children?: React.ReactNode;
};

// Create the GameProvider component
export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const { getCharacters, getSupporters, getMotive } = useGameFunctions();
  const { starterMotives } = useMotives();

  const [gameState, setGameState] = useState(initialState);

  const quit = () => {
    setGameState(initialState);
  };

  const initGame = () => {
    let possibleSupporters = getSupporters(3);
    let socialGroups = allSocialGroups().filter(
      (g) => !possibleSupporters.includes(g)
    );
    let characters = getCharacters(20);
    let motive = getMotive(starterMotives);

    let suspects = [...characters].sort(() => Math.random() - 0.5).slice(0, 2);
    let murderer = suspects[0];
    let personOfInterest = suspects[1];

    setGameState((prevState) => ({
      ...prevState,
      currentAction: GameAction.ShowActions,
      socialGroups,
      possibleSupporters,
      motive,
      characters,
      murderer,
      personOfInterest,
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
      showWarning: true,
      warningMessage: WARNING_MURDERER,
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
      showWarning: true,
      currentAction: GameAction.SelectKillerSupporters,
    }));
  };

  const dismissWarning = () => {
    setGameState((prevState) => ({
      ...prevState,
      showWarning: false,
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
        dismissWarning,
        quit,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
