import React from 'react';

import styled, { Underline, color, font } from '../style';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

import bg from '../assets/img/background.mp4';

const Wrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  color: white;
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    font-size: 2em;
    font-weight: 500;
    margin: 2em 0;
  }
`;

const Title = styled(Underline)`
  font-family: ${font.en};
  text-align: center;
  font-size: 1.8em;
  display: block;
  letter-spacing: 2px;
  margin-bottom: 1.5em;
`;

const Button = styled.div`
  margin-top: 0.5em;
  display: inline-block;
  padding: 0.5em;
  border: 1px solid red;
  background-color: grey;
`;

const CareerWrapper = styled.div`
  display: flex;
  width: 101%;
  flex-wrap: nowrap;
`;
const Date = styled.div`
  width: 18%;
  margin-right: 2%;
`;
const Career = styled.div`
  width: 80&;
  line-height: 180%;
`;

function ResumeCp() {
  return (
    <Wrapper>
      <Content>
        <div>
          <Title>Résumé</Title>
          <h1>
            양우정 <small>(Yang WooJung)</small>
          </h1>
          <Button>
            <a href={bg} download>
              이력서 다운로드
            </a>
          </Button>
          <li>
            <PhoneAndroidIcon /> 010.9477.8896
          </li>
          <li>
            <GitHubIcon /> GitHub | https://https://github.com/woojungyang
          </li>
          <li>
            <MailIcon /> woojungyang1113@google.com
          </li>
        </div>
        <h1>경력사항</h1>
        <CareerWrapper>
          <Date>2018.7~2018.8</Date>
          <Career>
            다인커뮤니티 (Dain Community) / 인턴 <br />
            네이버 블로그 게시글 업로드, 홈페이지형 블로그 스킨 디자인 및 관리
          </Career>
          <Date>2018.7~2018.8</Date>
          <Career>
            다인커뮤니티 (Dain Community) / 인턴 <br />
            네이버 블로그 게시글 업로드, 홈페이지형 블로그 스킨 디자인 및 관리
          </Career>
          <Date>2018.7~2018.8</Date>
          <Career>
            다인커뮤니티 (Dain Community) / 인턴 <br />
            네이버 블로그 게시글 업로드, 홈페이지형 블로그 스킨 디자인 및 관리
          </Career>
        </CareerWrapper>
      </Content>
    </Wrapper>
  );
}

export default React.memo(ResumeCp);
