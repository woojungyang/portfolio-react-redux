import React from 'react';
import { Link } from 'react-router-dom';

import styled, { font, media, Underline } from '../../style';

const Wrapper = styled.div`
  width: 300px;
  height: 100px;
  position: absolute;
  top: 3.5em;
  right: 0;
`;

const NaviLink = styled(Link)`
  list-style: none;
  margin: 1em;
  font-family: ${font.en};
  font-weight: 500;
  font-size: 1.15em;
  align-items: center;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  &:active {
    color: red;
  }
  @media ${media.sm} {
    display: none;
  }
`;

function NaviMbCp() {
  return (
    <Wrapper >
      <NaviLink to="/about">About</NaviLink>
      <NaviLink to="/resume">Résumé</NaviLink>
      <NaviLink to="/skills">Skills</NaviLink>
      <NaviLink to="/works">Works</NaviLink>
    </Wrapper>
  );
}

export default NaviMbCp;
