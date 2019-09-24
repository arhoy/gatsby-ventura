import React, { useState } from 'react';
import styles from '../../scss/day.module.scss';
import { FaAngleDown } from 'react-icons/fa';

const Day = ({ day, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  const showInfoHandler = () => {
    setShowInfo(prevShowInfo => !prevShowInfo);
  };
  return (
    <article className={styles.day}>
      <h4>
        {day}
        <button onClick={showInfoHandler} className={styles.btn}>
          <FaAngleDown />
        </button>
      </h4>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Day;
