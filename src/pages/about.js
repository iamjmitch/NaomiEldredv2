import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container, HeadingH1, Paragraph } from "../styles/shared"
import Layout from "../components/global/layout"
import PageHeader from "../components/global/pageHeader"

const AboutPage = props => {
  return (
    <Layout margin="112.578px 0 0 0" pageName="about" title="About Naomi">
      <PageHeader
        title="About Naomi"
        img="https://images.unsplash.com/photo-1526045478516-99145907023c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus
        vitae nisl sit amet faucibus. Curabitur quis volutpat massa. Morbi ac
        tellus odio. Praesent molestie velit vitae justo elementum, non iaculis
        ex lacinia. Nullam nec consectetur libero. Mauris odio quam, scelerisque
        ac diam nec, cursus volutpat urna. Praesent non molestie justo,
        pellentesque lacinia neque. Sed iaculis interdum nibh, et tristique orci
        efficitur ac. Vestibulum porta est eget venenatis commodo. Sed nec nunc
        lorem. Aliquam ultrices libero fermentum eros porta consectetur.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus
        vitae nisl sit amet faucibus. Curabitur quis volutpat massa. Morbi ac
        tellus odio. Praesent molestie velit vitae justo elementum, non iaculis
        ex lacinia. Nullam nec consectetur libero. Mauris odio quam, scelerisque
        ac diam nec, cursus volutpat urna. Praesent non molestie justo,
        pellentesque lacinia neque. Sed iaculis interdum nibh, et tristique orci
        efficitur ac. Vestibulum porta est eget venenatis commodo. Sed nec nunc
        lorem. Aliquam ultrices libero fermentum eros porta consectetur.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus
        vitae nisl sit amet faucibus. Curabitur quis volutpat massa. Morbi ac
        tellus odio. Praesent molestie velit vitae justo elementum, non iaculis
        ex lacinia. Nullam nec consectetur libero. Mauris odio quam, scelerisque
        ac diam nec, cursus volutpat urna. Praesent non molestie justo,
        pellentesque lacinia neque. Sed iaculis interdum nibh, et tristique orci
        efficitur ac. Vestibulum porta est eget venenatis commodo. Sed nec nunc
        lorem. Aliquam ultrices libero fermentum eros porta consectetur.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus
        vitae nisl sit amet faucibus. Curabitur quis volutpat massa. Morbi ac
        tellus odio. Praesent molestie velit vitae justo elementum, non iaculis
        ex lacinia. Nullam nec consectetur libero. Mauris odio quam, scelerisque
        ac diam nec, cursus volutpat urna. Praesent non molestie justo,
        pellentesque lacinia neque. Sed iaculis interdum nibh, et tristique orci
        efficitur ac. Vestibulum porta est eget venenatis commodo. Sed nec nunc
        lorem. Aliquam ultrices libero fermentum eros porta consectetur.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus
        vitae nisl sit amet faucibus. Curabitur quis volutpat massa. Morbi ac
        tellus odio. Praesent molestie velit vitae justo elementum, non iaculis
        ex lacinia. Nullam nec consectetur libero. Mauris odio quam, scelerisque
        ac diam nec, cursus volutpat urna. Praesent non molestie justo,
        pellentesque lacinia neque. Sed iaculis interdum nibh, et tristique orci
        efficitur ac. Vestibulum porta est eget venenatis commodo. Sed nec nunc
        lorem. Aliquam ultrices libero fermentum eros porta consectetur.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus
        vitae nisl sit amet faucibus. Curabitur quis volutpat massa. Morbi ac
        tellus odio. Praesent molestie velit vitae justo elementum, non iaculis
        ex lacinia. Nullam nec consectetur libero. Mauris odio quam, scelerisque
        ac diam nec, cursus volutpat urna. Praesent non molestie justo,
        pellentesque lacinia neque. Sed iaculis interdum nibh, et tristique orci
        efficitur ac. Vestibulum porta est eget venenatis commodo. Sed nec nunc
        lorem. Aliquam ultrices libero fermentum eros porta consectetur.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus
        vitae nisl sit amet faucibus. Curabitur quis volutpat massa. Morbi ac
        tellus odio. Praesent molestie velit vitae justo elementum, non iaculis
        ex lacinia. Nullam nec consectetur libero. Mauris odio quam, scelerisque
        ac diam nec, cursus volutpat urna. Praesent non molestie justo,
        pellentesque lacinia neque. Sed iaculis interdum nibh, et tristique orci
        efficitur ac. Vestibulum porta est eget venenatis commodo. Sed nec nunc
        lorem. Aliquam ultrices libero fermentum eros porta consectetur.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus
        vitae nisl sit amet faucibus. Curabitur quis volutpat massa. Morbi ac
        tellus odio. Praesent molestie velit vitae justo elementum, non iaculis
        ex lacinia. Nullam nec consectetur libero. Mauris odio quam, scelerisque
        ac diam nec, cursus volutpat urna. Praesent non molestie justo,
        pellentesque lacinia neque. Sed iaculis interdum nibh, et tristique orci
        efficitur ac. Vestibulum porta est eget venenatis commodo. Sed nec nunc
        lorem. Aliquam ultrices libero fermentum eros porta consectetur.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus
        vitae nisl sit amet faucibus. Curabitur quis volutpat massa. Morbi ac
        tellus odio. Praesent molestie velit vitae justo elementum, non iaculis
        ex lacinia. Nullam nec consectetur libero. Mauris odio quam, scelerisque
        ac diam nec, cursus volutpat urna. Praesent non molestie justo,
        pellentesque lacinia neque. Sed iaculis interdum nibh, et tristique orci
        efficitur ac. Vestibulum porta est eget venenatis commodo. Sed nec nunc
        lorem. Aliquam ultrices libero fermentum eros porta consectetur.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus
        vitae nisl sit amet faucibus. Curabitur quis volutpat massa. Morbi ac
        tellus odio. Praesent molestie velit vitae justo elementum, non iaculis
        ex lacinia. Nullam nec consectetur libero. Mauris odio quam, scelerisque
        ac diam nec, cursus volutpat urna. Praesent non molestie justo,
        pellentesque lacinia neque. Sed iaculis interdum nibh, et tristique orci
        efficitur ac. Vestibulum porta est eget venenatis commodo. Sed nec nunc
        lorem. Aliquam ultrices libero fermentum eros porta consectetur.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus
        vitae nisl sit amet faucibus. Curabitur quis volutpat massa. Morbi ac
        tellus odio. Praesent molestie velit vitae justo elementum, non iaculis
        ex lacinia. Nullam nec consectetur libero. Mauris odio quam, scelerisque
        ac diam nec, cursus volutpat urna. Praesent non molestie justo,
        pellentesque lacinia neque. Sed iaculis interdum nibh, et tristique orci
        efficitur ac. Vestibulum porta est eget venenatis commodo. Sed nec nunc
        lorem. Aliquam ultrices libero fermentum eros porta consectetur.
      </Paragraph>
    </Layout>
  )
}

export default AboutPage
