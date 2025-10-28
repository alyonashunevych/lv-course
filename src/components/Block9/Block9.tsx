import { useState } from 'react';
import styles from './Block9.module.scss';
import classNames from 'classnames';

const faq = [
  {
    id: 1,
    question: 'Чи потрібен досвід роботи психологом?',
    answer: 'Ні, курс підійде навіть студентам.',
  },
  {
    id: 2,
    question: 'Чи можна переглядати записи у будь-який час?',
    answer:
      'Так. Ви отримуєте запис усіх занять і можете переглядати їх тоді, коли вам зручно. У базовому пакеті доступ діє 3 місяці, у повному пакеті 6 місяців.',
  },
  {
    id: 3,
    question: 'Чи підходить курс для тих, хто сам переживає залежність?',
    answer:
      'Так. Курс допоможе краще зрозуміти, як працює механізм тяги, чому відбуваються зриви та як поступово відновлювати контроль.',
  },
];

export const Block9 = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  return (
    <section className={styles.faq}>
      <h3>FAQ</h3>

      {faq.map(({id, question, answer}) => (
        <div className={styles.faq_item} key={id}>
          <button
            className={classNames([styles.faq_question], {
              [styles.active]: id === openItemId,
            })}
            onClick={() =>
              setOpenItemId(id === openItemId ? null : id)
            }
          >
            {question}
            <span className={styles.arrow}>▼</span>
          </button>

          <div
            className={classNames([styles.faq_answer], {
              [styles.open]: id === openItemId,
            })}
          >
            {answer}
          </div>
        </div>
      ))}
    </section>
  );
};
