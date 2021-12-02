import React from 'react';

import styled, { Underline } from '../style';

import img from '../assets/img/photo.png';
import { style } from 'dom-helpers';

const Wrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Content = styled.div`
  color: white;
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled(Underline)`
  text-align: center;
  font-size: 1.8em;
  display: block;
  letter-spacing: 2px;
  margin-bottom: 1.5em;
`;

const AboutPt = styled.p`
 line-height: 120%;
 font-size: 1.3em;
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
          <strong> 노력형 개발자 양우정 </strong> 입니다.
        </AboutPt>
      </Content>
    </Wrapper>
  );
}

export default React.memo(AboutCp);
