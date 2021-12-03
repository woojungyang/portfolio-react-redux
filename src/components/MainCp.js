import React from 'react';
import ReactDOM from 'react-dom';
import styled, { media } from '../style';
import { Typing } from 'typing-effect-reactjs';

import bg from '../assets/img/background.mp4';

const typeWriter = ['Hello :D', '<portfolio / >', `<I'm Web-Developer / >`];

const BgWrapper = styled.div`
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0px auto;
  position: relative;
  z-index: -1;
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
  display: block;
  margin: auto;
  letter-spacing: 2;
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
          <div>
            <Typing
              text={typeWriter}
              typeSpeed={300}
              deldteSpeed={300}
              disableBlinkingOnEnd={50}
              blinkingSpeed={0}
              letterSpacing={40}
              cursorColor=white
              smartBackspace={true}
            />
          </div>
        </Writing>
      </WrapperText>
    </BgWrapper>
  );
}

export default React.memo(MainCp);
