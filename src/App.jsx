import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import GameBoard from "./components/GameBoard";
import Banner from "./components/Banner";

import { GAME_STATUS } from "./constants";

const useStyles = createUseStyles({
  "@global": {
    "html, body": {
      margin: 0,
    },
    "*": {
      fontFamily: "arial",
      boxSizing: "border-box",
    },
  },
  header: {
    textAlign: "center",
  },
  footer: {
    textAlign: "center",
    padding: "12px 0",
  },
  root: {},
});

const App = () => {
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.CREATING);
  const [gameResults, setGameResults] = useState({});

  const classes = useStyles();

  const handleStatusUpdate = (newStatus, results) => {
    setGameStatus(newStatus);
    if (newStatus === GAME_STATUS.FINISHED) {
      setGameResults(results);
    }
  };

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <h1>Card Match Game</h1>
      </header>
      <div>
        <GameBoard gameStatus={gameStatus} onGameUpdate={handleStatusUpdate} />
        {gameStatus === GAME_STATUS.FINISHED && (
          <Banner onReset={handleStatusUpdate} results={gameResults} />
        )}
      </div>
    </div>
  );
};

export default App;
