import React from "react"

import { Paragraph } from "../styles/shared"
import Layout from "../components/global/layout"
import PageHeader from "../components/global/pageHeader"
import ContactForm from "../components/contact/contact"

const ContactPage = props => {
  return (
    <Layout
      margin="112.578px 0 0 0"
      pageName="contact"
      title="Contact Naomi"
      description="Book an appointment - Naomi Eldred Makeup Artist North lakes and Mango Hill"
    >
      <PageHeader title="Contact Naomi" />
      <Paragraph
        fontSize="18px"
        lineHeight="30px"
        textAlign="center"
        padding="0 10px 50px 10px"
        data-sal="slide-right"
        data-sal-delay="100"
        data-sal-easing="ease"
        other="b{font-weight:600;color:rgb(196, 70, 119);}"
      >
        <b>Naomi Is Not Currently Taking On Any New Clients</b>
        <br></br>
        Due To A Large Volume Of Bookings, Naomi Is Currently Unable To Take On
        New Bookings <br></br>This Page Will Be Updated Once New Booking Are
        Being Accepted
      </Paragraph>
      {/* <ContactForm /> */}
    </Layout>
  )
}

export default ContactPage
