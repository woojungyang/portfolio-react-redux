import React from 'react';

import styled, { color, media } from '../../style';
import NaviCp from './NaviCp';

const HeaderWrap = styled.header`
  width: 100%;
  position: fixed;
  z-index: 9999;
`;

function HeaderCp() {
  return (
    <HeaderWrap>
      <NaviCp />
    </HeaderWrap>
  );
}

export default React.memo(HeaderCp);
