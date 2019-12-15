import React from 'react';
import styled from 'styled-components';
import {IoIosPin} from 'react-icons/io';

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 2vh;
  display: grid;
  grid-template-rows: 40% 60%;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 20vh;
  height: 20vh;
  border-radius: 50%;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    margin-bottom: 1vh;
    color: ${props => props.theme.greyColor};
  }
  div:nth-child(-n+4) {
    color: ${props => props.theme.darkBlueColor};
  }
  div:nth-child(n+9) {
    font-weight: bold; 
  }
`;


const AboutMe = () => {
    const IMG_LINK = "https://media.licdn.com/dms/image/C4D03AQEA8pVAQiaNUA/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=aWFuACef7Oo3ebfdBy-xEwNfYq3lWHwH2I_T8xTt5CE";
    const GIT_HUB_LINK = "https://github.com/musickiper";
    const LINKED_IN_LINK = "https://www.linkedin.com/in/james-jung-b45404139/";
    const RESUME_LINK = "https://github.com/musickiper/Younsung-s/blob/master/resume_JamesJung.pdf";

    return (
        <Container>
            <ImageBox>
                <Image src={IMG_LINK}/>
            </ImageBox>
            <TextBox>
                <hr/>
                <div>James Jung</div>
                <div>Seneca College Graduate (CPD)</div>
                <div><IoIosPin/> Toronto, CA</div>
                <hr/>
                <div>Hi, I'm an entry level developer and currently living in Toronto, CA.</div>
                <div>I love making new things, and studying new skills.</div>
                <div>I am actively looking for a full-stack, or a front-end developer position.</div>
                <hr/>
                <div>Github: <a href={GIT_HUB_LINK} target={"_blank"}>link</a></div>
                <div>LinkedIn: <a href={LINKED_IN_LINK} target={"_blank"}>link</a></div>
                <div>Resume: <a href={RESUME_LINK} target={"_blank"}>link</a></div>
            </TextBox>
        </Container>
    );
};

export default AboutMe;
