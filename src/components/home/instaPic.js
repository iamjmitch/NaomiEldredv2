import React from "react"
import styled from "styled-components"

const StyledImg = styled.div`
  overflow: hidden;
  a img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.2s
    opacity: 1;
  }
  a img:hover {
    opacity: 0.8;
  }
`

const InstaPic = props => {
  return (
    <StyledImg data-sal="fade" data-sal-delay="100" data-sal-easing="ease">
      <a href={props.url} target="_blank" rel="noreferrer">
        <img
          className="lazyload"
          data-src-set={`./insta/200w/${props.img} 200w, ./insta/400w/${props.img} 400w, ./insta/full/${props.img} 800w`}
          data-src={`./insta/full/${props.img}`}
          sizes="200w, 400w, 800w"
          alt="from Instagram"
        />
      </a>
    </StyledImg>
  )
}

export default InstaPic
