import PropTypes from "prop-types";

const Header = (props) => {
    const { title, title2 } = props;
    return (
        <header>
            <h2 className="title">{title}</h2>
            <h2 className="title2">{title2}</h2>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;