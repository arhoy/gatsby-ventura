import React from 'react';
import Title from '../../components/StyledComponents/Title';
import styles from '../../scss/contact.module.scss';
const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form
          className={styles.form}
          action={`https://formspree.io/arhoy@ualberta.ca`}
          method="POST"
        >
          <div>
            <input
              type="text"
              name="name"
              className={styles.formControl}
              placeholder="Jane Doe"
              id="name"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              className={styles.formControl}
              placeholder="janedoe@gmail.com"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="message"> Message </label>
            <textarea
              type="textarea"
              name="message"
              className={styles.formControl}
              rows="10"
              placeholder="How can we help you?"
              id="message"
            />
          </div>
          <div>
            <input
              type="submit"
              value="submit here"
              className={styles.submit}
            />
          </div>
          <input
            type="hidden"
            name="_next"
            value="https://ventura-gatsby-site-101.netlify.com/thank-you"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
