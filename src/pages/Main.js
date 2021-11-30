import React from 'react';
import ReactDOM from 'react-dom';
import styled from '../style';

import TypeWriter from '../components/Typewriter';
import HeaderCp from '../components/inc/HeaderCp';

import bg from '../assets/img/background.mp4';

const typeWriter = [
  '<portfoilo / >',
  'Hello:D',
  `<I'm Web-Developer / >`,
  `<I'm front-end Developer / >`,
];

const BgWrapper = styled.div`
  opacity: 0.5;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0px auto;
  position: relative;
`;

const WrapperText = styled.div`
  margin: auto;
  position: absolute;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const Writing = styled.div`
  text-align: center;
  .typewriter-holder {
    display: block;
    margin: auto;
    p {
      color: white;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: bold;
      font-size: 3em;
    }
  }
`;

function Main() {
  const rootElement = document.getElementById('root');

  return (
    <BgWrapper>
      <HeaderCp />
      <video autoplay muted width="100%">
        <source src={bg} type="video/mp4" />
      </video>
      <WrapperText>
        <Writing>
          <div className="typewriter-holder">
            <p>
              <TypeWriter data={typeWriter} />
            </p>
          </div>
        </Writing>
      </WrapperText>
    </BgWrapper>
  );
}

export default React.memo(Main);
