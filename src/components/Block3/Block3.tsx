import styles from './Block3.module.scss';

export const Block3 = () => {
  return (
    <section className={styles.block3}>
      <h3>Цей курс допоможе <br/> вам навчитися:</h3>
      <div className={styles.items_box}>
        <div className={styles.item}>
          <div className={styles.item_num_box}>
            <div className={styles.line_mobile} />
            <p className={styles.number}>I</p>
            <div className={styles.line} />
          </div>
          <p className={styles.item_text}>
            Розпізнавати залежність <br/>і адективну поведінку за симптомами та
            ознаками
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.item_num_box}>
            <div className={styles.line_mobile} />
            <p className={styles.number}>II</p>
            <div className={styles.line} />
          </div>
          <p className={styles.item_text}>
            Розуміти, як ПАР змінюють мозок, психіку, моральні цінності
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.item_num_box}>
            <div className={styles.line_mobile} />
            <p className={styles.number}>III</p>
            <div className={styles.line} />
          </div>
          <p className={styles.item_text} style={{width: '90%'}}>
            Працювати з клієнтами у запереченні та психологічних захистах, вплив
            тригерів, КПТСР та тяга
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.item_num_box}>
            <div className={styles.line_mobile} />
            <p className={styles.number}>IV</p>
            <div className={styles.line} />
          </div>
          <p className={styles.item_text}>
            Використовувати сучасні підходи та техніки
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.item_num_box}>
            <div className={styles.line_mobile} />
            <p className={styles.number}>V</p>
            <div className={styles.line} />
          </div>
          <p className={styles.item_text}>
            Відчувати професійну компетентність
          </p>
        </div>
      </div>
    </section>
  );
};
