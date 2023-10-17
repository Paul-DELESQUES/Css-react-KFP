import React, { useState } from "react"
import Header from "./components/Header";
import CardKFP from "./components/CardKFP";
import ButtonKFP from "./components/ButtonKFP";
import poKFP from "./components/datas/dataKFP";
import dataNinjaturtles from "./components/datas/dataNT";
import "./components/Styles/App.scss"
import "./components/Styles/KFP.scss"
import "./components/Styles/NinjaTurtles.scss"



const App = () => {
  const [theBest, setTheBest] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const [switchTheme, setSwitchTheme] = useState(poKFP)
  const [previousTheme, setPreviousTheme] = useState(poKFP)

  // fonctions animations 
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

  // fontions changement de theme KFP ou NT
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
        title2="NINJA TURTLES"
        changeTheme={() => handleChangeTheme(dataNinjaturtles)}
        changePreviousTheme={() => handleprevious(poKFP)}
      />
      <div className={`cards" ${switchTheme === poKFP ? 'KFP' : 'NinjaTurtles'}`}>
        <div className={`card-container ${animationClass} ${switchTheme === poKFP ? 'container-KFP' : 'container-ninjaTurtles'} ${switchTheme[theBest].isLast ? "card-team" : ""}`}>
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
