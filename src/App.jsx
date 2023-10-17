import React, { useState } from "react"
import Header from "./components/Header";
import CardKFP from "./components/CardKFP";
import ButtonKFP from "./components/ButtonKFP";
import poKFP from "./components/datas/dataKFP";
import dataNinjaturtles from "./components/datas/dataNT";
import "./App.scss"



const App = () => {
  const [theBest, setTheBest] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const [switchTheme, setSwitchTheme] = useState(poKFP)
  const [previousTheme, setPreviousTheme] = useState(poKFP)

  const handleClickTheBest = () => {
    setAnimationClass("rotate");
    setTimeout(() => {
      setTheBest((prev) => (prev === switchTheme.length - 1 ? 0 : prev + 1));
      setAnimationClass("");
    }, 500);
  };

  const handleClickTheBest2 = () => {
    setAnimationClass("rotate");
    setTimeout(() => {
      setTheBest((prev) => (prev === 0 ? switchTheme.length - 1 : prev - 1));
      setAnimationClass("");
    }, 500);
  };

  const handleChangeTheme = (e) => {
    setPreviousTheme(switchTheme)
    setSwitchTheme(e)
  };
  const handleprevious = () =>
    setSwitchTheme(previousTheme)

  return (
    <>
      <Header
        title="KUNG FU PANDA"
        title2="NINJA TURTLE"
        changeTheme={() => handleChangeTheme(dataNinjaturtles)}
        changePreviousTheme = {() => handleprevious(poKFP)}
      />
      <div className="cards">
        <div className={`card-container ${animationClass}`}>
          <CardKFP theGoat={switchTheme[theBest]} />
          <ButtonKFP
            theBest={theBest}
            poKFP={switchTheme}
            handleClickTheBest={handleClickTheBest}
            handleClickTheBest2={handleClickTheBest2}
          />
        </div>
      </div>
    </>
  );
};

export default App;
