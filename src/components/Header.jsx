import PropTypes from "prop-types";

const Header = (props) => {
    const { title, title2, changeTheme, changePreviousTheme } = props;
    return (
        <header>
            <h2 className="title" onClick={() => changePreviousTheme()}>{title}</h2>
            <h2 className="title2" onClick={() => changeTheme()}>{title2}</h2>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;