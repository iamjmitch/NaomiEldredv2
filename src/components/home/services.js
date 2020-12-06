import React from "react"
import styled from "styled-components"

import ServiceBox from "./servicesBox"

import { ContainerGrid } from "../../styles/shared"

import Service1 from "../../assets/img/home/service1.jpg"
import Service2 from "../../assets/img/home/service2.jpg"
import Service3 from "../../assets/img/home/service3.jpg"

const StyledServiceBoxContainer = styled(ContainerGrid)`
  margin-top: 50px;
  max-width: 1280px;
  margin-bottom: 50px;
  grid-gap: 30px;
  box-sizing: border-box;
  align-items: flex-start;
  grid-template-columns: repeat(auto-fit, minmax(254px, 1fr));
  justify-content: space-between;
  @media screen and (max-width: 1300px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 1090px) {
    justify-items: center;
    justify-content: center;

    margin-top: 100px;
  }
  @media screen and (max-width: 950px) {
    grid-gap: 10px;
  }
  @media screen and (max-width: 824px) {
    grid-gap: 5px;
  }

  @media screen and (max-width: 809px) {
    grid-template-columns: repeat(auto-fit, minmax(314px, 1fr));
  }
  @media screen and (max-width: 720px) {
    margin-top: 20px;
    margin-bottom: 0px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 20px;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`

const ServiceBoxContainer = () => {
  return (
    <StyledServiceBoxContainer gridGap="unset">
      <ServiceBox
        title="Weddings"
        subtext="Having years of specialisation in wedding makeup application, Naomi will help ensure your special day is memorable."
        image={Service1}
        dataSal="fade"
      ></ServiceBox>
      <ServiceBox
        title="Formals"
        subtext="With a vast knowledge of formal makeup, Naomi will ensure that you get a look to highlight your formal ensemble"
        image={Service2}
        class="middle"
        dataSal="fade"
      ></ServiceBox>
      <ServiceBox
        title="Special Events"
        subtext="No matter the occasion, Naomi can help give you that perfect look"
        image={Service3}
        dataSal="fade"
      ></ServiceBox>
    </StyledServiceBoxContainer>
  )
}

export default ServiceBoxContainer
