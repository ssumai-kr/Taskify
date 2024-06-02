import styles from './Logo.module.scss';
import LogoImage from '../../../public/icon/logo_main.svg';

type HelloText = {
  Text: string;
};

function Logo({ Text }: HelloText) {
  return (
    <a href="/">
      <img src={LogoImage} className={styles.LogoImage} alt="LogoImage" />
      <span className={styles.HelloText}>{Text}</span>
    </a>
  );
}

export default Logo;
