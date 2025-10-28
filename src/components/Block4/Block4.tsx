import styles from './Block4.module.scss';
import img1 from '/img/lection_icon1.svg';
import img2 from '/img/lection_icon2.svg';
import img3 from '/img/lection_icon3.svg';
import img4 from '/img/lection_icon4.svg';
import img5 from '/img/lection_icon5.svg';
import img6 from '/img/lection_icon6.svg';

export const Block4 = () => {
  return (
    <section className={styles.block4} id="program">
      <div className={styles.title_box}>
        <h3 style={{ marginBottom: '5px' }}>Програма курсу</h3>
        <p className={styles.subtitle}>6 лекцій = 6 ключових тем</p>
        <p className={styles.subtitle}>Презентації та матеріали</p>
        <p className={styles.subtitle}>
          Практичні завдання, розбір кейсів, протоколи консультування
        </p>
      </div>

      <div className={styles.lections_box}>
        <div className={styles.lection}>
          <img
            className={styles.lection_img}
            src={img1}
            alt="lection icon"
            loading="lazy"
          />
          <div className={styles.lection_text_box}>
            <p className={styles.lection_title}>Лекція 1. Що таке залежність</p>
            <p className={styles.lection_text}>
              Нейропсихологія адикцій, залежність - це хвороба мозку
            </p>
          </div>
        </div>

        <div className={styles.lection}>
          <img
            className={styles.lection_img}
            src={img2}
            alt="lection icon"
            loading="lazy"
          />
          <div className={styles.lection_text_box}>
            <p className={styles.lection_title}>
              Лекція 2. Залежність і емоційна регуляція
            </p>
            <p className={styles.lection_text}>
              Які психологічні та емоційні порушення викликає вживання ПАР
            </p>
          </div>
        </div>

        <div className={styles.lection}>
          <img
            className={styles.lection_img}
            src={img3}
            alt="lection icon"
            loading="lazy"
          />
          <div className={styles.lection_text_box} style={{ width: '100%' }}>
            <p className={styles.lection_title}>
              Лекція 3. Заперечення та психологічні захисти в терапії
            </p>
            <p className={styles.lection_text}>
              Перешкоди в терапії залежностей
            </p>
          </div>
        </div>

        <div className={styles.lection}>
          <img
            className={styles.lection_img}
            src={img4}
            alt="lection icon"
            loading="lazy"
          />
          <div className={styles.lection_text_box}>
            <p className={styles.lection_title}>
              Лекція 4. Залежність і травма (PTSD, CPTSD)
            </p>
            <p className={styles.lection_text}>
              Вплив травмуючого фактора в процесі терапії залежності
            </p>
          </div>
        </div>

        <div className={styles.lection}>
          <img
            className={styles.lection_img}
            src={img5}
            alt="lection icon"
            loading="lazy"
          />
          <div className={styles.lection_text_box} style={{ width: '100%' }}>
            <p className={styles.lection_title}>
              Лекція 5. Тригери, тяга та постабстинентний синдром
            </p>
            <p className={styles.lection_text}>
              Чому відбуваються зриви навіть після тривалого утримання від ПАР
            </p>
          </div>
        </div>

        <div className={styles.lection}>
          <img
            className={styles.lection_img}
            src={img6}
            alt="lection icon"
            loading="lazy"
          />
          <div className={styles.lection_text_box} style={{ width: '100%' }}>
            <p className={styles.lection_title}>Лекція 6. Кейс-аналіз</p>
            <p className={styles.lection_text} style={{ marginTop: '7px' }}>
              Розбір клієнтського кейсу
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
