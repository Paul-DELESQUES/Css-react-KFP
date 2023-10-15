import PropTypes from "prop-types";

const Header = (props) => {
    const { title } = props;
    return (
        <header>
            <h1 className="title">{title}</h1>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;