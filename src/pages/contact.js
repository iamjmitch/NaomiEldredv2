import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container, HeadingH1, Paragraph } from "../styles/shared"
import Layout from "../components/global/layout"
import PageHeader from "../components/global/pageHeader"
import ContactForm from "../components/contact/contact"

const ContactPage = props => {
  return (
    <Layout margin="112.578px 0 0 0" pageName="contact" title="Contact Naomi">
      <PageHeader title="Contact Naomi" />
      <Paragraph
        fontSize="18px"
        lineHeight="30px"
        textAlign="center"
        padding="0 10px 50px 10px"
      >
        Please use the below form to get in contact with Naomi.
      </Paragraph>
      <ContactForm />
    </Layout>
  )
}

export default ContactPage
