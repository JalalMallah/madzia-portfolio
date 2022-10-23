import React, { useState } from 'react';

import PageTitle from 'components/PageTitle';

import styles from '../styles/contact.module.scss';

const Loader = () => <div className={styles.loaderContainer}>Ładuję...</div>;

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMapLoading, setIsMapLoading] = useState(true);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.currentTarget.value);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.currentTarget.value);

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      console.error('Missing fields!');
      return;
    }

    const result = {
      name,
      email,
      message,
    };

    console.table(result);
  };

  return (
    <div className={styles.container}>
      <PageTitle text='Kontakt' />
      <div className={styles.layout}>
        <section className={styles.leftColumn}>
          <form className={styles.form} onSubmit={handleFormSubmit}>
            <div className={styles.formRow}>
              <label htmlFor='name'>Imię</label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={handleNameChange}
                autoComplete='off'
              />
            </div>
            <div className={styles.formRow}>
              <label htmlFor='email'>E-mail</label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={handleEmailChange}
                autoComplete='off'
              />
            </div>
            <div className={styles.formRow}>
              <label htmlFor='message'>Wiadomość</label>
              <textarea
                name='message'
                id='message'
                value={message}
                onChange={handleMessageChange}
                autoComplete='off'
              />
            </div>
            <button className={styles.submitButton}>Wyślij</button>
          </form>
        </section>
        <section className={styles.rightColumn}>
          <p>
            <strong>Telefon:</strong> <a href='tel:668233327'>668233327</a>
          </p>
          <p>
            <strong>E-mail:</strong>{' '}
            <a href='mailto:madzia19962412@wp.pl'>madzia19962412@wp.pl</a>
          </p>
          <p>
            <strong>Adres:</strong> Lipiny 1, 92-701 Łódź
          </p>
          {isMapLoading && <Loader />}
          <iframe
            className={styles.mapContainer}
            style={{
              display: isMapLoading ? 'none' : 'block',
            }}
            src='https://maps.google.com/maps?q=Lipiny%201,%2092-701%20%C5%81%C3%B3d%C5%BA&t=&z=13&ie=UTF8&iwloc=&output=embed'
            scrolling='no'
            onLoad={() => setIsMapLoading(false)}
          />
        </section>
      </div>
    </div>
  );
};

export default Contact;
