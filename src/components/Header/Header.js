import styles from "./Header.module.css";

import logo from "../../assets/logo_welbex.svg";
import telegram from "../../assets/socials/telegram.svg";
import viber from "../../assets/socials/viber.svg";
import whatsapp from "../../assets/socials/whatsapp.svg";

const Header = () => {
   return (
      <header className={styles.header}>
         <div className={styles.logo}>
            <img src={logo} alt='logo' />
            <p>
               Крупный интегратор CRM в Росcии
               и ещё 8 странах
            </p>
         </div>
         <div className={styles.nav}>
            <div className={styles.pages}>
               <a href='!#'>Услуги</a>
               <a href='!#'>Виджеты</a>
               <a href='!#'>Интеграции</a>
               <a href='!#'>Кейсы</a>
               <a href='!#'>Сертификаты</a>
            </div>

            <div className={styles.phoneNumber}>
               <p>+7 555 555-55-55</p>
            </div>
            <div className={styles.socials}>
               <img src={telegram} alt='telegram icon' />
               <img src={viber} alt='viber icon' />
               <img src={whatsapp} alt='whatsapp icon' />
            </div>
         </div>
      </header>
   );
};

export default Header;
