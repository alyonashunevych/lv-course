import styles from './Block6.module.scss';
import photo from './../../../public/img/lila2.png';

export const Block6 = () => {
  return (
    <section className={styles.block6} id="author">
      <h3>Чому цей курс зі мною</h3>

      <div className={styles.author_box}>
        <img className={styles.photo} src={photo} alt="Lila Skandanatkh" loading="lazy"/>

        <div className={styles.text_box}>
          <p className={styles.name}>Ліла Сканданатх</p>

          <p className={styles.text}>
            Я — клінічний психолог,та клінічний супервізор, який глибоко
            розуміє, як психоактивні речовини впливають на мозок і поведінку.
          </p>
          <p className={styles.text}>
            Понад десять років я працюю із залежностями, бачу не лише симптом, а
            причину — біль і травму, що стоять за ним. Мої клієнти проходять
            шлях від хаосу до стабільності, від сорому — до самоприйняття, і
            зберігають тривалу ремісію.
          </p>
          <p className={styles.text}>
            Я знаю всі “підводні камені” цього процесу, бо працювала у
            реабілітаційному центрі й бачу, що справжнє одужання починається не
            з відмови, а з усвідомлення. Дієві доказові протоколи, сучасні
            підходи і дослідження. Реальні кейси та позитивні відгуки чоловіків,
            жінок та сімейних пар, які справились з цією хворобою.
          </p>
        </div>
      </div>
    </section>
  );
};
