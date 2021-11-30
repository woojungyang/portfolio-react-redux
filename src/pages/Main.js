import React from 'react';
import styled from '@emotion/styled';

import HeaderCp from '../components/inc/HeaderCp';

const Wrapper = styled.div`
  margin: auto;
`;

function Main() {
  return (
    <Wrapper>
      <HeaderCp />
    </Wrapper>
  );
}

export default React.memo(Main);
