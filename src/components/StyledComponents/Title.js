import React from 'react';
// import styled from 'styled-components';
import styled from '../../scss/components/Title.module.scss';

const Title = ({ title, subtitle }) => {
  return (
    <div className={styled.title}>
      <h4>
        <span className={styled.primary}> {title} </span>
        <span className={styled.secondary}>{subtitle}</span>
      </h4>
    </div>
  );
};

export default Title;
