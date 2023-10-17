import React, { useState } from "react";
import PropTypes from "prop-types";

const Header = (props) => {
    const { title, title2, changeTheme, changePreviousTheme } = props;
    const [stylePage, setStylePage] = useState({e: "KFP", background: ""}) // creation de l'état pour modifier le style suivant le theme


    // fonction pour changement de style quand le choisi le theme NT
    const handleStylePage = () => {
        changeTheme(); 
        setStylePage({
            e: stylePage.e === "KFP" ? "NINJA TURTLES" : "KFP",
            background: stylePage.e === "KFP" ? "nt-background" : "" })
    }
    
    return (
        <header className="stylePage.background">
            <h2 className="title" onClick={() => changePreviousTheme()}>{title}</h2>
            <h2 className="title2" onClick={() => handleStylePage()}>{title2}</h2>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    changeTheme: PropTypes.func.isRequired,
    changePreviousTheme: PropTypes.func.isRequired,
};

export default Header;