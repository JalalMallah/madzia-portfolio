/* eslint-disable @next/next/no-img-element */
import PageTitle from 'components/PageTitle';

import styles from '../styles/about.module.scss';

const About = () => {
  return (
    <div className={styles.container}>
      <PageTitle text='O Mnie' />
      <div className={styles.layout}>
        <section className={styles.leftColumn}>
          <img
            src='https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt='Photographer'
          />
        </section>
        <section className={styles.rightColumn}>
          <p className={styles.textBox}>
            Hej, nazywam się Magda. Odkąd pamiętam lubiłam robić zdjęcia. Można
            powiedzieć, że fotografia była moją pasją od dziecka.
          </p>
          <p className={styles.textBox}>
            Biorąc do ręki aparat staje się wrażliwsza na piękno, które mnie
            otacza. Co kocham w fotografii? Autentyczne emocje, które mogę
            uchwycić . Zdjęcia zatrzymują te ulotne chwile do których każdy z
            nas z sentymentem powraca.
          </p>
          <p className={styles.textBox}>
            Co mówię osobom, które boją się aparatu, mówią że nie potrafią
            pozować, nie są fotogeniczni. Nie chodzi o pozy i ładne uśmiechy,
            chociaż i one się zdarzają. Dla mnie najważniejsza jest naturalność.
            Uważam, że najpiękniejszych chwil w życiu się nie zaplanuje. Tak
            samo jest z fotografiami. Może właśnie tym ulubionym zdjęciem, nie
            będzie to, w którym zdawaliśmy sobie sprawę z faktu robienia
            zdjęcia, ale to w którym ukochana osoba na nas spojrzała, a my to
            odwzajemniliśmy.
          </p>
          <p className={styles.textBox}>
            Właśnie to chcę pokazać na moich zdjęciach. Chcę aby reportaże z
            wydarzeń były autentyczne i pełne życia. Chcę żeby zdjęcia po latach
            przywołały w Was te emocje, które wtedy Wam towarzyszyły.
          </p>
          <p className={styles.textBox}>
            Każde przyjęcie to nowi ludzie, miejsca i emocje. Choć wydaje się,
            że przecież to kolejny: chrzest, komunia , ślub…. jest to coś
            zupełnie nowego, innego . Do każdego podchodzę indywidualnie,
            dlatego tez jestem gotowa na szalone pomysły moich klientów. MARZY
            WAM SIĘ? Napiszcie o tym do mnie.
          </p>
          <p className={styles.textBox}>
            Przede wszystkim zależy mi na tym, aby moi klienci czuli się
            swobodnie i byli zadowoleni z efektów. To jest WASZ dzień, a ja w
            cieniu, ukryta za swoim aparatem chcę Wam towarzyszyć.
          </p>
          <h4 className={styles.subtitle}>Trochę o moim sprzęcie:</h4>
          <p className={styles.specsBox}>
            BODY: Lustrzanka Canon EOS 5D Mark IV.
          </p>
          <p className={styles.specsBox}>
            Obiektyw Canon 16-35 mm f/2.8L EF USM III
          </p>
          <p className={styles.specsBox}>Obiektyw CANON EF 35 mm f/1.4</p>
          <p className={styles.specsBox}>Obiektyw Canon 50 mm f/1.4</p>
          <p className={styles.specsBox}>Obiektyw Canon 24-70 mm f/2.8</p>
        </section>
      </div>
    </div>
  );
};

export default About;
