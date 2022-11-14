import PageTitle from 'components/PageTitle';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from './aboutPageMobile.module.scss';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const AboutPageMobile = () => {
  return (
    <div className={styles.container}>
      <PageTitle text='O Mnie' />
      <p className={styles.textBox}>
        Hej, nazywam się Magda. Odkąd pamiętam robienie zdjęć sprawiało mi
        ogromną przyjemność. Można powiedzieć, że fotografia była moją pasją od
        dziecka.
      </p>
      <p className={styles.textBox}>
        Biorąc do ręki aparat staje się wrażliwsza na piękno, które mnie otacza.
        Co kocham w fotografii? Autentyczne emocje, które mogę uchwycić. Zdjęcia
        zatrzymują te ulotne chwile do których każdy z nas z sentymentem
        powraca.
      </p>
      <LazyLoadImage
        src='/images/madzia.jpg'
        alt='Photographer'
        effect='opacity'
        visibleByDefault={true}
      />
      <p className={styles.textBox}>
        Co mówię osobom, które boją się aparatu, mówią że nie potrafią pozować,
        nie są fotogeniczni? Nie chodzi o pozy i ładne uśmiechy, chociaż i one
        się zdarzają. Dla mnie najważniejsza jest naturalność. Uważam, że
        najpiękniejszych chwil w życiu się nie zaplanuje. Tak samo jest z
        fotografiami. Może właśnie tym ulubionym zdjęciem, nie będzie to, w
        którym zdawaliśmy sobie sprawę z faktu robienia zdjęcia, ale to w którym
        ukochana osoba na nas spojrzała, a my to odwzajemniliśmy.
      </p>
      <p className={styles.textBox}>
        Właśnie to chcę pokazać na moich zdjęciach. Chcę, aby reportaże z
        wydarzeń były autentyczne i pełne życia. Chcę, aby zdjęcia po latach
        przywołały w Was te emocje, które wtedy Wam towarzyszyły.
      </p>
      <p className={styles.textBox}>
        Każde przyjęcie to nowi ludzie, miejsca i emocje. Choć wydaje się, że
        przecież to kolejny chrzest, komunia, ślub… jest to coś zupełnie nowego,
        innego. Do każdego podchodzę indywidualnie, dlatego tez jestem gotowa na
        szalone pomysły moich Klientów. MARZY WAM SIĘ? Napiszcie o tym do mnie.
      </p>
      <p className={styles.textBox}>
        Przede wszystkim zależy mi na tym, aby moi Klienci czuli się swobodnie i
        byli zadowoleni z efektów. To jest WASZ dzień, a ja w cieniu, ukryta za
        swoim aparatem chcę Wam towarzyszyć.
      </p>
      <h4 className={styles.subtitle}>Trochę o moim sprzęcie:</h4>
      <p className={styles.specsBox}>BODY: Lustrzanka Canon EOS 5D Mark IV.</p>
      <p className={styles.specsBox}>
        Obiektyw Canon 16-35 mm f/2.8L EF USM III
      </p>
      <p className={styles.specsBox}>Obiektyw CANON EF 35 mm f/1.4</p>
      <p className={styles.specsBox}>Obiektyw Canon 50 mm f/1.4</p>
      <p className={styles.specsBox}>Obiektyw Canon 24-70 mm f/2.8</p>
    </div>
  );
};

export default AboutPageMobile;
