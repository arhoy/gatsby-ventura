import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import img from '../images/apple.jpg';
import Image from 'gatsby-image';

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "apple.jpg" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "pear.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Images = () => {
  const data = useStaticQuery(getImages);
  const { fluid, fixed } = data;
  console.log(fluid);
  return (
    <Wrapper>
      <article>
        <h3>Regular Image</h3>
        <img src={img} className="basic" />
      </article>
      <article>
        <h3>Fixed Image/Blur</h3>
        <Image fixed={fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>Fluid Image/svg</h3>
        <Image fluid={fluid.childImageSharp.fluid} />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
  text-align: center;
  text-transform: capitalize;
  article {
    border: 3px solid black;
    padding: 1rem 0;
  }
  .basic {
    width: 100%;
  }
`;

export default Images;
