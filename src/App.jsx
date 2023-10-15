import React, { useState } from "react"
import Header from "./components/Header";
import CardKFP from "./components/CardKFP";
import ButtonKFP from "./components/ButtonKFP";
import "./App.scss"

const poKFP = [
  {
    imgSrc: "https://media.giphy.com/media/QxZ0nbcVgMlPlnfZos/giphy.gif",
    name: "Phrase Culte 1",
    type: "Gif-1",
    description: "On ne facture pas la toplessitude et la séductivité.",
  },
  {
    imgSrc: "https://media.giphy.com/media/l3gINBItpGid51yBrR/giphy.gif",
    name: "Phrase Culte 2",
    type: "Gif-2",
    description: "La légende parle d'un héros de légende dont sa maîtrise du Kung Fu était carrément légendaire.",
  },
  {
    imgSrc: "https://media.giphy.com/media/fUSX3E4imAn9WHwrCV/giphy.gif",
    name: "Phrase Culte 3",
    type: "Gif-3",
    description: "Hier est derrière, demain est un mystère, et aujourd'hui est un cadeau, c'est pour cela qu'on l'appelle le présent.",
  },
];

const App = () => {
  const [theBest, setTheBest] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const handleClickTheBest = () => {
    setAnimationClass("rotate");
    setTimeout(() => {
      setTheBest((prev) => (prev === poKFP.length - 1 ? 0 : prev + 1));
      setAnimationClass("");
    }, 500);
  };

  const handleClickTheBest2 = () => {
    setAnimationClass("rotate");
    setTimeout(() => {
      setTheBest((prev) => (prev === 0 ? poKFP.length - 1 : prev - 1));
      setAnimationClass("");
    }, 500);
  };

  return (
    <>
      <Header title="KUNG FU PANDA" />
      <div className="cards">
        <div className={`card-container ${animationClass}`}>
          <CardKFP theGoat={poKFP[theBest]} />
          <ButtonKFP
            theBest={theBest}
            poKFP={poKFP}
            handleClickTheBest={handleClickTheBest}
            handleClickTheBest2={handleClickTheBest2}
          />
        </div>
      </div>
    </>
  );
};

export default App;
