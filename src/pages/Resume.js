import React from 'react';
import AboutCp from '../components/AboutCp';

import HeaderCp from '../components/inc/HeaderCp';
import ResumeCp from '../components/ResumeCp';

function Resume() {
  return (
    <div>
      <HeaderCp />
      <ResumeCp />
    </div>
  );
}

export default React.memo(Resume);
