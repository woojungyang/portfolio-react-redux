import React from 'react';
import ReactDOM from 'react-dom';
import styled, { media } from '../style';

import TypeWriter from '../modules/Typewriter';

import bg from '../assets/img/background.mp4';

const typeWriter = [
  // '<portfoilo / >',
  'Hello :D',
  `<I'm Web-Developer / >`,
  `<I'm front-end Developer / >`,
];

const BgWrapper = styled.div`
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0px auto;
  position: relative;
  /* @media ${media.sm} {
    background-color: black;
  } */
`;

const WrapperText = styled.div`
  margin: auto;
  position: absolute;
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
      font-size: 2.5em;
      @media ${media.sm} {
        font-size: 2em;
      }
    }
  }
`;

const VideoCp = styled.video`
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  overflow: hidden;
`;

function MainCp() {
  const rootElement = document.getElementById('root');

  return (
    <BgWrapper>
      <VideoCp autoPlay muted loop width="100%">
        <source src={bg} type="video/mp4" />
      </VideoCp>
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

export default React.memo(MainCp);
