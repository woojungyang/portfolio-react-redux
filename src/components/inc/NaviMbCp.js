import React from 'react';
import { Link } from 'react-router-dom';

import styled, { font, color } from '../../style';

const Wrapper = styled.div`
  width: 300px;
  height: 100vh;
  position: absolute;
  top: 3.5em;
  right: 0;
`;
const Navi = styled.li`
  list-style: none;
  margin: 1em;
  font-family: ${font.en};
  font-weight: 500;
  font-size: 1.15em;
  align-items: center;
  cursor: pointer;
`;

function NaviMbCp() {
  return (
    <Wrapper>
      <Navi>
        <Link to="#about">About</Link>
      </Navi>
      <Navi>
        <Link to="#resume">Résumé</Link>
      </Navi>
      <Navi>
        <Link to="#skills">Skills</Link>
      </Navi>
      <Navi>
        <Link to="#works">Works</Link>
      </Navi>
    </Wrapper>
  );
}

export default NaviMbCp;
