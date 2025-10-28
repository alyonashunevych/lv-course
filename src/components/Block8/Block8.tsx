import styles from './Block8.module.scss';

export const Block8 = () => {
  return (
    <section className={styles.block8} id="prices">
      <h3>Вартість курсу</h3>

      <div className={styles.prices}>
        <div className={styles.price}>
          <p className={styles.price_title}>Базовий пакет</p>

          <div className={styles.price_text_box}>
            <p className={styles.price_text}>6 відеолекцій</p>
            <p className={styles.price_text}>Презентації</p>
            <p className={styles.price_text}>
              Практичні завдання, розбір кейсів, протоколи консультування
            </p>
            <p className={styles.price_text}>Доступ до курсу на 1 місяць</p>
          </div>

          <p className={styles.price_value}>4959 грн</p>

          <button>Придбати</button>
        </div>

        <div className={styles.price}>
          <p className={styles.price_title}>Повний пакет</p>

          <div className={styles.price_text_box}>
            <p className={styles.price_text}>Усе з базового пакета</p>
            <p className={styles.price_text}>
              План терапії для клієнта + терапевтичні щоденники
            </p>
            <p className={styles.price_text}>Індивідуальна супервізія</p>
            <p className={styles.price_text}>Доступ до курсу на 6 місяців</p>
          </div>

          <p className={styles.price_value}>7299 грн</p>

          <button>Придбати</button>
        </div>
      </div>
    </section>
  );
};
