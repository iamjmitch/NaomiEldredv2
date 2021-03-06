import React, { useState } from "react"
import styled from "styled-components"
import { Container, HeadingH2 } from "../../styles/shared"
import { FONT_FAMILY } from "../../styles/typography"
import { PINK } from "../../styles/colors"
import Button from "@material-ui/core/Button"

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
`
const LineWrapper = styled(Container)`
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  margin: 10px;
  font-family: ${FONT_FAMILY};
  font-size: 16px;
  label {
    font-weight: 600;
    margin-bottom: 5px;
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
  input,
  textarea {
    background: white;
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    font-family: ${FONT_FAMILY};
    border: 1px solid lightgrey;
    @media screen and (max-width: 600px) {
      font-size: 16px;
      padding: 10px 5px;
    }
  }
`

const LineCont = styled(Container)`
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`
const Submit = styled(Button)`
  background: ${PINK};
  color: white;
  font-family: ${FONT_FAMILY};
  font-weight: 600;
  width: 100%;
  transition: 0.3s linear;
  padding: 10px;
  &:hover {
    background: black;
  }
  @media screen and (max-width: 600px) {
    font-size: 16px;
    padding: 10px 5px;
  }
`

const ContactForm = props => {
  const [formText, setFormText] = useState("SEND")
  const [isBot, setIsBot] = useState(false)
  const handleSubmit = event => {
    event.preventDefault()
    setFormText("SENDING...")
    //get form
    let contactForm = document.querySelector("#contactForm")
    //get value of the message textbox
    let messageData = document.querySelector("#message").value
    //get value of the honeypot question
    let honeyPVal = document.querySelector("#honey")
    const formData = new FormData(contactForm)

    const fakeSend = () => {
      setTimeout(function () {
        setFormText("MESSAGE SENT")
      }, 2000)
      contactForm.reset()
      setTimeout(function () {
        setFormText("SEND")
      }, 7000)
    }

    //function to handle the sending of form on successful validation
    const handleSend = () => {
      fetch(contactForm.getAttribute("action"), {
        method: "POST",
        headers: {
          Accept: "application/x-www-form-urlencoded;charset=UTF-8",
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: new URLSearchParams(formData).toString(),
      }).then(res => {
        if (res) {
          setTimeout(function () {
            setFormText("SENT")
          }, 2000)
          contactForm.reset()
          setTimeout(function () {
            setFormText("SEND")
          }, 7000)
        }
      })
    }

    if (
      //if the message box contains any sort of link to a website, validation will fail and ask to prove if human. Capture Question is image
      messageData.includes("http") ||
      messageData.includes(".com") ||
      messageData.includes("$ ") ||
      messageData.includes("www.")
    ) {
      //trigger fake send
      fakeSend()
    } else {
      handleSend()
    }
  }

  return (
    <Container
      id="contact"
      flexDirection="column"
      maxWidth="600px"
      padding="0 15px"
      other="margin-bottom: 50px;"
    >
      <Container flexDirection="column">
        <HeadingH2
          fontSize="16px"
          textTransform="none"
          padding="0 0 15px 0"
          data-sal="slide-left"
          data-sal-delay="100"
          data-sal-easing="ease"
        >
          Required*
        </HeadingH2>
        <Form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          action="/"
          id="contactForm"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="bot-field" id="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <LineCont>
            <LineWrapper>
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" required />
            </LineWrapper>
            <LineWrapper>
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </LineWrapper>
          </LineCont>
          <LineCont>
            <LineWrapper>
              <label htmlFor="phone">Phone</label>
              <input type="phone" id="phone" name="phone" />
            </LineWrapper>
            <LineWrapper>
              <label htmlFor="subject">Subject *</label>
              <input type="text" id="subject" name="subject" required />
            </LineWrapper>
          </LineCont>
          <LineCont>
            <LineWrapper>
              <label htmlFor="location">Location</label>
              <input type="text" id="location" name="location" />
            </LineWrapper>
            <LineWrapper>
              <label htmlFor="people">Number Of People</label>
              <input type="number" id="people" name="people" />
            </LineWrapper>
          </LineCont>
          <LineCont>
            <LineWrapper>
              <label htmlFor="date">Date</label>
              <input type="date" id="date" name="date" />
            </LineWrapper>
            <LineWrapper>
              <label htmlFor="time">Time</label>
              <input type="time" id="time" name="time" />
            </LineWrapper>
          </LineCont>
          <LineCont>
            <LineWrapper>
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" required rows="10" />
            </LineWrapper>
          </LineCont>
          {/* only shows if fails bot validation */}
          {isBot && (
            <LineCont>
              <LineWrapper>
                <img src="../captcha.png" />
                <input required type="number" id="honey" name="honey" />
              </LineWrapper>
            </LineCont>
          )}
          <Container
            justifyContent="flex-start"
            padding=" 10px"
            other=" @media screen and (max-width: 600px) { padding: 10px 0;  }"
          >
            <Submit
              type="submit"
              className="button"
              data-sal="slide-up"
              data-sal-easing="ease"
              data-sal-delay="200"
            >
              {formText}
            </Submit>
          </Container>
        </Form>
      </Container>
    </Container>
  )
}

export default ContactForm
