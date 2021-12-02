import React from 'react';
import ReactDOM from 'react-dom';
import styled, { media } from '../style';

import HeaderCp from '../components/inc/HeaderCp';
import MainCp from '../components/MainCp';

function Main() {
  return (
    <div>
      <HeaderCp />
      <MainCp />
    </div>
  );
}

export default React.memo(Main);
