import React from 'react';
import { Link } from 'react-router-dom';

import styled, { color, media, font } from '../../style';
import NaviCp from './NaviCp';

const HeaderWrap = styled.header`
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  z-index: 9999;
  @media ${media.sm} {
    background-color: rgba(1, 1, 1, 0.5);
  }
`;

const LogoCp = styled(Link)`
  font-size: 1.3em;
  margin: 1em;
  font-weight: 500;
  color: ${color.light};
  font-family: ${font.en};
  font-style: italic;
  text-decoration: underline;
`;

function HeaderCp() {
  return (
    <HeaderWrap>
      <LogoCp to="/"> woojung.dev</LogoCp>
      <NaviCp />
    </HeaderWrap>
  );
}

export default React.memo(HeaderCp);
