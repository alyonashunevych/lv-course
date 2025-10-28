import styles from './Navigation.module.scss';

type Props = {
  onClose?: () => void;
};

export const Navigation: React.FC<Props> = ({ onClose }) => {
  return (
    <nav className={styles.navbar}>
      <a
        className={styles.navbar_item}
        href="https://lilavysotska.com/"
        onClick={onClose}
      >
        На головну
      </a>
      <a className={styles.navbar_item} href="#program" onClick={onClose}>
        Програма
      </a>
      <a className={styles.navbar_item} href="#target" onClick={onClose}>
        Для кого курс
      </a>
      <a className={styles.navbar_item} href="#author" onClick={onClose}>
        Про автора
      </a>
      <a className={styles.navbar_item} href="#reviews" onClick={onClose}>
        Відгуки
      </a>
    </nav>
  );
};
