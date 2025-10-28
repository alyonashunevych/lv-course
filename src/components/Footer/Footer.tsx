import styles from './Footer.module.scss';
import logo from '/img/logo.svg';
import fb_icon from '/img/fb.svg';
import inst_icon from '/img/inst.svg';
import tg_icon from '/img/tg.svg';
import wa_icon from '/img/wa.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.box1}>
        <img src={logo} className={styles.logo} alt="logo" loading="lazy"/>

        <div className={styles.social_media_box}>
          <a href="https://www.facebook.com/403351350415212/posts/1071333083617032/">
            <img src={fb_icon} alt="Facebook icon" loading="lazy"/>
          </a>
          <a href="https://instagram.com/lila.visotska?igshid=NGVhN2U2NjQ0Yg==">
            <img src={inst_icon} alt="Instagram icon" loading="lazy"/>
          </a>
          <a href="https://t.me/lilavisotska">
            <img src={tg_icon} alt="Telegram icon" loading="lazy"/>
          </a>
          <a href="https://wa.me/380676382703">
            <img src={wa_icon} alt="WhatsApp icon" loading="lazy"/>
          </a>
        </div>
      </div>

      <div className={styles.box2}>
        <a
          className={styles.link}
          href="mailto:lilaskanda@gmail.com"
          style={{ textDecoration: 'none' }}
        >
          lilaskanda@gmail.com
        </a>
        <a
          className={styles.link}
          href="tel:+380676382703"
          style={{ textDecoration: 'none' }}
        >
          +380676382703
        </a>
      </div>

      <div className={styles.box3}>
        <a
          className={styles.link}
          href="https://lilavysotska.com/privacypolicy/"
        >
          Політика конфіденційності
        </a>
        <a className={styles.link} href="https://lilavysotska.com/etika/">
          Правила та етика
        </a>
        <a className={styles.link} href="https://lilavysotska.com/info/">
          Інформаційний договір
        </a>
        <a className={styles.link} href="https://lilavysotska.com/offer/">
          Договір оферти
        </a>
      </div>
    </footer>
  );
};
