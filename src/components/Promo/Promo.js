import styles from "./Promo.module.css";

const Promo = () => {
   return (
      <main className={styles.promo}>
         <div className={styles.sellMore}>
            <div className={styles.title}>
               <h1>
                  Зарабатывайте больше{" "}
                  <span className={styles.title_gradient}>
                     с WELBEX
                  </span>
               </h1>
            </div>
            <div className={styles.description}>
               <p>
                  Развиваем и контролируем продажи за вас
               </p>
            </div>
         </div>
         <div className={styles.consultation}>
            <div className={styles.gifts}>
               <p>
                  Вместе с бесплатной консультацией
                  мы дарим:
               </p>
            </div>
            <div className={styles.advantages}>
               <div className={styles.advantages_title}>
                  <p className={styles.advantages_title}>
                     Виджеты
                  </p>
                  <p className={styles.advantages_desc}>
                     30 готовых решений
                  </p>
               </div>
               <div className={styles.advantages_title}>
                  <p className={styles.advantages_title}>
                     Dashboard
                  </p>
                  <p className={styles.advantages_desc}>
                     с показателями вашего бизнеса
                  </p>
               </div>
               <div className={styles.advantages_title}>
                  <p className={styles.advantages_title}>
                     Skype Аудит
                  </p>
                  <p className={styles.advantages_desc}>
                     отдела продаж и CRM системы
                  </p>
               </div>
               <div className={styles.advantages_title}>
                  <p className={styles.advantages_title}>
                     35 дней
                  </p>
                  <p className={styles.advantages_desc}>
                     использования CRM
                  </p>
               </div>
            </div>
            <button className={styles.button}>
               Получить консультацию
            </button>
         </div>
      </main>
   );
};

export default Promo;
