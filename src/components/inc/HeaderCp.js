import React from 'react';

import styled, { color, media } from '../../style';
import NaviCp from './NaviCp';

const HeaderWrap = styled.header`
  border-bottom: 1px solid ${color.lightBlack};
  opacity: 0.7;
  width: 100%;
`;

function HeaderCp() {
  return (
    <HeaderWrap>
      <NaviCp />
    </HeaderWrap>
  );
}

export default React.memo(HeaderCp);
