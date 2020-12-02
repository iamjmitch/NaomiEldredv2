import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import { PINK } from "../../styles/colors"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { Container, Paragraph } from "../../styles/shared"
import styled from "styled-components"

const StyledAccordion = styled(Accordion)`
  margin-bottom: 10px;
  padding: 15px 0;
  border: 1px solid lightgrey;
  border-radius: 0 !important;
  box-shadow: none;
  overflow-x: hidden;
  p {
    text-align: left;
  }
`

const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  fill: ${PINK};
`

const StyledAnswer = styled(Paragraph)`
  color: black;
  font-size: 16px;
  padding: 0;
  text-align: left;
`
const StyledQuestion = styled(Paragraph)`
  color: black;
  font-size: 16px;
  padding: 0;
  text-align: left !important;
`

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginBottom: "10px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

const SimpleAccordion = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <StyledAccordion>
        <AccordionSummary
          expandIcon={<StyledExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <StyledQuestion>
            <Container alignItems="flex-start">
              <Paragraph
                textTransform="none"
                padding="0 5px"
                fontSize="18px"
                lineHeight="25px"
                other="font-weight:600"
                textAlign="left"
              >
                {props.question}
              </Paragraph>
            </Container>
          </StyledQuestion>
        </AccordionSummary>
        <AccordionDetails>
          <StyledAnswer>
            <Container alignItems="flex-start">
              <Paragraph
                textTransform="none"
                padding="0 5px"
                lineHeight="25px"
                fontSize="16px"
              >
                {props.answer}
              </Paragraph>
            </Container>
          </StyledAnswer>
        </AccordionDetails>
      </StyledAccordion>
    </div>
  )
}

export default SimpleAccordion
