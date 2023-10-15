import React from "react";

const ButtonKFP = ({ theBest, handleClickTheBest, handleClickTheBest2, poKFP }) => {
    return (
        <>
            <div className="btn-container">
                {theBest > 0 ? (<button className="btn-status" onClick={handleClickTheBest2}>Précédent</button>) : null}
                {theBest < poKFP.length - 1 ? (<button className="btn-status" onClick={handleClickTheBest}>Suivant</button>) : null}
            </div>
        </>
    )
}

export default ButtonKFP;