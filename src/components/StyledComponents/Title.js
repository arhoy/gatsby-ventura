import React from 'react';
import styled from 'styled-components';

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h4>
        <span className="title"> {title} </span>
        <span>{subtitle}</span>
      </h4>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    color: ${props => props.theme.black};
  }
  .title {
    color: ${props => props.theme.primary};
    margin: 0.3rem 0.3rem;
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
    }
  }
`;

export default Title;
