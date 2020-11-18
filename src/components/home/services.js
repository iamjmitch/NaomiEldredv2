import React from "react"
import styled from "styled-components"

import ServiceBox from "./servicesBox"

import { Container, ContainerGrid } from "../../styles/shared"

import Service1 from "../../assets/img/home/service1.jpg"
import Service2 from "../../assets/img/home/service2.jpg"
import Service3 from "../../assets/img/home/service3.jpg"

const StyledServiceBoxContainer = styled(ContainerGrid)`
  margin-top: 200px;
  max-width: 1280px;
  margin-bottom: 200px;
  grid-gap: 10px;
  box-sizing: border-box;
  align-items: flex-start;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-content: space-between;
  @media screen and (max-width: 1300px) {
    padding: 0 10px;
  }
  @media screen and (max-width: 1090px) {
    justify-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 400px);
  }

  @media screen and (max-width: 720px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 20px;
    grid-template-columns: 1fr;
  }
`

const ServiceBoxContainer = () => {
  return (
    <StyledServiceBoxContainer gridGap="unset">
      <ServiceBox
        title="Weddings"
        subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et lacinia ipsum. Donec fermentum dolor at rhoncus aliquam. Curabitur ut."
        image={Service1}
      ></ServiceBox>
      <ServiceBox
        title="Formals"
        subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et lacinia ipsum. Donec fermentum dolor at rhoncus aliquam. Curabitur ut."
        image={Service2}
      ></ServiceBox>
      <ServiceBox
        title="Special Events"
        subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et lacinia ipsum. Donec fermentum dolor at rhoncus aliquam. Curabitur ut."
        image={Service3}
      ></ServiceBox>
    </StyledServiceBoxContainer>
  )
}

export default ServiceBoxContainer
