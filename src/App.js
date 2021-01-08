import React, { useState } from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import Game from "./components/Game.jsx";
import Finish from "./components/Finish.jsx";
import spiderman from "./images/bee.jpg";
import batman from "./images/bird.jpg";
import hulk from "./images/flower.jpg";
import ironman from "./images/gina.jpg";
import deadpool from "./images/updown.png";
import parpar from "./images/parpar.jpg";
import horse from "./images/horse.jpeg";
import kinor from "./images/kinor.jpg";



function App() {
  const [cards, setcards] = useState([
    spiderman,
    spiderman,
    batman,
    batman,
    hulk,
    hulk,
    ironman,
    ironman,
    deadpool,
    deadpool,
    parpar,
    parpar,
    horse,
    horse,
    kinor,
    kinor
  ]);
  const [players, setPlayers] = useState({});
  const [firstCard, setFirstCard] = useState("");
  const [firstIndex, setFirstIndex] = useState("");
  const [counter, setCounter] = useState(0);
  const [flag2, setFlag2] = useState([]);
  const [flag, setFlag] = useState(false);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [disable, setDisable] = useState("");
  const [border, setborder] = useState([]);
  const [gameTied, setGameTied] = useState(false);
  const [animation, setAnimation] = useState([]);
  const [cardClass, setCardClass] = useState([]);
  const [flag3, setFlag3] = useState([]);

  const resetScore = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
  };

  const changeBorder = (i) => {
    let temp = [...border];
    let temp2 = [...animation];

    temp[i] = "3px solid blue";
    temp2[i] = "animate 0.5s";
    setAnimation([...temp2]);
    setborder([...temp]);
  };

  const disableLink = (x) => {
    setDisable("none");
    setTimeout(() => {
      setDisable("");
    }, x);
  };

  const addScore = () => {
    if (!flag) {
      setPlayer1Score(player1Score + 1);
    } else {
      setPlayer2Score(player2Score + 1);
    }
  };
  const addWin = () => {
    let temp = { ...players };
    let temp1 = player1Score;
    let temp2 = player2Score;
    if (!flag) {
      temp1++;
    } else {
      temp2++;
    }
    if (temp1 > temp2) {
      temp.player1.win = temp.player1.win + 1;
      setPlayers({ ...temp });
      setFlag(false);
    } else if (temp2 > temp1) {
      temp.player2.win = temp.player2.win + 1;
      setPlayers({ ...temp });
      setFlag(true);
    } else {
      setGameTied(true);
    }
  };
  const resetGameTied = () => {
    setGameTied(false);
  };

  const delete2Cards = (x, y) => {
    let temp = [...border];
    let temp2 = [...animation];
    let temp3 = [...flag3];
    let temp4 = [...cardClass];
    temp[x] = "";
    temp[y] = "";
    temp2[x] = "";
    temp2[y] = "";
    temp3[x] = true;
    temp3[y] = true;
    temp4[x] = "Card2";
    temp4[y] = "Card2";
    setborder([...temp]);
    setAnimation([...temp2]);
    setFlag3([...temp3]);
    setCardClass([...temp4]);
  };

  const val2 = () => {
    let counter = 0;
    flag3.map((e) => {
      if (e == true) {
        counter++;
      }
    });
    if (counter == flag3.length - 2) {
      return true;
    } else {
      return false;
    }
  };

  const changeFlag = () => {
    setFlag(!flag);
  };

  const val = (e, i, x) => {
    changeBorder(i);
    let secondCardd = "";
    if (firstCard == "") {
      x.preventDefault();
      setFirstCard(e);
      setFirstIndex(i);
      changeFlag2(i);
      setCounter(counter + 1);
      disableLink(500);
      setTimeout(() => {
        resetAnimation();
      }, 500);
    } else {
      secondCardd = e;
      if (firstCard == secondCardd && val2() == true) {
        addWin();
        resetCounter();
        delete2Cards(firstIndex, i);
        resetFlag2();
      } else if (firstCard == secondCardd) {
        x.preventDefault();
        addScore();
        changeFlag2(i);
        resetCounter();
        disableLink(1000);
        setTimeout(() => {
          resetAnimation();
          delete2Cards(firstIndex, i);
        }, 1000);
      } else if (firstCard !== secondCardd) {
        x.preventDefault();
        changeFlag2(i);
        resetCounter();
        disableLink(1000);
        setTimeout(() => {
          resetAnimation();
          resetBorder(firstIndex, i);
          resetFlag2(firstIndex, i);
          changeFlag();
        }, 1000);
      }
    }
  };

  const resetCounter = () => {
    setCounter(0);
    setFirstCard("");
  };

  const changeFlag2 = (i) => {
    let temp = flag2;
    temp[i] = !temp[i];
    setFlag2([...temp]);
  };

  const generateIdPerCard = () => {
    let temp = [];
    let temp2 = [];
    let temp3 = [];
    let temp4 = [];
    let temp5 = [];
    cards.map((e) => {
      temp.push(false);
      temp2.push("3px solid black");
      temp3.push("");
      temp4.push("Card3");
      temp5.push(false);
    });
    setFlag2([...temp]);
    setborder([...temp2]);
    setAnimation([...temp3]);
    setCardClass([...temp4]);
    setFlag3([...temp5]);
  };

  const resetFlag2 = (x, y) => {
    let temp = [...flag2];
    temp[x] = false;
    temp[y] = false;
    setFlag2([...temp]);
  };

  const resetBorder = (x, y) => {
    let temp = [...border];
    temp[x] = "3px solid black";
    temp[y] = "3px solid black";
    setborder([...temp]);
  };
  const resetBorder2 = () => {
    let temp = [...border];
    let temp2 = [...flag3];
    let temp3 = [...flag2];
    temp.map((e, index) => {
      temp[index] = "3px solid black";
      temp2[index] = false;
      temp3[index] = false;
    });
    setborder([...temp]);
    setFlag3([...temp2]);
    setFlag2([...temp3]);
  };

  const resetAnimation = () => {
    let temp = [...animation];
    animation.map((e, index) => {
      temp[index] = "";
    });
    setAnimation([...temp]);
  };

  const addPlayers = (x, y) => {
    setPlayers({ player1: { name: x, win: 0 }, player2: { name: y, win: 0 } });
  };
  const shuffle = () => {
    let result = [];
    let temp = [...cards];
    cards.map((e) => {
      let temp2 = Math.floor(Math.random() * temp.length);
      result.push(temp[temp2]);
      temp.splice(temp2, 1);
    });
    setcards([...result]);
  };
  const newGame = () => {
    shuffle();
    resetBorder2();
    resetGameTied();
    resetScore();
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return (
                <HomePage
                  generateIdPerCard={generateIdPerCard}
                  shuffle={shuffle}
                  addPlayers={addPlayers}
                />
              );
            }}
          />
          <Route
            exact
            path="/game"
            component={() => {
              return (
                <Game
                  flag3={flag3}
                  cardClass={cardClass}
                  animation={animation}
                  border={border}
                  disable={disable}
                  firstIndex={firstIndex}
                  delete2Cards={delete2Cards}
                  flag={flag}
                  changeFlag={changeFlag}
                  resetFlag2={resetFlag2}
                  resetCounter={resetCounter}
                  counter={counter}
                  firstCard={firstCard}
                  val={val}
                  flag2={flag2}
                  changeFlag2={changeFlag2}
                  cards={cards}
                  players={players}
                />
              );
            }}
          />
          <Route
            exact
            path="/finish"
            component={() => {
              return (
                <Finish
                  gameTied={gameTied}
                  newGame={newGame}
                  flag={flag}
                  players={players}
                />
              );
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
