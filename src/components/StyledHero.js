import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
const StyledHero = ({ img, className, children, home }) => (
  <BackgroundImage className={className} fluid={img} home={home}>
    {children}
  </BackgroundImage>
);

export default styled(StyledHero)`
  min-height: ${props => (props.home ? 'calc(100vh - 62px)' : '50vh')};
  background: ${props =>
    props.home
      ? 'linear-gradient(rgba(96, 80, 233, 0.7), rgba(0, 0, 0, 0.7))'
      : 'linear-gradient(rgba(15,32,39,0.7),rgba(32,58,67,0.7),rgba(44,83,100,0.6))'};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;
