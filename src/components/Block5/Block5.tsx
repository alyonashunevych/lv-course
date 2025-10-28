import styles from './Block5.module.scss';

export const Block5 = () => {
  return (
    <section className={styles.block5} id='target'>
      <h3>Для кого курс</h3>

      <div className={styles.item_box}>
        <div className={styles.point} />
        <p className={styles.text}>
          Для психологів, які хочуть поглибити знання у сфері адикцій
        </p>
      </div>

      <div className={styles.item_box}>
        <div className={styles.point} />
        <p className={styles.text}>
          Для людей, які мають проблему залежності або їх близькі
        </p>
      </div>
    </section>
  );
};
