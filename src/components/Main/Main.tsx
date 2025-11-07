import styles from './Main.module.scss';
import img from '/img/lila1.webp';
import lv_background from '/img/lv.webp';
import { Navigation } from '../Navigation';
import { Header } from '../Header';
import arrow from '/img/arrow.svg';

type Props = {
  onOpen: () => void;
};

export const Main: React.FC<Props> = ({ onOpen }) => {
  return (
    <section className={styles.main}>
      <a className={styles.back} href="https://lilavysotska.com/">
        <img src={arrow} className={styles.back_arrow} alt="back icon" />
        На головну
      </a>
      <div className={styles.text_box}>
        <Header onOpen={onOpen} />

        <h1>Курс для психологів:</h1>
        <h2>Консультування клієнтів з залежностями (адикціями)</h2>
        <p className={styles.paragraph}>
          Як бачити більше, ніж симптоми. Що потрібно знати психологу про
          клієнтів з залежностями, щоб отримувати кращий результат і відчувати
          свою компетентність
        </p>

        <a href="#prices">
          <button>Записатися на курс</button>
        </a>
      </div>

      <div className={styles.photo_box}>
        <Navigation />
        <img src={img} alt="Lila Vysotska" />
      </div>

      <img
        src={lv_background}
        className={styles.lv_background}
        alt="LV background"
      />
    </section>
  );
};
