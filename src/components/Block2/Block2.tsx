import styles from './Block2.module.scss';

export const Block2 = () => {
  return (
    <section className={styles.block2}>
      <div className={styles.text_box}>
        <p className={styles.thin}>
          Чи бувало у вас, що клієнт звертається з панічними атаками, депресією
          або неконтрольованою агресією, проблеми в стосунках…
        </p>
        <p className={styles.bold}>
          Ви працюєте з симптомами, але результату немає?
        </p>
      </div>
      
      <div className={styles.title_box}>
        <p className={styles.title}>
          Що лікувати першим — <span>залежність</span> чи її{' '}
          <span>наслідки</span>?
        </p>
      </div>
    </section>
  );
};
