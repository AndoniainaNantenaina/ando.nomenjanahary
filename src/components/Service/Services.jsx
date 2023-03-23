import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import { FaCode } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={FaCode}
            title={"Developer"}
            disc={`Jeune développeur motivé, accpetant les propositions de projets web et mobiles.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={IoIosPeople}
            title={"Community Manager"}
            disc={`2022-2023 Lead of Google Developer Student Club ESTI : an school based community 
            that group students passionate with Google Development Technologies.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={MdDesignServices}
            title={"UI/UX Designer"}
            disc={`Passionate about UI/UX Design, I'm always looking for new ways to improve my skills.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
