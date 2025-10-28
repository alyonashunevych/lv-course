import styles from './Header.module.scss';
import logo from '/img/logo.svg';
import menu from '/img/menu.svg';
import tg_icon from '/img/tg.svg';
import phone from '/img/phone.svg';

type Props = {
  onOpen: () => void;
};

export const Header: React.FC<Props> = ({ onOpen }) => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />

      <div className={styles.icons_box}>
        <a href="tel:+380676382703">
          <img src={phone} className={styles.menu_icon} alt="phone icon" />
        </a>
        <a href="https://t.me/lilavisotska">
          <img src={tg_icon} className={styles.menu_icon} alt="tg icon" />
        </a>
        <img
          src={menu}
          className={styles.menu_icon}
          alt="menu"
          onClick={onOpen}
        />
      </div>
    </header>
  );
};
