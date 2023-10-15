import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: brown;
  font-size: 2rem;
  color: white; // Ajoutez la couleur de texte souhaitée
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
