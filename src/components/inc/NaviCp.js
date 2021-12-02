import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styled, { font, media, Underline } from '../../style';
import AlignHorizontalRightSharpIcon from '@mui/icons-material/AlignHorizontalRightSharp';
import NaviMbCp from './NaviMbCp';

const NaviWrapper = styled.ul`
  color: white;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const NaviWrap = styled.ul`
  display: flex;
`;
const NaviLink = styled(Link)`
  list-style: none;
  margin: 1.5em;
  font-family: ${font.en};
  font-weight: 400;
  font-size: 1.2em;
  align-items: center;
  cursor: pointer;
  @media ${media.sm} {
    display: none;
  }
`;

const MbWrapRel = styled.ul`
  position: relative;
`;
const Mbbutton = styled.li`
  display: none;
  @media ${media.sm} {
    font-weight: 500;
    margin: 1em;
    font-family: ${font.en};
    font-size: 1.15em;
    cursor: pointer;
    display: block;
  }
`;

function NaviCp() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleChange = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <NaviWrapper>
      <NaviWrap>
        <NaviLink to="/about">About</NaviLink>
        <NaviLink to="/resume">Résumé</NaviLink>
        <NaviLink to="/skills">Skills</NaviLink>
        <NaviLink to="/works">Works</NaviLink>
      </NaviWrap>
      <MbWrapRel>
        <Mbbutton>
          <AlignHorizontalRightSharpIcon onClick={toggleChange} />
          {toggleMenu === true ? <NaviMbCp /> : ''}
        </Mbbutton>
      </MbWrapRel>
    </NaviWrapper>
  );
}

export default React.memo(NaviCp);
