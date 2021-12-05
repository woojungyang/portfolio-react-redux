import React from 'react';

import styled, { Underline, color, font } from '../style';

const Wrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Content = styled.div`
  color: white;
  width: 730px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled(Underline)`
  font-family: ${font.en};
  text-align: center;
  font-size: 1.8em;
  display: block;
  letter-spacing: 2px;
  margin-bottom: 1.5em;
`;

const AboutPt = styled.p`
  font-family: ${font.kr};
  line-height: 180%;
  font-size: 1.3em;
  span {
    font-size: 1.2em;
    font-style: italic;
    color: ${color.success};
  }
`;

function AboutCp() {
  return (
    <Wrapper>
      <Content>
        <Title>About</Title>
        <AboutPt>
          사용자에게 더 나은 웹서비스 환경을 제공하기 위해 새로운 지식 습득과
          자기개발을 아끼지 않으며 개발의 흐름에 민감하게 반응하는
          <span> '노력형 개발자 양우정' </span> 입니다.
        </AboutPt>
      </Content>
    </Wrapper>
  );
}

export default React.memo(AboutCp);
