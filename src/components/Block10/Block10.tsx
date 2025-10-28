import styles from './Block10.module.scss';

export const Block10 = () => {
  return (
    <section className={styles.block10}>
      <p className={styles.title}>
        Не втрачайте клієнтів через невидимі залежності, навчіться бачити більше,
        ніж симптоми
      </p>

      <a href="#prices"><button>Записатися на курс</button></a>
    </section>
  );
};
