import styles from './Aside.module.scss';
import logo from '/img/logo_white.svg';
import cross from '/img/cross.svg';
import { Navigation } from '../Navigation';
import classNames from 'classnames';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const Aside: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <aside
      className={classNames([styles.aside], {
        open: isOpen,
      })}
      id="menu"
    >
      <img src={logo} className={styles.logo} alt="logo" />

      <Navigation onClose={onClose} />

      <p className={styles.quote}>
        «Одна з причин існування психотерапії в тому, що сповідаючись незнайомій
        людині, відкриваєш свободу бути самим собою. Завдяки тому, що ризикнув
        показати себе комусь, стає легше показати себе самому собі.»
      </p>
      <p className={styles.author}>Карл Вітакер</p>

      <img src={cross} className={styles.cross} alt="cross" onClick={onClose} />
    </aside>
  );
};
